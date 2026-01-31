
//import { usePathname } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import LeftHomeProfile from "./LeftHomeProfile";
import { redirect } from "next/navigation";


const LeftHomeProfileWrapper = async() => {

    let user;
    const {userId} =  await auth();
    console.log('from wrapper id ');

    if(userId == null) return redirect('/sign-in');

    try{
         
         console.log('from wrapper id ', userId);

        user = await  prisma.user.findFirst({
             where:{id : userId},
             include:{
                 _count:{
                     select:{
                         followers:true
                        }
                    }
                }
            })
     }
     catch(err){
        console.log(err, 'from profile wrapper');
        throw new Error(err);
     }

     if(user === null){
        return null;
     }

    return(<div className="" id="left-home-profile-wrapper">
        <LeftHomeProfile user={user} />
    </div>)
};

export default LeftHomeProfileWrapper;