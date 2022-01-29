import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Routes,
   
  } from "react-router-dom";

import Index from "./Component/index";
import Pie from "./Component/footer/pie";
import NavBar from "./Component/navbar/navbar";
import Registrarse from "./Component/modal/Login";
import Auriculares from "../src/Component/auriculares/auriculares"
import Cables from "./Component/cables/Cables";
import AccesoriosAutos from "./Component/accesoriosAuto/AccesoriosAuto";
import Logo from "./Component/logo/logo";









const AppRouter = () => {
    return (
       
        <Router>
            <Logo />
        
         <Registrarse />
        
        <Routes>
        <Route path= "/accesoriosauto" element= {<AccesoriosAutos />} />;
        <Route path= "/cables" element= {<Cables />} />;
        <Route path= "/auriculares" element= {<Auriculares />} />;
        <Route path= "/" element= {<Index />} />;
        
        </Routes>
        <NavBar />
        <Pie />
        
        </Router>
    )
       
    }

  

export default AppRouter