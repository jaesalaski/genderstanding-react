import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import React from 'react';

export default function Logout() {
    const { setUser } = useOutletContext();
    const navigate = useNavigate();


    useEffect(() => {
        fetch("/logout")
        .then(() => {
            setUser(null);
            navigate("/");
        });
    }, [setUser]);

    return (
        <main className="container">
        <div className="row justify-content-around mt-5">
            <p>Logging out...</p>
        </div>
    </main>
    );
}