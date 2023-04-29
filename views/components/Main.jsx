import React from 'react';

export default function Main(props) {
    return (
        <html lang="en" data-theme="cupcake">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://cdn.tailwindcss.com"></script>
                <link href="https://cdn.jsdelivr.net/npm/daisyui@2.31.0/dist/full.css" rel="stylesheet" type="text/css" />
                <title>Genderstanding</title>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/imgs/favicon-32x32.png"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <header>
                <div class="navbar bg-base-100">
                    <div class="flex-1">
                        <a class="btn btn-ghost normal-case text-xl text-secondary" href="/profile">Genderstanding</a>
                    </div>
                    <div class="flex-none">
                        <ul class="menu menu-horizontal p-0">
                            <li><a href="/about">About</a></li>
                            <li><a href="mailto:jae@salaski.net">Contact</a></li>
                        </ul>
                    </div>
                    <div class="dropdown dropdown-end">
                        <label tabIndex="0" class="btn btn-ghost btn-circle avatar border border-primary">
                            <div class="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 border border-primary rounded-box w-52">
                            <li>
                                <a class="justify-between">Profile
                                    <span class="badge bg-secondary text-white">Soon!</span>
                                </a>
                            </li>
                            <li>
                                <a class="justify-between">Settings
                                    <span class="badge bg-secondary text-white">Soon!</span>
                                </a>
                            </li>
                            <li>
                                <a class="justify-between" href="/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            { props.children }
                <div class="grid justify-items-center">
                    <footer class="card footer footer-center text-base-content w-11/12 mb-5">
                        <div>
                            <p>© 2023 Genderstanding</p>
                        </div>
                    </footer>
                </div>
        </html>
    )
}