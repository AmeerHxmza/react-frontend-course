import React from "react";
import { useLoaderData } from "react-router-dom";

const Profile = () => {
  const profileData = useLoaderData();
  console.log(profileData);
  return (
    <>
      <div className="profile-card">
        <h2>Github Profile</h2>
        <img
          src={profileData.avatar_url}
          alt={profileData.login} 
          width={100}
        />
      </div>
    </>
  );
};

export default Profile;
