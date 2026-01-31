import { auth } from "@clerk/nextjs/server";
import { prisma } from "../Lib/client";
import ClientUserMedia from "./ClientUserMedia";

const UserMedia = async() => {

    const {userId : currentId} = await auth();
    

    const media = await prisma.post.findMany({
        where:{userId : currentId,
            img : {
            not : null
            },
        },
        
        take : 8,
        orderBy : {
            createdAt : "desc"
        }
    })

    return(<div className="py-3 bg-white rounded-sm" id="user-media">
        <div>
            <div className="flex flex-row justify-between p-1">
                <div>
                    <p>User Media</p>
                </div>
                <div className="cursor-pointer text-blue-600">
                    <ClientUserMedia />
                </div>
            </div>

            <div className="flex justify-center flex-wrap gap-1">

                {/* <div className="cursor-pointer w-25 h-35 rounded-2xl overflow-hidden">
                    <img className="w-full h-full object-cover" src='https://images.pexels.com/photos/34141640/pexels-photo-34141640.jpeg' />
                </div> */}

                {media && media.map((single) => {return(
                    <div key={single.id} className="cursor-pointer w-25 h-35 rounded-2xl overflow-hidden">
                        <img className="w-full h-full object-cover" src={single.img} />
                    </div>)
                })}

            </div>

        </div>
    </div>)
};

export default UserMedia;