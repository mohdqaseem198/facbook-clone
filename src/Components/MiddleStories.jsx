'use client';
import { CldUploadWidget } from "next-cloudinary";
import { Suspense, useState } from "react";
import { AddStory } from "../Lib/action";
import MapStories from "../Components/MapStories";

const MiddleStories = (stories) => {

    const [storyAdd, setStoryAdd] = useState("");

    console.log( 'from story add', stories);

    return(<div className="bg-white rounded-sm" id="middle-stories">
        <div className="w-20 flex flex-row text-[12px]">

        <form action={AddStory} className="">
            
            {/* cloudinary widget to upload images */}
 
            <CldUploadWidget uploadPreset="social" onSuccess={(result) => {setStoryAdd(result?.info?.secure_url), console.log('result',result)}}>
              {({ open }) => {
                return (
                    <div onClick={() => {open()}} className="flex flex-col cursor-pointer">
                        <input type="hidden" name="storyAdd" value={storyAdd}  className="outline-none" />
                            <div className="border-black border m-1 w-25 h-25 rounded-full overflow-hidden">
                                <img className="w-full h-full object-cover p-1" src="./plus.png" />
                            </div>
                            <div>
                                <p>Add a Story</p>
                            </div>
                    </div>
                );
              }}
            </CldUploadWidget>

            <div className="m-auto bg-blue-400 p-2 h-8 rounded-sm">
                <button className="cursor-pointer" type="submit">
                    Save
                </button>
            </div>

        </form>

              <Suspense fallback = "Loading...">
                <MapStories stories = {stories} />
              </Suspense>
            {/* <div className="flex flex-col">
                <div className="m-1 w-25 h-25 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/185764/pexels-photo-185764.jpeg" />
                </div>
                <div>
                    <p>Danish Khan</p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="m-1 w-25 h-25 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/261970/pexels-photo-261970.jpeg" />
                </div>
                <div>
                    <p>Raj Manhotra</p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="m-1 w-25 h-25 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/3784567/pexels-photo-3784567.jpeg" />
                </div>  
                <div>
                    <p>Saleem Siddiqui</p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="m-1 w-25 h-25 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/185764/pexels-photo-185764.jpeg" />
                </div>
                <div>
                    <p>Winsto Loe</p>
                </div>
            </div> */}

        </div>
    </div>)
};

export default MiddleStories;