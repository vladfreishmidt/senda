import React from "react";
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

const DialogItem = ({id, name, avatar, isUnread}) => {
   let path = "/dialogs/" + id;

   return (
      <div className={s.dialogsItem}>
         <NavLink to={path} activeClassName={s.active}>
            <span className={isUnread ? s.unread : undefined}>
               <img className={s.avatar} src={avatar} alt={name}/>
            </span>
            <span className={s.name}>{name}</span>
         </NavLink>
      </div>
   );
}

export default DialogItem;