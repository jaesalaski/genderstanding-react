import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./style.css";
import "./tailwind.config.js";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Index from "./routes/Index";
import Profile from "./routes/Profile";
import About from "./routes/About";
import Feed from "./routes/Feed";

// import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "feed",
        element: <Feed />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
