import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Messages from "../components/Messages";

export default function Root() {
    const [user, setUser] = useState();
    const [messages, setMessages] = useState({});

    useEffect(() => {
        fetch('/user')
            .then(res => res.json())
            .then((res) => setUser(res.user));
    }, []);

    return (
        <>
            <header>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link to ={user ? '/profile' : '/'} className="btn btn-ghost normal-case text-xl text-secondary" >Genderstanding</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to="/about">About</Link></li>
                            {/* <li><a href="mailto:jae@salaski.net">Contact</a></li> */}
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar border border-primary">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt="Profile" />
                            </div>
                        </label>
                        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 border border-primary rounded-box w-52">
                            <li>
                                <a className="justify-between" href="/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <Messages messages={messages} />
            <Outlet context={{user, setUser, messages, setMessages}}/>
        </>
    );
}