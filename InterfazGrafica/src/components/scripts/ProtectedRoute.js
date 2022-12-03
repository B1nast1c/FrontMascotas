import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");
    return (
        token != null ? children : <Navigate to="/" />
    );
}

export default ProtectedRoute