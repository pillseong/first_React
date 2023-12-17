import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Board from "./component/Board";
import Show from "./component/Show";
import Main from "./component/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='Board' element={<Board />} />
        <Route path='Show' element={<Show />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
