import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
   return (
      <div>
         <div>
            <img className={s.cover} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feurotravel-norge.no%2Fwp-content%2Fuploads%2F2017%2F12%2FItalien_Verona_01.jpg&f=1&nofb=1" alt="profile cover"/>
         </div>
         <div className={s.profileInfo}>
            <div className={s.coverWrapper}>
               <img className={s.avatar} src="https://randomuser.me/api/portraits/women/91.jpg" alt="profile"/>
            </div>
            <div>
               <h3 className={s.profileName}>Mattie Hopkins</h3>
               <div className={s.infoText}>Sales Manager</div>
               <div className={s.infoText}>6270 First Street, California, USA</div>
               <div className={s.infoText}>Opened to new opportunities</div>
            </div>
         </div>
         <MyPosts />
      </div>
   );
}

export default Profile;