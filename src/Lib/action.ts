"use server";
import z from "zod";
import { prisma } from "./client";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const SwitchFollow = async({mainId} : {mainId : String}) =>{

    const {userId: currentUserId} = await auth();
    console.log('from switch component: ');
    console.log('mainId.id' , mainId);
    console.log('currentUserId' , currentUserId);

    try{
        //if already following
        const existingFollow = await prisma.follower.findFirst({
            where:{followerId : currentUserId,
                followingId : 'mainId Dummy'
            }
        });

        //if already following then delete / unfollow
        if(existingFollow){
            await prisma.follower.delete({
                where:{id : existingFollow.id}
            })
        }

        else{
            //else check if friend request is already sent
            const FollowReqSent = await prisma.followRequest.findFirst({
                where:{senderId : currentUserId,
                    receiverId : 'mainId Dummy'
                }
            })

            //if following request is already sent then delete them
            if(FollowReqSent){
                await prisma.followRequest.delete({
                    where:{id : FollowReqSent.id}
                })
            }

            else{
                await prisma.followRequest.create({
                    data:{
                        senderId : currentUserId,
                        receiverId : 'mainId Dummy',
                    }
                })
            }
        }


    }
    catch(err){
        console.error(err);
        throw err;
    }
};

export const acceptFollowReq = async(userId) => {

    try {
    const {userId : currentId} = await auth();

    if(!currentId) {return null};

    const existingFollowRequest = await prisma.followRequest.findFirst({
        where:{senderId : 'user_38IgN22a2l9z1lxDnNp3hPcaTHU',
            receiverId : currentId,
        }
    })

    if(existingFollowRequest){
        await prisma.followRequest.delete({
            where : {id: existingFollowRequest.id}
        })
    }

    await prisma.follower.create({
        data: {
            followingId : currentId,
            followerId : 'user_38IgN22a2l9z1lxDnNp3hPcaTHU'
        }
    })}

    catch(err){
        console.log('from acceptFollowReq action' , err);
        throw new Error("something went wrong");
    }
}

export const declineFollowReq = async(userId) => {

    try {
    const {userId : currentId} = await auth();

    if(!currentId) {return null};

    const existingFollowRequest = await prisma.followRequest.findFirst({
        where:{senderId : 'user_38IgN22a2l9z1lxDnNp3hPcaTHU',
            receiverId : currentId,
        }
    })

    if(existingFollowRequest){
        await prisma.followRequest.delete({
            where : {id: existingFollowRequest.id}
        })
    }}

    catch(err){
        console.log('from acceptFollowReq action' , err);
        throw new Error("something went wrong");
    }
}

export const UploadForm = async(formData) =>{
    
    const data = Object.fromEntries(formData);
    // const {secure_url } = coverFull;
    // let cover = secure_url;
    console.log('formData ', formData);

  const profile = z.object({
      cover : z.string().optional(),
      name : z.string().max(30).optional(),
      surname : z.string().max(30).optional(),
      school : z.string().max(30).optional(),
      work : z.string().max(30).optional(),
      city : z.string().max(30).optional(),
      website : z.string().max(30).optional(),
      avatar : z.string().max(255).optional(),
})

    const validateField = profile.safeParse(data);

    if(!validateField.success){
        console.log(validateField.error.flatten().fieldErrors);
        return "";
    }

    const {userId} = await auth();

    await prisma.user.update({
        where:{id : userId},
        data:validateField.data,
    })


}

export const DeletePost = async(formData : FormData) =>{

    const postId = formData.get("postId");
    console.log('id from delete post' , postId);

    try{
        const delet = await prisma.post.delete({
            where:{
                id:Number(postId)
            }
        })
    }
    catch(err){
        console.log(err);
        throw new Error("went wrong!");
    }
}

export async function toggleLike(postId) {
  const { userId } = await auth();
  if (!userId) return;

  console.log('inside toggleLike userId', userId);
  console.log('inside toggleLike', postId);

  const existingLike = await prisma.like.findFirst({
    where: {
        userId,
        postId,
    },
  });

  if (existingLike) {
    await prisma.like.delete({
      where: { id: existingLike.id },
    });

  } else {
    await prisma.like.create({
      data: { userId, postId },
    });
}
}

export async function createComment(formData : FormData){

    const comment = formData.get("comment");
    const userId = formData.get("userId");
    const postId = formData.get("postId");

    console.log('from createComment',comment, userId, postId);
    //desc, postId, userId

    try{

        await prisma.comment.create({
            data:{
                desc : comment,
                userId : userId,
                postId : Number(postId)
            }
        })
    }
    catch(err){
        console.log(err);
        throw new Error("err");
    }

    revalidatePath("/");
    
}

export const AddStory = async(formData:FormData) => {

    const {userId} = await auth();

//userId , img
    try{
        const storyAdd = formData.get("storyAdd");
        console.log('from story action', storyAdd);

           await prisma.story.create({
            data:{
                userId : userId,
                img : storyAdd,
                expiresAt : new Date(Date.now() + 24*60*60*1000),
                }
            })
        }

    catch(err){
        console.log(err);
        throw new Error("error");
    }
};