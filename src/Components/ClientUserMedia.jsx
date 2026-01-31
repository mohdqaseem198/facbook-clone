"use client";
import { useState } from "react";

const ClientUserMedia = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
        setIsOpen(true);
    }

    return(<div id="client-user-media">
        <button onClick={(e) => handleForm(e)} className="cursor-pointer">Update Media</button>

        {isOpen && <div className="">

            <div className="absolute inset-0 z-1 bg-gray-600 w-screen h-screen opacity-65" ></div>


            <div className="flex flex-col space-y-2 absolute bg-white text-black m-auto rounded-3xl z-40 inset-0 w-[600px] h-[350px]">
                <button className="cursor-pointer border-2 p-2 bg-red-500 z-40" onClick={() => {setIsOpen(false)}}>
                    X
                </button>

                <div className="py-2 m-auto w-1/2 rounded-2xl  flex flex-row justify-around border-gray-400 border-1">
                    <label className="font-bold mx-2 ">Name</label>
                    <input name="name" className="outline-none" placeholder="Qaseem" type="text" />
                </div>

                <div className="py-2 m-auto w-1/2 rounded-2xl flex flex-row justify-around border-gray-400 border-1">
                    <label className="font-bold mx-2 ">Surname</label>
                    <input name="surname" className="outline-none" placeholder="Surname" type="text" />
                </div>

                <div className="py-2 m-auto w-1/2 rounded-2xl flex flex-row justify-around border-gray-400 border-1">
                    <label className="font-bold mx-2 ">Work</label>
                    <input name="work" className="outline-none" placeholder="Microsoft" type="text" />
                </div>

                <button className="cursor-pointer border-2 p-2 bg-green-300">
                    Submit
                </button>
                
            </div>

        </div>}
    </div>)
};

export default ClientUserMedia;