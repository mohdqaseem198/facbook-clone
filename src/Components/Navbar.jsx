'use client'
import { useState } from "react";
import MobileNavbar from "../Components/MobileNavbar";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    return(<div id="Navbar" className="text-[12px]">

        <div className="hidden sm:flex flex-row items-center justify-around py-5">
            <div>
                <h1>MYSOCIAL</h1>
            </div>

            <div className="flex flex-row gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <img src="/home.png" className="w-full h-full object-contain" />
                  </div>
                  <span>Homepage</span>
                </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <img src="/friends.png" className="w-full h-full object-contain" />
                </div>
                <span>Friends</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <img src="/stories.png" className="w-full h-full object-contain" />
                </div>
                <span>Stories</span>
              </div>
            </div>


            <div className=" flex flex-row justify-center bg-gray-100 rounded-4xl px-3 py-2">
                <input className="outline-none" placeholder="search..." type="text" />
                <div className="inline-block">
                    <img className="w-4 h-4" src='search.png'/>
                </div>
            </div>

            <div className="flex  items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                    <img className="h-full w-full object-contain" src="/people.png" />
                </div>
                <p>Login/Register</p>
            </div>

        </div>

        <div className="relative flex sm:hidden">
            <div className="relative w-6 h-6  mx-5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className={`absolute left-0 top-1/2 h-1 w-6 transition-all duration-500 bg-black ${isOpen ? 'rotate-45' : '-translate-y-2'} `}></div>
                <div className={`absolute left-0 top-1/2 h-1 w-6 transition-all duration-500 bg-black ${isOpen ? 'opacity-0' : ''} ` }></div>
                <div className={`absolute left-0 top-1/2 h-1 w-6 transition-all duration-500 bg-black ${isOpen ? '-rotate-45' : 'translate-y-2'} `}></div>
            </div>

            <div className={`absolute top-2 transition-all duration-700  my-5 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <MobileNavbar />
            </div>
        </div>
    </div>)
};

export default Navbar;