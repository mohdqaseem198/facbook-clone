import MiddleFeed from './MiddleFeed';

const MyProfileMiddle = ({user}) => {

    console.log('my profile middle ', user);

    return(<div className="p-2 bg-gray-100 rounded-sm" id="my-profile-middle">
        <div className="relative z-0 px-2  flex">
            <div className="  w-full h-[300px] overflow-hidden m-auto">
                <img className="w-full rounded-sm h-full object-cover" src='https://images.pexels.com/photos/32838840/pexels-photo-32838840.jpeg'  />
            </div>

            <div className="absolute z-0 left-1/2 top-full -translate-x-1/2 -translate-y-2/3 w-30 h-30 rounded-full overflow-hidden bg-white p-[2px]">
                <img className="bg-white p-[1px] rounded-full w-full h-full object-cover" src='https://images.pexels.com/photos/34141640/pexels-photo-34141640.jpeg'  />
            </div>
        </div>

        <div className='font-bold text-2xl mt-10'>
            <p>{user?.username || 'error' }</p>
        </div>

        <div className='flex flex-row justify-center gap-[5%]'>
            <div className=''>
                <div className='font-bold'>
                    {`${user?._count.posts ?  user._count.posts : '0' }`}
                </div>
                <div>
                    Posts
                </div>
            </div>

            <div className=''>
                <div className='font-bold'>
                    {`${user?._count.followers ?  user._count.followers : '0' }`}
                </div>
                <div>
                    Followers
                </div>
            </div>

            <div className=''>
                <div className='font-bold'>
                    {`${user?._count.followings ?  user._count.followings : '0' }`}
                </div>
                <div>
                    Following
                </div>
            </div>

        </div>

        <div className='p-2'>
            <MiddleFeed username={user?.username} />
        </div>
    </div>)
};

export default MyProfileMiddle;