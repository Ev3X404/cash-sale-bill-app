import { BrowserRouter, Routes, Route } from "react-router-dom";

// pagescomponent
import AddBillList from "./pages/addList/addBillList";
import Profile from "./pages/profile/profile";
import React from "react";
import ShowPages from "./pages/showPage/showPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Profile />} />
          <Route path="/2" element={<AddBillList />} />
          <Route path="/3" element={<ShowPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
