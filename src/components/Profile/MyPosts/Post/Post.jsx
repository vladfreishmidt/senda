import React from 'react';
import {MdFavorite} from 'react-icons/md';
import s from './Post.module.css'

const Post = () => {
   return (
      <div className={s.item}>
         <header>
            <img className={s.avatar} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2019%2F10%2F29%2F14%2Felon-musk.jpg&f=1&nofb=1" alt="post author"/>
            <h6 className={s.author}>Elon Musk</h6>
         </header>
         <main className={s.content}>
            text text text
         </main>
         <footer>
            <div className={s.likesCount}>
               <MdFavorite color="pink"/>
               <span className={s.number}>289</span>
            </div>
         </footer>
      </div>
   );
}

export default Post;