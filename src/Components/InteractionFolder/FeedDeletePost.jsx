import { DeletePost } from "@/src/Lib/action";

const FeedDeletePost = (id) => {

    const {id:myId} = id;
    console.log( 'from feed myId' , myId);

    return(<div className="overflow-hidden  cursor-pointer" id="feed-delete-post">
        <img src="more.png" />
        <form action={DeletePost}>
            <input type="hidden" name="postId" value={myId} />
            <button className="cursor-pointer" type="submit">
                <p className="text-red-600">DeleteMe</p>
            </button>
        </form>
    </div>)
};

export default FeedDeletePost;