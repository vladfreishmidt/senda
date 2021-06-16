import React from 'react';
import { MdSend } from 'react-icons/md';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";


const Dialogs = ({ dialogsPage }) => {

   // Mapping DialogsItem components
   const dialogsElements = dialogsPage.dialogs.map(dialog => {
      return (
         <DialogItem
            key={dialog.id}
            name={dialog.name}
            id={dialog.id}
         />
      );
   });

   // Mapping messagesElements components
   const messagesElements = dialogsPage.messages.map(message => {
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
               <textarea placeholder="Type message here.."/>
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