import React from 'react';
import {MdSend} from 'react-icons/md';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";


const Dialogs = (props) => {

   const dialogsElements = props.dialogsData.map(dialog => {
      return (
         <DialogItem
            key={dialog.id}
            name={dialog.name}
            id={dialog.id}
         />
      );
   });

   const messagesElements = props.messagesData.map(message => {
      return (
         <Message
            key={message.id}
            text={message.text}
            isOwn={message.isOwn}
         />
      );
   });

   return (
      <div className={s.dialogsWrapper}>
         <div className={s.dialogs}>

            { dialogsElements }

         </div>
         <div className={s.dialogMessages}>
            <div className={s.messages}>

               { messagesElements }

            </div>
            <div className={s.newMessage}>
               <textarea placeholder="Type message here.."></textarea>
               <button className={s.btn}>
                  <span>Send</span>
                  <MdSend/>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;