"use client";
import Link from "next/link";


const LeftHomeProfile = ({user}) => {

    const {id, username, createdAt, _count} = user || {};
    const {followers} = _count || 0;
    try {
        console.log('from profile' , user);
    }
    catch(err){
        console.log(err, 'from leftHomeProfile');
    }
    
    return(<div className="bg-white" id="left-home-profile">
        <div className="p-2 shadow-2xl rounded-2xl my-2">
        <div className="relative w-full">
            <div className="w-auto h-[150px] rounded-sm overflow-hidden">
                <img className="w-full h-full object-cover" src='https://images.pexels.com/photos/32838840/pexels-photo-32838840.jpeg' />
            </div>

            <div className="m-auto absolute top-6/8 left-4/10 w-20 h-20 bg-white rounded-full">
                <img className="w-full h-full object-cover rounded-full p-[1px]" src='https://images.pexels.com/photos/34141640/pexels-photo-34141640.jpeg' />
            </div>
        </div>

        <div className="mt-8">
            <div>
                <p className="text-2xl font-bold"> {username || 'Mary Siddiqui Ansari'}</p>
            </div>
            <div className="flex flex-row justify-around mt-3">
                <div className="flex flex-row">
                    <img className="w-5" src="posts.png"/>
                    <img className="w-5" src="posts.png"/>
                    <img className="w-5" src="posts.png"/>
                </div>

                <div>
                    <p>{followers} followers</p>
                </div>
            </div>

            <div className="mt-3">
                {/* <Link href={`/profile/id?id=${id}`}> */}
                <Link href={`/profile/${id}`}>
                    <button className="cursor-pointer bg-blue-500 p-2 rounded-sm text-white font-bold">My Profile</button>
                </Link>

                
            </div>

        </div>
        </div>
    </div>)
};

export default LeftHomeProfile;