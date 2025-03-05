import React from "react";

export default function Progressbar({progressBar}){
    return(
        <div class="mr-80 space-y-2">
                    <div class="flex justify-between mb-1">
                     <span class="text-base font-medium text-white-700 dark:text-white">Sprint Progress</span>
                     <span class="text-sm font-medium text-white-700 dark:text-white">{progressBar.percentage}</span>
                    </div>
                    <div class="w-full bg-black-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blue-600 h-2.5 rounded-full "  style={{ width: `${progressBar.percentage}` }} ></div>
                    </div>
                    <div>
                       <p>{progressBar.rate}</p> 
                    </div>
         </div>
    )
}