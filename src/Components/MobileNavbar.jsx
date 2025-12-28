
const MobileNavbar = () => {

    return(<div className="w-56 h-screen" id="mobile-navbar">
        <div className="bg-gray-100 rounded-2xl w-full h-full">
            <ul className="">
                <li className="py-3 cursor-pointer px-5 hover:bg-gray-300 rounded-2xl">HomePage</li>
                <li className="py-3 cursor-pointer px-5 hover:bg-gray-300 rounded-2xl">Friends</li>
                <li className="py-3 cursor-pointer px-5 hover:bg-gray-300 rounded-2xl">Stories</li>
                <li className="py-3 cursor-pointer px-5 hover:bg-gray-300 rounded-2xl">Search</li>
            </ul>
        </div>
    </div>)
};

export default MobileNavbar;