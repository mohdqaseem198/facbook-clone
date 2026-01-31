"use client"
import { useState } from "react";
import {SwitchFollow} from "../../Lib/action";

const UserInfoInteraction = ({ userId, isFollowing, isFollowingReqSent, isBlocked}) => {

const [userState, setUserState]  = useState({
    following : isFollowing,
    followingReqSent : isFollowingReqSent,
    blocked : isBlocked
});

console.log('user info interaction' , userId);

const { following, followingReqSent, blocked } = userState;

const follow = async() =>{
    await SwitchFollow(userId);
    setUserState((prev) => ({
        ...prev,
        following : prev.following && false,
        followingReqSent : !prev.following ? true : false,
    }))
}

    return(
        <form action={follow}>
            <div className="bg-blue-500 text-white rounded-sm">
                <button className="p-1 cursor-pointer w-full h-full">
                    {following ? 'Following' : followingReqSent ? 'Following Request Sent' : 'Follow'}
                </button>
            </div>
        </form>
    )
};

export default UserInfoInteraction;