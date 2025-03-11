import React from "react";

import Sidebar from "../../components/Sidebar";
import Employeedetail from "../../components/Employeedetail";
import Progressbar from "../../components/Progressbar";
import Button from "../../components/Button";
import Performance from "../../components/Performance";
import Table from "../../components/Table";
import Barchart from "../../components/Barchart";
import { useLocation } from "react-router-dom";


export default function Manager() {
    const location = useLocation();
    const { email } = location.state || {};
    const sidebarTop = [
        {
          name: "Tasks",
          icon: "http://www.w3.org/2000/svg",
          href: "#",
        },
        {
          name: "Timeline",
          icon: "http://www.w3.org/2000/svg", 
          href: "#",
        },
        {
          name: "Notes",
          icon: "http://www.w3.org/2000/svg", 
          href: "#",
        },
      ];
    
      const sidebarBottom = [
        {
          name: "Invite team",
          icon: "http://www.w3.org/2000/svg", 
        },
        {
          name: "Settings",
          icon: "http://www.w3.org/2000/svg", 
          href: "#",
        },
      ];

    const employeeDetail={
        name:"Antonio Roberto",
        photo:"https://pagedone.io/asset/uploads/1696238374.png",
        role:"Manager",
        // rating:"Average Rating : 4.2"
    }

    const progressBar={
        percentage:"45%",
        rate:"5/20"
    }

    const performancess=[
        {
            digit:"4.8",
            text:"Average Rating"
        },
        {
            digit:"4",
            text:"Deadline Meet"
        },
        {
            digit:"3",
            text:"Pending tasks"
        },
    ]
    const projects = [
      { id: 1, name: "Design System", progress: "75%", deadline: "2023-01-01", pendingTasks: 2 },
      { id: 2, name: "Dashboard UI", progress: "50%", deadline: "2023-02-15", pendingTasks: 5 },
      { id: 3, name: "Backend API", progress: "90%", deadline: "2023-03-10", pendingTasks: 1 },
      { id: 4, name: "Testing & QA", progress: "60%", deadline: "2023-04-05", pendingTasks: 4 }
    ]


    return (
        <div className="w-full h-screen bg-black text-white flex overflow-y-auto m-0 p-0">
         <div>
            <Sidebar sidebarTop={sidebarTop} sidebarBottom={sidebarBottom}/>
         </div>
          <div>
            
            </div>  
            <div className="w-screen overflow-y-auto pt-8">
            <div>
                <Employeedetail person={employeeDetail}/>
            </div>
            <h1>{email}</h1>
            <div>
              <h1 className="text-3xl font-bold pt-8">Overview</h1>
              <h2 className="text-2xl  pt-2 pb-4">Projects</h2>
              <Table projects={projects} />
                <br />
                <Button buttonName={"Create New Project"}/>
            </div>

            </div>
    </div>
    )
}

  
