import React from "react";

export default function Sidebar({sidebarTop,sidebarBottom}){
    return(
            <>
              <aside
                id="default-sidebar"
                className=" top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidenav"
              >
                <div className="overflow-y-auto py-5 px-3 h-full bg-black text-white">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-900 group"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6 text-white transition duration-75 group-hover:text-white-900"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span className="ml-3">Overview</span>
                      </a>
                    </li>
                       
                  </ul>
                  <ul className="space-y-2">

                  {sidebarTop.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="flex items-center p-2 text-base font-normal text-white rounded-lg transition duration-75  hover:bg-gray-900 group"
                      >
                        <svg
                          aria-hidden="true"
                          className="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-white-900"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns={item.icon}
                        >
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                          <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="ml-3">{item.name}</span>
                      </a>
                    </li>
                    ))}

                  </ul>
        
                  <div className="hidden absolute bottom-8 left-0 py-5 px-3 space-x-4 w-full lg:flex z-20">
                    <ul className="pt-5 mt-5 space-y-2">
                    {sidebarBottom.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="flex items-center p-2 text-base font-normal text-white rounded-lg transition duration-75 hover:w-48 hover:bg-gray-900 group"
                        >
                          <svg
                            aria-hidden="true"
                            className="flex-shrink-0 w-6 h-6 text-white transition duration-75  group-hover:text-white-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns={item.icon}
                          >
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                            <path
                              fillRule="evenodd"
                              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="ml-3">{item.name}</span>
                        </a>
                      </li>
                       ))}

                    </ul>
                  </div>
                </div>
              </aside>
            </>        
    )
}