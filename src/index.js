import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login/Login'
import registerServiceWorker from './registerServiceWorker';

//react router modules
import {Route, BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' exact component={App}/>
      <Route path='/login' exact component ={Login} />
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
