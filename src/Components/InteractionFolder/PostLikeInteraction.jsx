"use client";
import { useState, useTransition } from "react";
import {toggleLike} from "../../Lib/action";
import {createComment} from "../../Lib/action";

const PostLikeInteraction = ({postId, userId, comment, Liked }) => {

    const initiallyLiked =  Liked?.Liked;
    console.log('from postLikeInteraction', postId, userId, comment);
    console.log('initiallyLiked', initiallyLiked);

    const [isLiked, setIsliked] = useState(initiallyLiked);
    const [isPending, startTransition] = useTransition();

    const handleLiked = () => {

        // Optimistic UI
        setIsliked((prev) => !prev);

        startTransition(() => {
          toggleLike(postId);
        });

    }

    return(<div className="text-left flex flex-row justify-around " id="post-like-interaction">

        <div className="w-8">
            <button onClick={() => handleLiked()} className={`cursor-pointer disabled=${isPending}`}>
                <img src={`${isLiked ? './liked.png' :'like.png'}`} />
            </button>
        </div>

        <div className="">
            <form className="" action={createComment}>
                <input type="text" name="comment" placeholder="let me know about post" className="border rounded-md border-black outline-none p-2 placeholder:text-gray-600" />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="postId" value={postId} />
                <button className="cursor-pointer mx-6 ">
                    Comment
                </button>
            </form>
        </div>

    </div>)
};

export default PostLikeInteraction;