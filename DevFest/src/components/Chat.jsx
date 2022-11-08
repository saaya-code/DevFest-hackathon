import { useEffect } from 'react';

import { motion } from 'framer-motion'
import ChatNotLogged from '../SubComponents/ChatNotLogged'
import ChatLoggedIn from '../SubComponents/ChatLoggedIn'
export default function Chat({loggedIn}) {
  useEffect(()=>{
    document.title = "Chat"
});
  return (
    <div className='main-content'>  
       {!loggedIn && <ChatNotLogged/>}
       {loggedIn && <ChatLoggedIn/>}
       
    </div>
  )
}
