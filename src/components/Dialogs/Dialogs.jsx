import React from 'react';
import {MdSend} from 'react-icons/md';
import s from "./Dialogs.module.css";

const Dialogs = () => {
   return (
      <div className={s.dialogsWrapper}>
         <div className={s.dialogs}>
            <div className={`${s.dialogsItem} ${s.active}`}>Dmitry Kizura</div>
            <div className={s.dialogsItem}>Dmitry Kizura</div>
            <div className={s.dialogsItem}>Dmitry Kizura</div>
            <div className={s.dialogsItem}>Dmitry Kizura</div>
            <div className={s.dialogsItem}>Dmitry Kizura</div>
            <div className={s.dialogsItem}>Dmitry Kizura</div>
            <div className={s.dialogsItem}>Dmitry Kizura</div>
         </div>
         <div className={s.dialogMessages}>
            <div className={s.messages}>
               <div className={s.messagesItem}>
                  <span className={s.messageBody}>
                     Send a text message to a group of contacts. Include photos, personalize your texts, and                       track who clicked your links.
                  </span>
               </div>
               <div className={`${s.messagesItem} ${s.own}`}>
                  <span className={s.messageBody}>message 2</span>
               </div>
               <div className={s.messagesItem}>
                  <span className={s.messageBody}>message 3</span>
               </div>
               <div className={`${s.messagesItem} ${s.own}`}>
                  <span className={s.messageBody}>By using the Service, you consent to our terms. We use cookies                    to offer you our service as described here.
                  </span>
               </div>
            </div>
            <div className={s.newMessage}>
               <textarea placeholder="Type message here.."></textarea>
               <button className={s.btn}>
                  <span>Send</span>
                  <MdSend />
               </button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;