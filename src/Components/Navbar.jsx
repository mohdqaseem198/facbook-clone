'use client'
import { useState } from "react";
import MobileNavbar from "../Components/MobileNavbar";
import Link from "next/link";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    return(<div id="Navbar" className="text-[12px]">

        <div className="hidden sm:flex flex-row items-center justify-around py-5">
            <div>
                <Link href='/'>
                  <h1>MYSOCIAL</h1>
                </Link>
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
                <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
                    <img className="h-full w-full object-contain" src="/people.png" />
                </div>
                {/* <p>Login/Register</p> */}
                <ClerkLoading>
                  loading
                </ClerkLoading>

                <ClerkLoaded>
                  <SignedIn>

                    <div className="cursor-pointer">
                      <img src='messages.png' className="w-6 h-6"/>
                    </div>

                    <div className="cursor-pointer">
                      <img src='notifications.png' className="w-6 h-6"/>
                    </div>
                    <UserButton/>
                  </SignedIn>

                  <SignedOut>
                    <div className="cursor-pointer">
                      <Link href='/sign-in'>Login/Register</Link>
                    </div>
                  </SignedOut>

                </ClerkLoaded>
            </div>

        </div>

        <div className="relative flex sm:hidden">
            <div className="relative w-6 h-6  mx-5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className={`absolute left-0 top-1/2 h-1 w-6 transition-all duration-500 bg-black ${isOpen ? 'rotate-45' : '-translate-y-2'} `}></div>
                <div className={`absolute left-0 top-1/2 h-1 w-6 transition-all duration-500 bg-black ${isOpen ? 'opacity-0' : ''} ` }></div>
                <div className={`absolute left-0 top-1/2 h-1 w-6 transition-all duration-500 bg-black ${isOpen ? '-rotate-45' : 'translate-y-2'} `}></div>
            </div>

            <div className={`z-10  absolute top-2 transition-all duration-700  my-5 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <MobileNavbar />
            </div>
        </div>
    </div>)
};

export default Navbar;