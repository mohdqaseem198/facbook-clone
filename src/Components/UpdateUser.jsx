"use client";
import { useState } from "react";
import {UploadForm} from "../Lib/action";
import { CldUploadWidget } from 'next-cloudinary';

const UpdateUser = () => {

    const [isOpen, setIsOpen ] = useState(false);
    const [coverFull, setCover] = useState("");

    const handleForm = () => {
        setIsOpen(true);
    }

    return(<div id="update-user">
         <>
      {/* OPEN BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
      >
        Update User
      </button>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          {/* BACKDROP */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* FORM CARD */}
          <form action={UploadForm}
            className="relative bg-white p-6 rounded-lg shadow-xl w-auto z-10"
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-xl font-bold cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Update User</h2>
            
            <div>
                <div className="flex flex-row  gap-1 my-2">
                    <div className="text-black w-auto  lg:w-[300px]">
                        <div className="flex flex-row gap-1 border-black p-4 rounded-sm border-1">
                            <label className="font-bold">Surename</label>
                            <input name="surname" placeholder='Ansari' className="outline-none" type="text" />
                        </div>
                    </div>

                    <div className="text-black w-auto  lg:w-[300px]">
                        <div className="flex flex-row  gap-1 border-black p-4 rounded-sm border-1">
                            <label className="font-bold">Name</label>
                            <input  name="name" placeholder="Altaf" className="outline-none" type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-1 my-2">
                    <div className="text-black w-auto  lg:w-[300px]">
                        <div className="flex flex-row gap-1 border-black p-4 rounded-sm border-1">
                            <label className="font-bold">School</label>
                            <input  name="school" placeholder='KMES' className="outline-none" type="text" />
                        </div>
                    </div>
        
                    <div className="text-black w-auto  lg:w-[300px]">
                        <div className="flex flex-row gap-1 border-black p-4 rounded-sm border-1">
                            <label className="font-bold">Work</label>
                            <input  name="work" placeholder="Google.com" className="outline-none" type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-1 my-2">
                    <div className="text-black w-auto  lg:w-[300px]">
                        <div className="flex flex-row gap-1 border-black p-4 rounded-sm border-1">
                            <label className="font-bold">Website</label>
                            <input  name="website" placeholder='mysocial.com' className="outline-none" type="text" />
                        </div>
                    </div>
        
                    <div className="text-black w-auto  lg:w-[300px]">
                        <div className="flex flex-row gap-1 border-black p-4 rounded-sm border-1">
                            <label className="font-bold">City</label>
                            <input  name="city" placeholder="Thane" className="outline-none" type="text" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-1 my-2">
                    <div className="text-black w-auto  lg:w-[300px]">
                        <div className="flex flex-row gap-1 border-black p-4 rounded-sm border-1">
                            <label className="font-bold">Avatar</label>
                            <input  name="avatar" placeholder='avatar' className="outline-none" type="text" />
                        </div>
                    </div>
        
        {/* cloudinary widget to upload images */}
 
                    <CldUploadWidget uploadPreset="social" onSuccess={(result) => setCover(result?.info?.secure_url)}>
                      {({ open }) => {
                        return (
                    <div onClick={() => {open()}} className="text-black w-auto  lg:w-[300px]">
                        <div className="flex flex-row gap-1 border-black p-4 rounded-sm border-1">
                            <label className="font-bold">Cover</label>
                            <input name="cover" value={coverFull} placeholder="Cover" className="outline-none" type="hidden" />

                        </div>
                    </div>
                        );
                      }}
                    </CldUploadWidget>

                </div>


            </div>

            <button
              type="submit"
              className="cursor-pointer"
            >
              Upload
            </button>
          </form>
        </div>
      )
      }

      <div>
        
      </div>


        </> 

        <div>
            
        </div>
    </div>)
};

export default UpdateUser;