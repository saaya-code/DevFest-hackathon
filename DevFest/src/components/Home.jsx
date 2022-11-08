import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Button from '@mui/material/Button';
export default function Home() {
    useEffect(()=>{
        document.title = "Home Page"
    });

  return (
    <motion.div className='Home' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <motion.h1 className='welcomeMsg' animate={{ x: [40, 150, 40], opacity: 1, scale: 1 }} transition={{duration: 1, delay: 0.1, ease: [0.5, 0.71, 1, 1.5],}} initial={{ opacity: 0, scale: 0.5 }} whileHover={{ scale: 1.1 }}>
                Welcome to 7oumti
            </motion.h1>
            <Button variant="contained" disableElevation id="HomeBtn">
                About us
            </Button>
       </motion.div>
  )
}
