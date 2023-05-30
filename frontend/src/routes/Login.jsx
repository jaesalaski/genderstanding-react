import React from 'react'
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Login() {
    const { setUser, setMessages } = useOutletContext();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const response = await fetch(form.action, {
            method: form.method,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(new FormData(form)),
        });
        const json = await response.json();
        if (json.messages) setMessages(json.messages);
        if (json.user) {
            setUser(json.user);
            navigate("/profile");
    }

    return (
        <main className="hero min-h-fit bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-primary">Close the <span className="text-secondary">Understanding Gap</span></h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <section className="col-6 mt-5">
                        <form action="/profile" method="POST" onSubmit={handleSubmit}>
                            <div className="card-body form-control">
                                <div className="form-control">
                                    <label htmlFor="exampleInputEmail" className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="input input-bordered min-w-full"
                                        placeholder="email"
                                        id="email"
                                        name="email"
                                    />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="exampleInputPassword" className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="input input-bordered min-w-full"
                                        placeholder="password"
                                        id="password"
                                        name="password"
                                    />
                                    <label className="label">
                                        <a href="brokenLink" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <button type="submit" className="btn btn-primary min-w-full mt-2">Login</button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </main>
    );
}