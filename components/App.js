import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomeHeader from "components/HomeHeader";
import HomeFooter from "components/HomeFooter";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeHeader />}></Route>
          <Route path="/HomeFooter/:id" element={<HomeFooter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
