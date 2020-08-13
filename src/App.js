import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRoom";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Home></Home>
      <Rooms></Rooms>
      <SingleRooms></SingleRooms>
      <Error></Error>
    </>
  );
}

export default App;
