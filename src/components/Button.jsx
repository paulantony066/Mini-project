import React from "react";

export default function Button(props){

    return(
        <button type="button" class="w-[392px] h-[40px] hover:bg-blue-950 text-white bg-[#007AFF] font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">{props.buttonName}</button>
    )
}