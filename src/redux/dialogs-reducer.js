const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
   dialogs: [
      {
         id: 1,
         name: "Peter Lopez",
         avatar: "https://randomuser.me/api/portraits/men/74.jpg",
         isUnread: true,
      },
      {
         id: 2,
         name: "Franklin Lewis",
         avatar: "https://randomuser.me/api/portraits/men/47.jpg",
         isUnread: false,
      },
      {
         id: 3,
         name: "Adam Brown",
         avatar: "https://randomuser.me/api/portraits/men/33.jpg",
         isUnread: true,

      },
      {
         id: 4,
         name: "Bertha Russell",
         avatar: "https://randomuser.me/api/portraits/women/90.jpg",
         isUnread: false,
      },
      {
         id: 5,
         name: "Florence Diaz",
         avatar: "https://randomuser.me/api/portraits/women/86.jpg",
         isUnread: true,
      },
      {
         id: 6,
         name: "Candice Holland",
         avatar: "https://randomuser.me/api/portraits/women/93.jpg",
         isUnread: false,
      },
      {
         id: 7,
         name: "Kathy Jacobs",
         avatar: "https://randomuser.me/api/portraits/women/92.jpg",
         isUnread: true,
      },
      {
         id: 8,
         name: "Carmen Harper",
         avatar: "https://randomuser.me/api/portraits/women/88.jpg",
         isUnread: false,
      },
      {
         id: 9,
         name: "Eduardo Turner",
         avatar: "https://randomuser.me/api/portraits/men/13.jpg",
         isUnread: true,
      },
      {
         id: 10,
         name: "Derek Hayes",
         avatar: "https://randomuser.me/api/portraits/men/27.jpg",
         isUnread: false,
      },
   ],
   messages: [
      {
         id: 1,
         text: "Send a text message to a group of contacts. Include photos, personalize your texts, and                       track who clicked your links.",
         isOwn: true
      },
      {
         id: 2,
         text: "Send a text message to a group of contacts. Include photos, personalize your texts, and                       track who clicked your links.",
         isOwn: false
      },
      {
         id: 3,
         text: "Include photos, personalize your texts, and                       track who clicked your links.",
         isOwn: false
      },
      {
         id: 4,
         text: "Send a text message to a group of contacts.",
         isOwn: true
      }
   ],
   newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

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