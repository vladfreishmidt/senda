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

   // createRef
   let newMessageElement = React.createRef();

   // Event handlers
   const addMessage = () => {
      let text = newMessageElement.current.value;
      alert(text);
      newMessageElement.current.value = "";
   }


   return (
      <div className={s.dialogsWrapper}>

         {/* Dialogs */}

         <div className={s.dialogs}>

            { dialogsElements }

         </div>
         <div className={s.dialogMessages}>

            {/* Messages */}

            <div className={s.messages}>

               { messagesElements }

            </div>

            {/* Add new Message */}

            <div className={s.newMessage}>
               <textarea ref={newMessageElement} placeholder="Type message here.."/>
               <button className={s.btn} onClick={ addMessage }>
                  <span>Send</span>
                  <MdSend/>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;