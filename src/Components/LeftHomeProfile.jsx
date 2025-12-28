
const LeftHomeProfile = () => {
    return(<div className="bg-white" id="left-home-profile">
        <div className="p-2 shadow-2xl rounded-2xl my-2">
        <div className="relative w-full">
            <div className="w-auto h-[150px] rounded-sm overflow-hidden">
                <img className="w-full h-full object-cover" src='https://images.pexels.com/photos/32838840/pexels-photo-32838840.jpeg' />
            </div>

            <div className="absolute left-4/12 top-8/12 w-20 h-20 bg-white rounded-full">
                <img className="w-full h-full object-cover rounded-full p-[1px]" src='https://images.pexels.com/photos/34141640/pexels-photo-34141640.jpeg' />
            </div>
        </div>

        <div className="mt-8">
            <div>
                <p className="text-2xl font-bold">Mary Siddiqui Ansari</p>
            </div>
            <div className="flex flex-row justify-around mt-3">
                <div className="flex flex-row">
                    <img className="w-5" src="posts.png"/>
                    <img className="w-5" src="posts.png"/>
                    <img className="w-5" src="posts.png"/>
                </div>

                <div>
                    <p>1000 followers</p>
                </div>
            </div>

            <div className="mt-3">
                <button className="cursor-pointer bg-blue-500 p-2 rounded-sm text-white font-bold">My Profile</button>
            </div>

        </div>
        </div>
    </div>)
};

export default LeftHomeProfile;