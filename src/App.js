import React, { useEffect, useState } from "react";
import MainRoutes from "./components/MainRoutes"
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from 'styled-components';
import Banner from "./components/Banner";

const App = () => {
 

  return (
    <> 

    
        <div className="w-full">
          <Header />
          <MainRoutes />
          <Footer />
         
        </div>
 
    </>
  );
};



export default App;
