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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
         </div>
      </div>
   );
}

export default MyPosts;