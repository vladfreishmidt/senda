import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({ profilePage, addPost }) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts postsData={profilePage.posts} addPost={addPost}/>
      </div>
   );
}

export default Profile;