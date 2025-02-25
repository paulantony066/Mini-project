import React from "react";

import Sidebar from "../../components/Sidebar";
import Employeedetail from "../../components/Employeedetail";
import Progressbar from "../../components/Progressbar";
import Button from "../../components/Button";
import Performance from "../../components/Performance";
import Table from "../../components/Table";


export default function Manager() {
    return (
        <div class="w-screen h-screen bg-black text-white flex overflow-y-auto">
         <div>
            <Sidebar/>
         </div>
            
            <div class="w-screen overflow-y-auto">
            <div>
                <Employeedetail/>
            </div>
            <div>
                <Progressbar/>
            </div>
            <br />
            <div class="flex justify-evenly">
                <Performance/>
                <Performance/>
                <Performance/>
                <Performance/>
            </div>
            <br />
            <div>
                <Table/>
                <br />
                <Button/>
            </div>

            </div>
    </div>
    )
}

  
