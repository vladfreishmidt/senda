import React from "react";
import s from "../Dialogs.module.css";

const Message = ({text, isOwn}) => {
   return (
      <div className={ `${s.messagesItem} ${isOwn && s.own}` }>
         <span className={s.messageBody}>
            {text}
         </span>
      </div>
   );
}

export default Message;