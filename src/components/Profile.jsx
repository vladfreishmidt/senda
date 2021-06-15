import React from 'react';
import './Profile.css';

const Profile = () => {
   return (
      <main className="content">
         <div>
            <img className="cover" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feurotravel-norge.no%2Fwp-content%2Fuploads%2F2017%2F12%2FItalien_Verona_01.jpg&f=1&nofb=1" alt="profile cover"/>
         </div>
         <div className="profile-info">
            <div>
               <img src="" alt="profile"/>
            </div>
            <div>
               <h2>Vlad Freishmidt</h2>
               <div>Front-End developer</div>
               <div>Kyiv, Ukraine</div>
            </div>
         </div>
         <div className="posts">
            <div className="new-post">
               <textarea />
               <button>POST</button>
            </div>
            <div className="posts-list">
               <div className="item">
                  <h5>Hey I am a post</h5>
               </div>
               <div className="item">
                  <h5>Hey I am a post</h5>
               </div>
               <div className="item">
                  <h5>Hey I am a post</h5>
               </div>
            </div>
         </div>
      </main>
   );
}

export default Profile;