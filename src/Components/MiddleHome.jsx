import MiddleStories from "./MiddleStories";
import MiddlePost from "./MiddlePost";
import MiddleFeed from "./MiddleFeed";

const MiddleHome = () => {
    return(<div className="mr-2 ml-3 my-2" id="middle-home">
            <div>
                <MiddleStories />
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