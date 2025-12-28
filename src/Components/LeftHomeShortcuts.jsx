
const LeftHomeShortcuts = () => {

    const shortcuts  = [
        {img: './posts.png', name : 'My Posts'},
        {img: './activity.png', name : 'Activity'},
        {img: './market.png', name : 'Marketplace'},
        {img: './events.png', name : 'Events'},
        {img: './albums.png', name : 'Album'},
        {img: './videos.png', name : 'Videos'},
        {img: './news.png', name : 'News'},
        {img: './courses.png', name : 'Courses'},
        {img: './lists.png', name : 'Lists'},
        {img: './settings.png', name : 'Settings'},
    ]

    return(<div className="bg-white rounded-sm" id="left-home-shortcuts">
        {shortcuts.map((single) => {
            return <div className="flex flex-row hover:bg-gray-100 rounded-sm justify-left items-center my-1">
                <div className=" p-5">
                    <img className="w-6 h-6" src={single.img} />
                </div>
                <div>
                    <p>{single.name}</p>
                </div>
            </div>
        })}
    </div>)
};

export default LeftHomeShortcuts;