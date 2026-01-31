

import { auth } from "@clerk/nextjs/server";
import { prisma } from "../Lib/client";
import ClientFriendReq from "./ClientFriendReq";

const RightHomeFriendReq = async() => {

    const {userId : currentId} = await auth();

    const FriendReq = await prisma.followRequest.findMany({
        where : {receiverId : currentId},
        include:{
            sender : true,
        },
        take : 5,
    })

    return(<div className="bg-white rounded-sm" id="right-home-friend-req">

        <div className="p-2">
            <div className="flex flex-row justify-between ">
            <div className="text-gray-500">
                <p>Friend Requests</p>
            </div>
            <div>
                <button className="text-blue-500 cursor-pointer">See all</button>
            </div>
            </div>

            <ClientFriendReq  users = {FriendReq} />
        </div>

    </div>)
};

export default RightHomeFriendReq;