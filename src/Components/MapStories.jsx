
const MapStories = (stories) => {

    console.log('stories ', stories);

    return(stories.length>0 ? stories.map((single) => {
        <div>
            <div className="flex flex-col">
                <div className="m-1 w-25 h-25 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src={single?.img} />
                </div>
                <div>
                    <p>{single?.user?.username}</p>
                </div>
            </div>
        </div>
    }) : "")
};

export default MapStories;