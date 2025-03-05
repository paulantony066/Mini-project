import React from "react";

export default function Employeedetail({person}){
    return(
        <div>
                        <div class="relative mb-6">
                            <img src={person.photo} alt="Antonio image"
                                class="w-32 h-32 rounded-full  transition-all duration-500 object-cover border border-solid border-transparent " />
                        </div>
                        <h4
                            class="text-xl font-semibold text-white-900 mb-2 capitalize  transition-all duration-500 ">
                            {person.name}</h4>
                        <p class="text-white  block transition-all duration-500 ">{person.role}</p>
                        <p class="text-white  block transition-all duration-500 ">{person.rating}</p>
                        <br />
        </div>
    )
}