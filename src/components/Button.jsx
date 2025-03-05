import React from "react";

export default function Button(props){

    return(
        <button type="button" class="w-64  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">{props.buttonName}</button>
    )
}