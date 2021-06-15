import React from 'react';
import s from './Navbar.module.css';
import { MdPerson, MdMarkunread, MdSort, MdMusicNote, MdSettings } from "react-icons/md";

const Navbar = () => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <a href="/" className={s.active}>
               <MdPerson />
               <span>Profile</span>
            </a>
         </div>
         <div className={s.item}>
            <a href="/dialogs">
               <MdMarkunread />
               <span>Messages</span>
            </a>
         </div>
         <div className={s.item}>
            <a href="/news">
               <MdSort />
               <span>News</span>
            </a>
         </div>
         <div  className={s.item}>
            <a href="/music">
               <MdMusicNote />
               <span>Music</span>
            </a>
         </div>
         <div className={s.item}>
            <a href="/settings">
               <MdSettings />
               <span>Settings</span>
            </a>
         </div>
      </nav>
   );
}

export default Navbar;
