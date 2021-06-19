const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {

   switch (action.type) {

      case ADD_MESSAGE:
         let message = {
            id: 10,
            text: action.newText,
            isOwn: true
         };
         state.messages.push(message);
         state.newMessageText = "";
         return state;

      case UPDATE_MESSAGE_TEXT:
         state.newMessageText = action.newText;
         return state;

      default:
         return state;
   }
}

export default dialogsReducer;