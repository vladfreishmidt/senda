import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let postsData = [
   {
      id: 1,
      author: "John Doeran",
      avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2019%2F10%2F29%2F14%2Felon-musk.jpg&f=1&nofb=1",
      content: "I am a post content text!",
      likesCount: "210"
   },
   {
      id: 2,
      author: "Sarah Nilson Doe",
      avatar: "https://randomuser.me/api/portraits/women/91.jpg",
      content: "My cool and interesting post text goes right here!",
      likesCount: "122"
   },
   {
      id: 3,
      author: "Sarah Nilson Doe",
      avatar: "https://randomuser.me/api/portraits/women/91.jpg",
      content: "My cool and interesting post text goes right here!",
      likesCount: "122"
   },
   {
      id: 4,
      author: "Mike Cook",
      avatar: "https://randomuser.me/api/portraits/women/91.jpg",
      content: "LOOOOOLLL!",
      likesCount: "122"
   },
];

let dialogsData = [
   {
      id: 1,
      name: "Dima Kizura"
   },
   {
      id: 2,
      name: "Monzo Saff"
   },
   {
      id: 3,
      name: "Lolo Yummy"
   },
   {
      id: 4,
      name: "Mishut Tarnavskiy"
   },
   {
      id: 5,
      name: "Vova Pushnoi"
   }
];

let messagesData = [
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
   }
];

ReactDOM.render(
   <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
   />,
   document.getElementById('root')
);

