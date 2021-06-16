import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import './App.css';

const App = () => {
  return (
     <BrowserRouter>
         <div className="app-wrapper">
            <Header />
            <Navbar />
            <main className="app-content">

               <Route path="/profile" component={Profile} />
               <Route path="/dialogs" component={Dialogs} />
               <Route path="/news" component={News} />

            </main>
            </div>
     </BrowserRouter>
  );
}

 
export default App;
