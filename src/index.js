import React from 'react';
import ReactDOM from 'react-dom';
import { state } from './redux/state';
import {BrowserRouter} from "react-router-dom";
import App from './App';


ReactDOM.render(
   <BrowserRouter>
      <App state={state} />
   </BrowserRouter>,
   document.getElementById('root')
);

