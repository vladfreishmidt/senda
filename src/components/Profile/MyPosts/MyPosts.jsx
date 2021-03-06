import React from 'react';
import s from './MyPosts.module.css'
import {MdCreate} from "react-icons/md";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostText} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

   // Mapping Post component
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


   // createRef

   let newPostElement = React.createRef();


   // Event handlers

   const addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   const onPostChange = () => {
      let text = newPostElement.current.value;
      let action = updateNewPostText(text);

      props.dispatch(action);
   }


   return (
      <div className={s.posts}>

         {/* New Post */}

         <div className={s.newPost}>
            <textarea
               ref={newPostElement}
               onChange={ onPostChange }
               value={props.newPostText}
               placeholder="What's on your mind?"
            />
            <div className={s.btnWrapper}>
               <button className={s.btn} onClick={ addPost }>
                  <MdCreate />
                  <span>Add post</span>
               </button>
            </div>
         </div>

         {/* Posts */}

         <div className={s.postsList}>

            { postsElements.reverse() }

         </div>
      </div>
   );
}

export default MyPosts;