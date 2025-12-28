import LeftHome from "./LeftHome";
import MiddleHome from "./MiddleHome";
import RightHome from "./RightHome";

const Home = () => {
    return (<div className="">
            <div className="grid grid-cols-1 text-center md:grid-cols-4">
                <div className="hidden md:block md:col-span-1">
                    <LeftHome />
                </div>

                <div className="col-span-1 md:col-span-2">
                    <MiddleHome />
                </div>

                <div className="hidden md:block md:col-span-1">
                    <RightHome />
                </div>
            </div>
        </div>)
};

export default Home;