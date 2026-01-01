import LeftHome from "@/src/Components/LeftHome";
import MyProfileRigth from "@/src/Components/MyProfileRight";
import MyProfileMiddle from "@/src/Components/MyProfileMiddle"

const ProfileSection = () => {
    return(<div className="bg-gray-100" id="profile-section">
        <div className="grid grid-cols-1 text-center md:grid-cols-4">
                        <div className="p-1 hidden md:block md:col-span-1">
                            <LeftHome />
                        </div>
        
                        <div className="col-span-1 md:col-span-2">
                            <MyProfileMiddle />
                        </div>
        
                        <div className="hidden md:block md:col-span-1">
                            <MyProfileRigth />
                        </div>
                    </div>
    </div>)
};

export default ProfileSection;