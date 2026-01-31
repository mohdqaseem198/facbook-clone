import FeedDeletePost from "./InteractionFolder/FeedDeletePost";
import PostLikeInteraction from "./InteractionFolder/PostLikeInteraction";
import CommentsInThisPost from "../Components/InteractionFolder/CommentsInThisPost";

const Feed = (Posts) => {

    const isLiked = Posts?.username?.likes.some(
    (like) => like.userId === Posts?.username?.userId
    );

    console.log('from feed', Posts);
    console.log('from feed liked', isLiked);

    console.log('from Posts?.username?.id', Posts?.username?.id);
    console.log('from Posts?.username?.userId', Posts?.username?.userId);
    console.log('from Posts?.username?._count?.comments', Posts?.username?._count?.comments);

    return(
        <div className="bg-white rounded-sm" id="middle-feed">

        <div className="flex flex-row justify-between items-center p-3">
            <div className="flex flex-row justify-left items-center gap-2">
                <div className=" w-10 h-10 m-1 overflow-hidden rounded-full ">
                    <img className="w-full h-full object-cover" src={Posts?.username?.img} />
                </div>
                <div className="font-bold">
                    <p>{Posts?.username?.user?.username}</p>
                </div>
            </div>

            <div className="w-20 h-5">
                <FeedDeletePost id={Posts?.username?.id} />
            </div>
        </div>

        <div className="p-3">
            <div>
                <img className="rounded-sm" src={Posts?.username?.user?.cover} />
            </div>
            <div className="text-left my-3">
                <p>{Posts?.username?.desc}</p>
            </div>
            <PostLikeInteraction postId={Posts?.username?.id} userId={Posts?.username?.userId} comment={Posts?.username?._count?.comments} Liked={isLiked} />
            <CommentsInThisPost postId={Posts?.username?.id} />
        </div>

    </div>
    )
};

export default Feed;