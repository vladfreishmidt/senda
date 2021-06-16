import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({ profilePage }) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts postsData={profilePage.posts}/>
      </div>
   );
}

export default Profile;