const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

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