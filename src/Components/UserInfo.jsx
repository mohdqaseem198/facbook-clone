

const UserInfo = () => {
    return(<div className="my-2 px-2 rounded-sm bg-white" id="user-info">
        <div className="space-y-3">
            <div className="flex flex-row justify-between pt-2">
                <div>
                    <p>User Information</p>
                </div>
                <div className="cursor-pointer text-blue-600">
                    <p>See all</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-left gap-1 items-center">
                <div className="font-bold text-[18px]">
                    <p>Mary Siddiqui Ansari</p>
                </div>
                <div className="text-[12px]">
                    <p>@MarySiddiqui</p>
                </div>
            </div>

            <div className="text-left">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi repellendus cupiditate fuga culpa atque eos ad optio a, modi quas.</p>
            </div>

            <div className="space-y-1">
                <div className="flex flex-row">
                    <div className="w-6 h-6 overflow-hidden">
                        <img src='map.png' />
                    </div>
                    <div>
                        Living in <span className="font-bold">UK</span>
                    </div>
                </div>

                <div className="flex flex-row gap-1 ">
                    <div className="w-6 h-6 overflow-hidden">
                        <img src='school.png' />
                    </div>
                    <div>
                        Went to <span className="font-bold">Edger High School</span>
                    </div>
                </div>

                <div className="flex flex-row gap-1 ">
                    <div className="w-6 h-6 overflow-hidden">
                        <img src='work.png' />
                    </div>
                    <div>
                        Works at <span className="font-bold">Apple Inc.</span>
                    </div>
                </div>

                <div className="flex flex-row gap-1 ">
                    <div className="w-6 h-6 overflow-hidden">
                        <img src='link.png' />
                    </div>

                    <div className="flex flex-row">
                        <div className="text-blue-700 font-bold">
                            lama.dev
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-1 ">
                    <div className="w-6 h-6 overflow-hidden">
                        <img src='work.png' />
                    </div>
                    <div>
                        Joined <span className="font-bold">November 2024</span>
                    </div>
                </div>

                
            </div>

            <div className="bg-blue-500 text-white rounded-sm">
                <button className="p-1 cursor-pointer w-full h-full">Following</button>
            </div>

        </div>
    </div>)
};

export default UserInfo;