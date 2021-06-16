import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import './App.css';

const App = (props) => {
  return (
     <BrowserRouter>
         <div className="app-wrapper">
            <Header />
            <Navbar />
            <main className="app-content">
               <Route path="/profile">
                  <Profile postsData={props.postsData}/>
               </Route>
               <Route path="/dialogs">
                  <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>
               </Route>

               <Route path="/news" component={News} />

            </main>
            </div>
     </BrowserRouter>
  );
}

 
export default App;
