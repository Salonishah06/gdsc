import './App.css';
import React from "react";

import SideBar from './components/SideBarStud';
import Dashboard  from './pages/Dashboard';
import SideBarTeach from './components/SideBarTeach';
import NavBar from './components/NavBar';
import  DashBoardCard  from './components/DashBoardCard';
import DashBoardCardTeach from './components/DasBoardCardTeach';
import Risk from './pages/Risk';
import FormStud from './pages/FormStud';
import FormTeach from './pages/FormTeach';
import Chart from './components/Chart';
import DropDown from './components/DropDown';


function App() {
  return (
   
      <div className="App">
        
         {/* <SideBar /> */}
         {/* <Dashboard/> */}
         {/* <SideBarTeach/> */}
         {/* <NavBar/> */}
         {/* <DashBoardCard/> */}
         {/* <DashBoardCardTeach/> */}
         {/* <Risk/> */}
         {/* <FormStud/> */}
         {/* <FormTeach/> */}
         {/* <Chart/> */}
         <DropDown />
         
      </div>
    
  );
}

export default App;
