import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";
import ErrorPage from "../pages/ErrorPage";
import Edit from "../pages/Edit";
import Users from "../pages/Users";
import Course from "../pages/Course";
import CourseDetail from "../pages/CourseDetail";

const router = createBrowserRouter([
  {
    path: "student",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "courses",
        element: <Course />,
      },
      {
        path: "courses/:courseId",
        element: <CourseDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default router;
