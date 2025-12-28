import LeftHomeProfile from "./LeftHomeProfile";
import LeftHomeShortcuts from "./LeftHomeShortcuts"
import RightHomeAd from "./RightHomeAd";

const LeftHome = () => {
    return(<div className="" id="left-home">
        <div>
            <LeftHomeProfile />
        </div>

        <div className="mb-3">
            <LeftHomeShortcuts />
        </div>

        <div>
            <RightHomeAd />
        </div>
    </div>)
};

export default LeftHome;