import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OCR_Filter from "./Components/OCR_Filter";
import Header from "./Components/Header";
import { Toaster } from "react-hot-toast";
import ImageProcessor from "./Components/ImageProcessor";
import {useSelector} from 'react-redux';
import Loader from './Components/Loader';

const App = () => {

  const {loader} = useSelector(state => state.loaderReducer);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Toaster position="top-center" reverseOrder={false} />
        {loader && <Loader />}
        <Routes>
          <Route path="/" element={<ImageProcessor />} />
          <Route path="/filter" element={<OCR_Filter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
