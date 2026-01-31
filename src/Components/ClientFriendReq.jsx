'use client'

import { Carrois_Gothic } from "next/font/google";
import { acceptFollowReq, declineFollowReq } from "../Lib/action";
import { useState } from "react";

const ClientFriendReq = ({users}) =>{

    const [requestState, setRequestState] = useState(users);

    const accept = async() => {
        try{
            await acceptFollowReq('user_38IgN22a2l9z1lxDnNp3hPcaTHU');
            setRequestState((prev) => prev.filter((req) => req.id !== 'user_38IgN22a2l9z1lxDnNp3hPcaTHU'))
        }
        catch(err){
            console.log('err from accept click' , err);
        }
    }

    const decline = async() => {
        try{
            await declineFollowReq('user_38IgN22a2l9z1lxDnNp3hPcaTHU');
            setRequestState((prev) => prev.filter((req) => req.id !== 'user_38IgN22a2l9z1lxDnNp3hPcaTHU'))
        }
        catch(err){
            console.log('err from decline click' , err);
        }
    }

    return(<div id="client-friend-req">
        {requestState && requestState.map((single, index) => {
            return(
                <div key={index} className="flex flex-row justify-between my-2">
                <div className="flex flex-row items-center">
                    <div className="w-6 h-6 rounded-full">
                        <img src={single?.sender?.avatar || "/noavatar.png"} />
                    </div>

                    <div className="mx-2 cursor-pointer">
                        <p>{single?.sender?.username || "Qaseem"}</p>
                    </div>
                </div>
                <div className="flex flex-row">
                <form action={() => accept()}>
                    <button>
                    <div className="w-5 h-5 m-1 cursor-pointer">
                        <img src="accept.png" />
                    </div>
                    </button>
                </form>

                <form action={() => decline()}>
                    <button>
                        <div className="w-5 h-5 m-1 cursor-pointer">
                            <img src="reject.png" />
                        </div>
                    </button>
                    </form>
                </div>

            </div>
            )
        }) }
    </div>)
};

export default ClientFriendReq;