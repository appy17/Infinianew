import React from "react";
import MainRoutes from "./components/MainRoutes"

import Footer from "./components/Footer";

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
