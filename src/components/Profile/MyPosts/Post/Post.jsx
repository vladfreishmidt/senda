import React from 'react';
import {MdFavorite} from 'react-icons/md';
import s from './Post.module.css'

const Post = (props) => {
   return (
      <div className={s.item}>
         <header>
            <img className={s.avatar} src={props.avatar} alt="post author"/>
            <h6 className={s.author}>{props.author}</h6>
         </header>
         <main className={s.content}>
            {props.content}
         </main>
         <footer>
            <div className={s.likesCount}>
               <MdFavorite color="pink"/>
               <span className={s.number}>{props.likesCount}</span>
            </div>
         </footer>
      </div>
   );
}

export default Post;