
import { createPost } from "../actions/post.action";

const MiddlePost = () => {

    // const {userId} = useAuth();
    // console.log(userId);


    return(<div className="my-3 bg-white rounded-sm" id="middle-post">
        <form action={createPost} className="flex flex-row justify-left items-center">
            <div className=" w-15 h-15 m-1 overflow-hidden rounded-full ">
                <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/34141640/pexels-photo-34141640.jpeg" />
            </div>

            <div className="bg-gray-100 w-[75%] h-16 my-3 rounded-md">
                <input name="desc" className="w-full outline-none p-2" placeholder="What's on yout mind?" type= 'text' />
            </div>
            <button type="submit" className="cursor-pointer">
                <div className="w-6 h-6 overflow-hidden">
                    <img className="w-full h-full object-cover" src="emoji.png" />
                </div>
                <p className="text-gray-600">Post</p>
            </button>
        </form>

        <div className="flex flex-row w-[75%] m-auto py-3">
            <div className="flex flex-row mx-2 justify-left gap-2 items-center cursor-pointer">
                <div className="w-6 h-6">
                    <img src="addimage.png" />
                </div>
                <div><p>Photo</p></div>
            </div>

            <div className="flex flex-row mx-2 justify-left gap-2 items-center cursor-pointer">
                <div className="w-6 h-6">
                    <img src="addVideo.png" />
                </div>
                <div><p>Video</p></div>
            </div>

            <div className="flex flex-row mx-2 justify-left gap-2 items-center cursor-pointer">
                <div className="w-6 h-6">
                    <img src="poll.png" />
                </div>
                <div><p>Poll</p></div>
            </div>

            <div className="flex flex-row mx-2 justify-left gap-2 items-center cursor-pointer">
                <div className="w-6 h-6">
                    <img src="addEvent.png" />
                </div>
                <div><p>Event</p></div>
            </div>

        </div>


    </div>)
};

export default MiddlePost;