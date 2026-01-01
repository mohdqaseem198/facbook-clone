import LeftHomeShortcuts from "./LeftHomeShortcuts"
import RightHomeAd from "./RightHomeAd";
import LeftHomeProfileWrapper from "./LeftHomeProfileWrapper";

const LeftHome = () => {
    
    return(<div className="" id="left-home">
        <div>
            <LeftHomeProfileWrapper />
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