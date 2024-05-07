import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "./store/auth.jsx";
import { ServProvider } from './store/serv.jsx';
import { ToastContainer } from 'react-toastify';// for alerts
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <ServProvider>
  <AuthProvider>
      <React.StrictMode>
        <App />
        <ToastContainer />
      </React.StrictMode>
  </AuthProvider>
  </ServProvider>,
);
