import "./reset.css";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./[Home]/Home";
import ErrorPage from "./[ErrorPage]/ErrorPage";
import Dashboard from "./[Dashboard]/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "dashboard",
    element: <Dashboard/>
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}