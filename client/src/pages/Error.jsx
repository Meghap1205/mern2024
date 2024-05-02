import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section>
        <div className="error-page">
            <h2>404</h2>
            <h4>sorry! page not found</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod similique vero quaerat voluptates animi consectetur numquam, delectus ex totam iusto, corporis consequuntur ea commodi quibusdam beatae optio. Eos, iure quia.</p>

            <div className="btns">
                <button><NavLink to= "/">return home</NavLink></button>
                <button><NavLink to= "/contact">report problem</NavLink></button>
            </div>
        </div>
    </section>
  )
}

export default Error
