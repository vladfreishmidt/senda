const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            author: "Unknown name placeholder",
            avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OesLvyzDO6AvU_hYUAT4IAHaHa%26pid%3DApi&f=1",
            content: state.newPostText,
            likesCount: 0
         }

         state.posts.push(newPost);
         state.newPostText = "";
         return state;

      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;

      default:
         return state;
   }

};


// action creators

export const addPostActionCreator = () => (
   {
      type: ADD_POST
   }
);

export const updateNewPostText = (text) => (
   {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
);

export default profileReducer;