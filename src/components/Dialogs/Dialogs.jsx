import React from 'react';
import { MdSend } from 'react-icons/md';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";


const Dialogs = (props) => {

   // Mapping DialogsItem components
   const dialogsElements = props.dialogsPage.dialogs.map(dialog => {
      return (
         <DialogItem
            key={dialog.id}
            name={dialog.name}
            avatar={dialog.avatar}
            id={dialog.id}
            isUnread={dialog.isUnread}
         />
      );
   });

   // Mapping messagesElements components
   const messagesElements = props.dialogsPage.messages.map(message => {
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
   let chatBox = React.createRef();

   const scrollToBottom = () => {
      chatBox.current.scrollIntoView({ behavior: "smooth", block: "start" });
   }

   // Event handlers
   const addNewMessage = () => {

      let text = newMessageElement.current.value;
      let action = {type: 'ADD-MESSAGE', newText: text};

      props.dispatch(action);

      scrollToBottom();

      newMessageElement.current.value = "";
   }

   const onMessageChange = () => {
      let text = newMessageElement.current.value;
      let action = {type: 'UPDATE-MESSAGE-TEXT', newText: text};

      props.dispatch(action);
   }


   return (
      <div className={s.dialogsWrapper}>

         {/* Dialogs */}

         <div className={s.dialogs}>

            { dialogsElements }

         </div>
         <div className={s.dialogMessages}>

            {/* Messages */}

            <div  className={s.messages}>

               { messagesElements }

               <div
                  ref={chatBox}
                  className="chatBoxBottom"
                  style={{height: '50px', position: 'relative', background: 'transparent', bottom: '0'}}
               />

            </div>

            {/* Add new Message */}

            <div className={s.newMessage}>
               <textarea
                  ref={newMessageElement}
                  onChange={ onMessageChange }
                  value={props.dialogsPage.newMessageText}
                  placeholder="Type message here.."
               />
               <button className={s.btn} onClick={ addNewMessage }>
                  <span>Send</span>
                  <MdSend/>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;