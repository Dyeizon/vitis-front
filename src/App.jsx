import "./reset.css";
import "./index.css";

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./[Home]/Home";
import ErrorPage from "./[ErrorPage]/ErrorPage";
import Dashboard from "./[Dashboard]/Dashboard";

const supabaseUrl = 'https://dyzppsrzcxusoksywfyi.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

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