import React from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Signup() {
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
    <main>
        <div className="grid h-screen place-items-center">
            <div className="card w-96 bg-base-100 shadow-xl text-center">
                <div className="card-body">
                    <div className="card-body text-center items-center">
                        <h2 className="card-title">Sign Up</h2>
                    </div>
                    <form action="/signup" method="POST" onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="user name"
                                className="input input-bordered w-full max-w-xs"
                                id="userName"
                            name="userName"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="email"
                            className="input input-bordered w-full max-w-xs"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered w-full max-w-xs"
                            name="password"
                            id="password"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="confirm password"
                            className="input input-bordered w-full max-w-xs"
                            name="confirmPassword"
                            id="confirmPassword"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">I have <span className="text-secondary">questions</span> about gender identity</span>
                            <input
                                type="checkbox"
                                className="checkbox checkbox-secondary"
                                name="hasQuestions"
                                id="hasQuestions"
                                value="hasQuestions"
                            />
                        </label>
                        <label className="label cursor-pointer">
                            <span className="label-text">I have <span className="text-primary">answers</span> about gender identity</span>
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                                name="hasAnswers"
                                id="hasAnswers"
                                value="hasAnswers"
                            />
                        </label>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </main>
);
}