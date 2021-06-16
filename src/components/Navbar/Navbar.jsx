import React from 'react';
import {NavLink} from "react-router-dom";
import { MdPerson, MdMarkunread, MdSort, MdMusicNote, MdSettings } from "react-icons/md";
import s from './Navbar.module.css';


const Navbar = () => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>
               <MdPerson />
               <span>Profile</span>
            </NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>
               <MdMarkunread />
               <span>Messages</span>
            </NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active}>
               <MdSort />
               <span>News</span>
            </NavLink>
         </div>
         <div  className={s.item}>
            <NavLink to="/music" activeClassName={s.active}>
               <MdMusicNote />
               <span>Music</span>
            </NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.active}>
               <MdSettings />
               <span>Settings</span>
            </NavLink>
         </div>
      </nav>
   );
}

export default Navbar;
