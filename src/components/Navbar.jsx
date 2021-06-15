import React from 'react';
import s from './Navbar.module.css';
import { MdPerson } from "react-icons/md";

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
            <a href="/dialogs">Messages</a>
         </div>
         <div className={s.item}>
            <a href="/news">News</a>
         </div>
         <div  className={s.item}>
            <a href="/music">Music</a>
         </div>
         <div className={s.item}>
            <a href="/settings">Settings</a>
         </div>
      </nav>
   );
}

export default Navbar;
