import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({ profilePage, dispatch, updateNewPostText }) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts
            postsData={profilePage.posts}
            newPostText={profilePage.newPostText}
            dispatch={ dispatch }
            updateNewPostText={ updateNewPostText }
         />
      </div>
   );
}

export default Profile;