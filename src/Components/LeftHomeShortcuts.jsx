
const LeftHomeShortcuts = () => {

    const shortcuts  = [
        {id : 1, img: './posts.png', name : 'My Posts' },
        {id : 2, img: './activity.png', name : 'Activity' },
        {id : 3, img: './market.png', name : 'Marketplace' },
        {id : 4, img: './events.png', name : 'Events' },
        {id : 5, img: './albums.png', name : 'Album' },
        {id : 6, img: './videos.png', name : 'Videos' },
        {id : 7, img: './news.png', name : 'News' },
        {id : 8, img: './courses.png', name : 'Courses' },
        {id : 9, img: './lists.png', name : 'Lists' },
        {id : 10, img: './settings.png', name : 'Settings' },
    ]

    return(<div className="bg-white rounded-sm" id="left-home-shortcuts">
        {shortcuts.map((single) => {
            return <div key={single.id} className="flex flex-row hover:bg-gray-100 rounded-sm justify-left items-center my-1">
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