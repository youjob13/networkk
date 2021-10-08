import React from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";

const Profile = ({
  saveProfile,
  savePhoto,
  isOwner,
  profile,
  status,
  updateStatus,
}: any) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <ProfileInfo
        saveProfile={saveProfile}
        savePhoto={savePhoto}
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
