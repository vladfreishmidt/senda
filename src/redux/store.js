import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {

   _state: {
      profilePage: {
         posts: [
            {
               id: 1,
               author: "John Doeran",
               avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2019%2F10%2F29%2F14%2Felon-musk.jpg&f=1&nofb=1",
               content: "I am a post content text!",
               likesCount: 210
            },
            {
               id: 2,
               author: "Sarah Nilson Doe",
               avatar: "https://randomuser.me/api/portraits/women/91.jpg",
               content: "When you change a div's display property to inline, you lose the ability to control the height of that container because it is no longer a block element. Using inline-block will fix it.",
               likesCount: 122
            },
            {
               id: 3,
               author: "Sarah Nilson Doe",
               avatar: "https://randomuser.me/api/portraits/women/91.jpg",
               content: "My cool and interesting post text goes right here!",
               likesCount: 122
            }
         ],
         newPostText: '',
      },
      dialogsPage: {
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
      },
      sidebar: {
         friends: [
            {
               id: 1,
               name: "Alisa",
               avatar: ""
            },
         ]
      }
   },

   _callSubscriber() {
      console.log("the state was changed")
   },

   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);

   }
};





export default store;
window.store = store;