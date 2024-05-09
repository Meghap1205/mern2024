import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: ""
    });
    const [loading, setLoading] = useState(true);
    const { authorizationToken } = useAuth();
    const params = useParams();

    useEffect(() => {
        const getSingleUserData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const userData = await response.json();
                console.log("users single data in admin update", userData);

                setData(userData);
                setLoading(false);

            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        getSingleUserData();
    }, [authorizationToken, params.id]); 

    const handleInput = (e) => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Updated successfully");
            } else {
                toast.error("Update failed");
            }
        } catch (error) {
            console.error("Error updating user data:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="off"
                            value={data.username || ""}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            value={data.email || ""}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            autoComplete="off"
                            value={data.phone || ""}
                            onChange={handleInput}
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-submit">
                        Update User Data
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AdminUpdate;
