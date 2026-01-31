import MiddleStoriesWrapper from "./MiddleStories";
import MiddleFeed from "./MiddleFeed";
import MiddlePost from "./MiddlePost";

const MiddleHome = () => {
    return(<div className="mr-2 ml-3 my-2" id="middle-home">
            <div>
                <MiddleStoriesWrapper />
            </div>

            <div>
                <MiddlePost />
            </div>

            <div>
                <MiddleFeed />
            </div>
    </div>)
};

export default MiddleHome;