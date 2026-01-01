import RightHomeFriendReq from "./RightHomeFriendReq";
import RightHomeBirthday from "./RigthHomeBirthday";
import RightHomeAd from "./RightHomeAd";


const RightHome = () => {
    return(<div className="" id="middle-home">
            <div className="my-2 mx-1 shadow-b">
                <RightHomeFriendReq />
            </div>

            <div className="my-5">
                <RightHomeBirthday />
            </div>

            <div className="m-1">
                <RightHomeAd />
            </div>
    </div>)
};

export default RightHome;