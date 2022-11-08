import {useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import MuiNavbar from './components/MuiNavbar'

import AnimatedRoutes from './components/AnimatedRoutes'
function App() {
  const [logged, setLogged] = useState(false)
  
  return (
    <Router>
      <div className="App">
        <MuiNavbar loggedIn={logged}/>
        <AnimatedRoutes changeLogState={setLogged} loggedIn={logged}/>
      </div>
    </Router>
  )
}

export default App
