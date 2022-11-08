import React from 'react'
import Home from '../components/Home'
import Map from '../components/Map'
import Chat from '../components/Chat'
import Login from '../components/Login'
import Profile from '../components/Profile'
import {Route, Routes, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import { useEffect } from 'react';

function AnimatedRoutes({changeLogState, loggedIn}) {
    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/map" element={<Map loggedIn={loggedIn}/>} />
            <Route exact path="/chat" element={<Chat loggedIn={loggedIn}/>} />
            <Route exact path="/login" element={<Login changeLogState={changeLogState} loggedIn={loggedIn}/>}/>
            <Route exact path="/profile" element={<Profile loggedIn={loggedIn}/>} />
        </Routes>
    </AnimatePresence>

  )
}

export default AnimatedRoutes