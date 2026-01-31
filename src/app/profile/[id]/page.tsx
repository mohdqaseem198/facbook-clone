// src/app/profile/[id]/page.tsx
import LeftHome from "@/src/Components/LeftHome";
import MyProfileRigth from "@/src/Components/MyProfileRight";
import MyProfileMiddle from "@/src/Components/MyProfileMiddle";
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/src/Lib/client";
import { notFound } from "next/navigation";

const ProfileSection = async ({
  params,
}: {
  params: Promise<{ id: string }>;  // params is a Promise
}) => {
  // Await params and destructure correctly (lowercase 'id')
  const { id } = await params;
  const profileId = id;  // Now profileId is the ID from the URL

  //const {userId : currentUserId} = await auth();  // This will work now with middleware

  const currentUserId = (await currentUser())?.id;

  console.log('from route', profileId);  // Should log the correct ID

  // Fetch the user based on profileId (from URL)
  const user = await prisma.user.findFirst({
    where: {
      id: profileId,
    },
    include: {
      _count: {
        select: {
          posts: true,
          followers: true,
          followings: true,
        },
      },
    },
  });

  if (!user) {
    return notFound();
  }

  // Optional blocking logic
  let isBlocked = false;
  if (currentUserId) {
    const blockRecord = await prisma.block.findFirst({
      where: {
        blockerId: profileId,
        blockedId: currentUserId,
      },
    });
    isBlocked = !!blockRecord;
  }

  if (isBlocked) {
    return notFound();
  }

let blocked;
if(currentUserId){
    const response = await prisma.block.findFirst({
        where:{
            blockerId : profileId,
            blockedId : currentUserId,
        }
    })
    if(response){
        blocked = true;
    }
    else{
        blocked  = false;
    }
}

  return (
    <div className="bg-gray-100" id="profile-section">
      <div className="grid grid-cols-1 text-center md:grid-cols-4">
        <div className="p-1 hidden md:block md:col-span-1">
          <LeftHome />
        </div>
        <div className="col-span-1 md:col-span-2">
          <MyProfileMiddle user={user} />
        </div>
        <div className="hidden md:block md:col-span-1">
          <MyProfileRigth user={user} />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;