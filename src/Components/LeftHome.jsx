
import LeftHomeShortcuts from "./LeftHomeShortcuts"
import RightHomeAd from "./RightHomeAd";
import LeftHomeProfileWrapper from "./LeftHomeProfileWrapper";


const LeftHome = () => {

    //const pathname = usePathname();
    //if(pathname.StartWith('/profile')) return null
    
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