import React from "react";

import Sidebar from "../../components/Sidebar";
import Employeedetail from "../../components/Employeedetail";
import Progressbar from "../../components/Progressbar";
import Button from "../../components/Button";
import Performance from "../../components/Performance";
import Table from "../../components/Table";
import Barchart from "../../components/Barchart";


export default function Manager() {
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
        role:"Team Leader",
        rating:"Average Rating : 4.2"
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

     const but1="Create New project"

    return (
        <div class="container w-screen h-screen bg-black text-white flex overflow-y-auto ">
         <div>
            <Sidebar sidebarTop={sidebarTop} sidebarBottom={sidebarBottom}/>
         </div>
            
            <div class="w-screen overflow-y-auto ">
            <div>
                <Employeedetail person={employeeDetail}/>
            </div>
            <div>
                <Progressbar progressBar={progressBar}/>
            </div>
            <br />
            <div class="flex justify-evenly">

            {performancess.map((item, index) => (
                <Performance digit={item.digit} text={item.text} key={index}/>
            ))}

            </div>
            <br />
                <Barchart/>
            <br />
            <div>
                <Table/>
                <br />
                <Button buttonName={but1}/>
            </div>

            </div>
    </div>
    )
}

  
