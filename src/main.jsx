import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Root from "./Components/Root/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";

import AuthProvider from "./Components/Context/AuthProvider.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Register from "./Components/Authentication/Register.jsx";
import Login from "./Components/Authentication/Login.jsx";
import { HelmetProvider } from "react-helmet-async";
import AddTask from "./Components/Tasks/AddTask.jsx";
import BrowseTasks from "./Components/Tasks/BrowseTasks.jsx";
import TaskDetails from "./Components/Tasks/TaskDetails.jsx";
import PostedTasks from "./Components/Tasks/PostedTasks.jsx";
import UpdateTask from "./Components/Tasks/UpdateTask.jsx";
import PrivateRoute from "./Components/Private Route/PrivateRoute.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Homepage,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/addtask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/browsetask",
        Component: BrowseTasks,
      },
      {
        path: "/taskdetails/:id",
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytasks",
        element: (
          <PrivateRoute>
            <PostedTasks></PostedTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "update-task/:id",
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
