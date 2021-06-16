import React from 'react';
import s from './MyPosts.module.css'
import {MdCreate} from "react-icons/md";
import Post from "./Post/Post";

const MyPosts = () => {
   return (
      <div className={s.posts}>
         <div className={s.newPost}>
            <textarea placeholder="What's on your mind?"></textarea>
            <div className={s.btnWrapper}>
               <button className={s.btn}>
                  <MdCreate />
                  <span>Add post</span>
               </button>
            </div>
         </div>
         <div className={s.postsList}>
            <Post
               author="John Doe"
               avatar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2019%2F10%2F29%2F14%2Felon-musk.jpg&f=1&nofb=1"
               content="I am a post content text!"
               likesCount="210"
            />
            <Post
               author="Sarah Nilson"
               avatar="https://randomuser.me/api/portraits/women/91.jpg"
               content="My cool and interesting post text goes right here!"
               likesCount="132"
            />
         </div>
      </div>
   );
}

export default MyPosts;