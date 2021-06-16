import React from 'react';
import s from './MyPosts.module.css'
import {MdCreate} from "react-icons/md";
import Post from "./Post/Post";

const MyPosts = (props) => {

   // mapping Post component
   const postsElements = props.postsData.map(post => {
         return (
            <Post
               key={post.id}
               author={post.author}
               avatar={post.avatar}
               content={post.content}
               likesCount={post.likesCount}
            />
         );
      });

   return (
      <div className={s.posts}>
         <div className={s.newPost}>
            <textarea placeholder="What's on your mind?"/>
            <div className={s.btnWrapper}>
               <button className={s.btn}>
                  <MdCreate />
                  <span>Add post</span>
               </button>
            </div>
         </div>
         <div className={s.postsList}>

            { postsElements }

         </div>
      </div>
   );
}

export default MyPosts;