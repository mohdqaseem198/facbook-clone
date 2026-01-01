'use client';
import { usePathname } from "next/navigation";
import LeftHomeProfile from "./LeftHomeProfile";

const LeftHomeProfileWrapper = () => {

    const pathname = usePathname();

    if (pathname.startsWith('/profile')) return null;

    return(<div className="" id="left-home-profile-wrapper">
        <LeftHomeProfile />
    </div>)
};

export default LeftHomeProfileWrapper;