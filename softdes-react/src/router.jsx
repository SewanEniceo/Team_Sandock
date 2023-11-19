import {Routes, createBrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import { Navigate } from "react-router-dom";
import Dashboard from "./Home";
import Books from "./pages/Books";
import Notification from "./pages/Notifications";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="Dashboard"/>
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/books',
                element: <Books/>
            },
            {
                path: '/notifications',
                element: <Notification/>
            },
            {
                path: '/profile',
                element: <Profile/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    },
])

export default router;