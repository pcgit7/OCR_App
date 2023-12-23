import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageUploader from "./Components/ImageUploader";
import OCR_Filter from "./Components/OCR_Filter";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ImageUploader />} />
          <Route path="/filter" element={<OCR_Filter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
