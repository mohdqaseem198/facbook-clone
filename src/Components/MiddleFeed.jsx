
const MiddleFeed = () => {
    return(<div className="bg-white rounded-sm" id="middle-feed">

        <div className="flex flex-row justify-between items-center p-3">
            <div className="flex flex-row justify-left items-center gap-2">
                <div className=" w-10 h-10 m-1 overflow-hidden rounded-full ">
                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/35401908/pexels-photo-35401908.jpeg" />
                </div>
                <div className="font-bold">
                    <p>Qaseem Ansari</p>
                </div>
            </div>

            <div className="w-5 h-5">
                <img src="more.png" />
            </div>
        </div>

        <div className="p-3">
            <div>
                <img className="rounded-sm" src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg" />
            </div>
            <div className="text-left my-3">
                <p>Life is beautiful....</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus fugiat aliquam nihil.</p>
            </div>
        </div>

    </div>)
};

export default MiddleFeed;