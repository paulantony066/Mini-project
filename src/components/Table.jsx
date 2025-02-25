import React from "react";

export default function Table(){
    return(
        <div class="relative overflow-x-auto border-2 border-gray-800 rounded-lg mr-12 dark:border-white-700 border-white-200">
    <table class="w-full   text-sm text-left rtl:text-right text-white dark:text-white ">
        <thead class="text-xs text-white uppercase bg-black dark:bg-black dark:text-white">
            <tr class="bg-black border-b dark:bg-black dark:border-gray-200 border-gray-200">
                <th scope="col" class="px-6 py-3">
                    Project
                </th>
                <th scope="col" class="px-6 py-3">
                    Progress
                </th>
                <th scope="col" class="px-6 py-3">
                    Deadline
                </th>
                <th scope="col" class="px-6 py-3">
                    Pending Tasks
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-black border-b dark:bg-black dark:border-gray-200 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    Design System
                </th>
                <td class="px-6 py-4">
                    75%
                </td>
                <td class="px-6 py-4">
                    <p class="p-2 rounded-lg w-24 bg-gray-700">2023-01-01</p>
                </td>
                <td class="px-6 py-4">
                    2
                </td>
            </tr>
            <tr class="bg-black border-b dark:bg-black dark:border-gray-200 border-gray-200">
            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    Design System
                </th>
                <td class="px-6 py-4">
                    75%
                </td>
                <td class="px-6 py-4">
                    <p class="p-2 rounded-lg w-24 bg-gray-700">2023-01-01</p>
                </td>
                <td class="px-6 py-4">
                    2
                </td>
            </tr>
            <tr class="bg-black border-b dark:bg-black dark:border-gray-200 border-gray-200">
            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    Design System
                </th>
                <td class="px-6 py-4">
                    75%
                </td>
                <td class="px-6 py-4">
                    <p class="p-2 rounded-lg w-24 bg-gray-700">2023-01-01</p>
                </td>
                <td class="px-6 py-4">
                    2
                </td>
            </tr>
            <tr class="bg-black dark:bg-black">
            <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    Design System
                </th>
                <td class="px-6 py-4">
                    75%
                </td>
                <td class="px-6 py-4">
                    <p class="p-2 rounded-lg w-24 bg-gray-700">2023-01-01</p>
                </td>
                <td class="px-6 py-4">
                    2
                </td>
            </tr>
        </tbody>
    </table>
</div>
    )
}