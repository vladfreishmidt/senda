import React from "react";
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

const DialogItem = ({id, name}) => {
   let path = "/dialogs/" + id;

   return (
      <div className={s.dialogsItem}>
         <NavLink to={path} activeClassName={s.active}>
            {name}
         </NavLink>
      </div>
   );
}

export default DialogItem;