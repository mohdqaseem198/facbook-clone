import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "../Lib/client";
import UserInfoInteraction from "./InteractionFolder/UserInfoInteraction";
import UpdateUser from "./UpdateUser";


const UserInfo = async({user}) => {
    
    const {userId:currentUserId} = await auth();
    console.log( 'from user info', currentUserId);
    const createdAt = new Date(user?.createdAt || '');
    const formate = createdAt.toLocaleDateString("en-US", {
        month : "long",
        year : "numeric"
    });


    let isBlocked = false;
    let isFollowing = false;
    let IsFollowingReqSent = false;

    //checking blocked
    const blockedRes = prisma.block.findFirst({
        where:{blockerId : currentUserId,
            blocked : user?.id
        },
    })

    blockedRes ? isBlocked = true : isBlocked = false;

    //checking following
    const followRes = prisma.follower.findFirst({
        where:{followerId : currentUserId,
            followingId : user?.id
        },
    })

    followRes ? isFollowing = true : isFollowing = false;

    //checking blocked
    const followReqRes = prisma.followRequest.findFirst({
        where:{senderId : currentUserId,
            receiverId : user?.id
        },
    })

    followReqRes ? IsFollowingReqSent = true : IsFollowingReqSent = false;

    return(<div className="my-2 px-2 rounded-sm bg-white" id="user-info">
        <div className="space-y-3">
            <div className="flex flex-row justify-between pt-2">
                <div>
                    <p>User Information</p>
                </div>
                <div className="cursor-pointer text-blue-600">
                    <UpdateUser />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-left gap-1 items-center">
                <div className="font-bold text-[18px]">
                    <p>{user?.username}</p>
                </div>
                <div className="text-[12px]">
                    <p>{`@${user?.username}`}</p>
                </div>
            </div>

            <div className="text-left">
                {user?.description ? user?.description : <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi repellendus cupiditate fuga culpa atque eos ad optio a, modi quas.</p>}
            </div>

            <div className="space-y-1">
                <div className="flex flex-row">
                    <div className="w-6 h-6 overflow-hidden">
                        <img src='map.png' />
                    </div>
                    <div>
                        Living in <span className="font-bold">{user?.city ? user?.city : 'UK'}</span>
                    </div>
                </div>

                <div className="flex flex-row gap-1 ">
                    <div className="w-6 h-6 overflow-hidden">
                        <img src='school.png' />
                    </div>
                    <div>
                        Went to <span className="font-bold">{user?.school ? user?.school : 'Edger High School'}</span>
                    </div>
                </div>

                <div className="flex flex-row gap-1 ">
                    <div className="w-6 h-6 overflow-hidden">
                        <img src='work.png' />
                    </div>
                    <div>
                        Works at <span className="font-bold">{ user?.work ? user?.work : 'Apple Inc.'}</span>
                    </div>
                </div>

                <div className="flex flex-row gap-1 ">
                    <div className="w-6 h-6 overflow-hidden">
                        <img src='link.png' />
                    </div>

                    <div className="flex flex-row">
                        <div href={user?.website || "null"} className="text-blue-700 font-bold">
                            {user?.website ? user?.website : 'www.mysocial.com'}
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-1 ">
                    <div className="w-6 h-6 overflow-hidden">
                        <img src='work.png' />
                    </div>
                    <div>
                        Joined <span className="font-bold">{ user?.createdAt ? formate : 'Soon' }</span>
                    </div>
                </div>

                
            </div>

            {/* <div className="bg-blue-500 text-white rounded-sm">
                <button className="p-1 cursor-pointer w-full h-full">Following</button>
            </div> */}

            <UserInfoInteraction userId={currentUserId} isBlocked={isBlocked} isFollowing={isFollowing} isFollowingReqSent={IsFollowingReqSent} />
        </div>
    </div>)
};

export default UserInfo;