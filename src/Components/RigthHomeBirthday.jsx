
const RightHomeBirthday = () => {
    return(<div className="m-1 bg-white  rounded-sm " id="right-home-birthday">
        
        <div className="p-2">
        <div className="text-left text-gray-500">
            <p>Birthdays</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between my-2">
            <div className="flex flex-row items-center">
                <div className="w-6 h-6 rounded-full">
                    <img src="/noavatar.png" />
                </div>

                <div className="mx-2 cursor-pointer">
                    <p>Qaseem Ansari</p>
                </div>
            </div>
            <div>
                <button className="bg-blue-700 text-white rounded-sm cursor-pointer p-2">Celebrate</button>
            </div>
        </div>

        <div className="mx-4 mt-5 mb-2 flex flex-row cursor-pointer text-left gap-4 items-center bg-gray-200 p-2 rounded-md">
            <div className="w-10 h-10">
                <img className="" src="gift.png" />
            </div>
            <div >
                <p className="font-bold">Upcoming Birthdays</p>
                <div>
                    <p>See upcoming birthdays and celebrations</p>
                </div>
            </div>
        </div>
        </div>

    </div>)
};

export default RightHomeBirthday;