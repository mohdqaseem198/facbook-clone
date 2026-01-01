import UserInfo from "./UserInfo";
import UserMedia from "./UserMedia";
import RightHomeFriendReq from "./RightHomeFriendReq";

const MyProfileRight = () => {
    return(<div className="space-y-4" id="my-profile-right">
        <div>
            <UserInfo />
        </div>

        <div>
            <UserMedia />
        </div>

        <div>
            <RightHomeFriendReq />
        </div>

    </div>)
};

export default MyProfileRight;