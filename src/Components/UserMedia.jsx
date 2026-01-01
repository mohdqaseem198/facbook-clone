
const UserMedia = () => {
    return(<div className="py-3 bg-white rounded-sm" id="user-media">
        <div>
            <div className="flex flex-row justify-between p-1">
                <div>
                    <p>User Media</p>
                </div>
                <div className="cursor-pointer text-blue-600">
                    <p>See all</p>
                </div>
            </div>

            <div className="flex justify-center flex-wrap gap-1">
                <div className="cursor-pointer w-25 h-35 rounded-2xl overflow-hidden">
                    <img className="w-full h-full object-cover" src='https://images.pexels.com/photos/34141640/pexels-photo-34141640.jpeg' />
                </div>

                <div className="cursor-pointer w-25 h-35 rounded-2xl overflow-hidden">
                    <img className="w-full h-full object-cover" src='https://images.pexels.com/photos/34141640/pexels-photo-34141640.jpeg' />
                </div>

                <div className="cursor-pointer w-25 h-35 rounded-2xl overflow-hidden">
                    <img className="w-full h-full object-cover" src='https://images.pexels.com/photos/34141640/pexels-photo-34141640.jpeg' />
                </div>

                <div className="cursor-pointer w-25 h-35 rounded-2xl overflow-hidden">
                    <img className="w-full h-full object-cover" src='https://images.pexels.com/photos/34141640/pexels-photo-34141640.jpeg' />
                </div>

                <div className="cursor-pointer w-25 h-35 rounded-2xl overflow-hidden">
                    <img className="w-full h-full object-cover" src='https://images.pexels.com/photos/34141640/pexels-photo-34141640.jpeg' />
                </div>

                <div className="cursor-pointer w-25 h-35 rounded-2xl overflow-hidden">
                    <img className="w-full h-full object-cover" src='https://images.pexels.com/photos/34141640/pexels-photo-34141640.jpeg' />
                </div>

            </div>

        </div>
    </div>)
};

export default UserMedia;