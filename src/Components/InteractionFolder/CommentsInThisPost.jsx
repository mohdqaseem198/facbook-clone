"use server";

import { prisma } from "@/src/Lib/client";


const CommentsInThisPost = async(postId) =>{

    console.log('from commentInThisPost postId', postId?.postId);

    const commentsList = await prisma.comment.findMany({
        where:{
            postId : postId?.postId
        },
        include:{
            user: true
        }
    })

    console.log ('commentsList', commentsList)
    console.log ('commentsList,length', commentsList.length)

    return(commentsList.length>0 ? commentsList.map((single) => 
    <div className="bg-gray-200 flex flex-row justify-center gap-2" id="comments-in-this-post">
        <div className="font-bold">{single?.user?.username}</div>
            <div>{single.desc}</div>
    </div>)
     : ""
    )
    };
export default CommentsInThisPost;