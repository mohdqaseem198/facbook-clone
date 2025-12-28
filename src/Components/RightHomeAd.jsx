
const RightHomeAd = () => {
    return(<div className="bg-white p-2 rounded-md" id="right-home-ad">

        <div className=" flex flex-row justify-between text-left text-gray-500">
            <p>Sponsored Ads</p>
            <div className="w-5 h-5">
                <img src="more.png" />
            </div>
        </div>

        <div className="w-full">
            <div className="w-auto h-[150px] rounded-sm overflow-hidden">
                <img className="w-full h-full object-cover" src='https://images.pexels.com/photos/32838840/pexels-photo-32838840.jpeg' />
            </div>
        </div>

        <div className="flex flex-row justify-left gap-2 items-center">
            <div className="my-2 w-10 h-10 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src='https://images.pexels.com/photos/32838840/pexels-photo-32838840.jpeg' />
            </div>

            <div className="text-blue-500 ">
                <button className="cursor-pointer">Mumbao City</button>
            </div>
        </div>

        <div className="text-left">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam fugiat earum ea? Tempora aperiam.</p>
        </div>

        <div className="bg-gray-300 p-1 mt-3 rounded-md cursor-pointer">
            <p>Visit Now</p>
        </div>

    </div>)
};

export default RightHomeAd;