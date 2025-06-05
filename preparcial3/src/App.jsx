// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { Home } from "./pages/Home/Home";
import { Edit } from "./pages/Edit/Edit";
import { Create } from "./pages/Create/Create";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
