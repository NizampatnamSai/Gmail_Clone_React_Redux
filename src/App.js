import React, { useEffect } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Switch,Route, Link, Routes} from 'react-router-dom'
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import {useDispatch, useSelector} from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './Firebase';


function App() {

  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen)
  const user=useSelector(selectUser)
   const dispatch=useDispatch()

   useEffect(()=>{
             auth.onAuthStateChanged(user=>{
               if(user) {
                 //loged in

                 dispatch(login({
                  displayName:user.displayName,
                  email:user.email,
                  photUrl:user.photoURL
                 }))
               }
               
             })
   },[])


  
  return (

    <Router>
    {!user ? (<Login/>):(


    <div className="App">
    <Header/>
    
    
    <div className='app_body'>
    <Sidebar/>
    {/* <Switch>
      <Route path='/mail'>
        <Mail/>
      </Route>
      <Route path='/'>
      <EmailList/>
      </Route>
    </Switch> */}
    <Routes>
      <Route path='/mail' element={<Mail/>}/>
      <Route path='/' element={<EmailList/>}/>
    </Routes>
    </div>

   { sendMessageIsOpen && <SendMail />}
    
    </div>
    )}</Router>
  );
}

export default App;
