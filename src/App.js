import React, { useEffect, useState } from "react";
import MainRoutes from "./components/MainRoutes"
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from 'styled-components';
import Banner from "./components/Banner";
import Header2 from "./components/Header2";

const App = () => {
 

  return (
    <> 

    
        <div className="w-full">
          {/* <Header /> */}
          <Header2 />
          <MainRoutes />
          
          <Footer />
         
        </div>
 
    </>
  );
};



export default App;
