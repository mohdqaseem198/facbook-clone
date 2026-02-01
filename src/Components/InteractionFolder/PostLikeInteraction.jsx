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
            <form className="mb-1" action={createComment}>
                <div className="h-12 border border-black rounded-2xl">
                    <input type="text" name="comment" className="rounded-md outline-none p-2 placeholder:text-gray-600" placeholder="let me know about post"/>
                    <input type="hidden" name="userId" value={userId} />
                    <input type="hidden" name="postId" value={postId} />
                    <button className="h-full cursor-pointer bg-gray-300 p-1 rounded-r-2xl">
                        Comment
                    </button>
                    </div>
            </form>
        </div>

    </div>)
};

export default PostLikeInteraction;