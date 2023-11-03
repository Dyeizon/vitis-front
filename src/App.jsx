import "./reset.css";
import "./index.css";

import React, { useState } from "react";

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
    element: <Dashboard/>,
  }
]);

export const VitisContext = React.createContext();

export default function App() {
  const [temp, setTemp] = useState();
  const [cycle, setCycle] = useState();
  const [humidity, setHumidity] = useState();
  const [city, setCity] = useState();

  return (
    <VitisContext.Provider value={{temp, setTemp, cycle, setCycle, humidity, setHumidity, city, setCity}}>
      <RouterProvider router={router}/>
    </VitisContext.Provider>
  );
}