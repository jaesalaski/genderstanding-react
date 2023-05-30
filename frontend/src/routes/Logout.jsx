import { Link, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import React from 'react';

export default function Logout() {
    const { setUser } = useOutletContext();


    useEffect(() => {
        fetch("/api/logout")
        .then((res) => res.json())
        .then(() => {
            setUser(null);
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