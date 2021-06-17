import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import './App.css';

const App = ({state, addPost}) => {
   return (
      <div className="app-wrapper">
         <Header/>
         <Navbar/>
         <main className="app-content">

            <Route path="/profile">
               <Profile profilePage={state.profilePage} addPost={addPost}/>
            </Route>

            <Route path="/dialogs">
               <Dialogs dialogsPage={state.dialogsPage}/>
            </Route>

            <Route path="/news" component={News}/>

         </main>
      </div>
   );
}


export default App;
