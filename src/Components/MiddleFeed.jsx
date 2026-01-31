import { auth } from "@clerk/nextjs/server";
import { prisma } from "../Lib/client";
import Feed from "./Feed";

const MiddleFeed = async(username) => {

    const {username : realName} = username;

    const {userId} = await auth();
    let posts;

    console.log('from middle feed', realName);

    if(username){
        posts = await prisma.post.findMany({
            where : {
                user : username
            },
            include : {
                user : true,
                likes : true,
                _count : {
                    select : {
                        comments : true,
                        likes : true
                    },
                },
            
            },

            orderBy : {
                createdAt : "desc",
            }
        })
    };

    if(!username){
        const following = await prisma.follower.findMany({
            where : {
                followingId : userId,
            },
            select : {
                followerId : true,
            }
        })
        
        const followingIds = following.map(single => single.followingId);

        posts = await prisma.post.findMany({
            where : {
                userId : {
                    in : {followingIds}
                }
            },
             include : {
                user : true,
                likes : true,
                _count : {
                    select : {
                        comments : true,
                        _count:{
                            select:{
                                likes : true,
                            }
                        }
                    },
                },
                
            },
            orderBy : {
                createdAt : "desc",
            }
        })
    }

    console.log('from middle posts  ', posts);

 return posts?.length > 0 ? (
  posts.map((single) => (
        <Feed key={single.id} username={single} />
      ))
    ) : (
      <p>No posts found</p>
    );


};

export default MiddleFeed;