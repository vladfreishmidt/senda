import React from 'react';
import {NavLink} from "react-router-dom";
import {MdPerson, MdMarkunread, MdSort, MdMusicNote, MdSettings} from "react-icons/md";
import s from './Navbar.module.css';


const Navbar = () => {
   return (
      <div>
         <nav className={s.nav}>
            <div className={s.item}>
               <NavLink to="/profile" activeClassName={s.active}>
                  <MdPerson/>
                  <span>Profile</span>
               </NavLink>
            </div>
            <div className={`${s.item} ${s.notification}`}>
               <NavLink to="/dialogs" activeClassName={s.active}>
                  <MdMarkunread/>
                  <span>Messages</span>
               </NavLink>
            </div>
            <div className={s.item}>
               <NavLink to="/news" activeClassName={s.active}>
                  <MdSort/>
                  <span>News</span>
               </NavLink>
            </div>
            <div className={s.item}>
               <NavLink to="/music" activeClassName={s.active}>
                  <MdMusicNote/>
                  <span>Music</span>
               </NavLink>
            </div>
            <div className={s.item}>
               <NavLink to="/settings" activeClassName={s.active}>
                  <MdSettings/>
                  <span>Settings</span>
               </NavLink>
            </div>
         </nav>
         <div className={s.friendsWrapper}>
            <h4>Friends</h4>
            <div className={s.friends}>
               <div className={s.friend}>
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="friend"/>
               </div>
               <div className={s.friend}>
                  <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="friend"/>
               </div>
               <div className={s.friend}>
                  <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="friend"/>
               </div>
               <div className={s.friend}>
                  <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="friend"/>
               </div>
               <div className={s.friend}>
                  <img src="https://randomuser.me/api/portraits/men/7.jpg" alt="friend"/>
               </div>
               <div className={s.friend}>
                  <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="friend"/>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
