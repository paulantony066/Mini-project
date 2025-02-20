import React from "react";

import Sidebar from "../../components/Sidebar";
import Employeedetail from "../../components/Employeedetail";
import Progressbar from "../../components/Progressbar";


export default function Manager() {
    return (
        <div class="w-screen h-screen bg-black text-white flex ">
         <div>
            <Sidebar/>
         </div>
            
            <div class="w-screen">
            <div>
                <Employeedetail/>
            </div>
            <div>
                <Progressbar/>
            </div>
            </div>
    </div>
    )
}

  
