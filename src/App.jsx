import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import CreateTrips from './CreateTrips'
import Buses from './Buses'
import Driver from './Driver'
import Tracking from './Tracking'
import Settings from './Settings'
import Bookings from './Bookings'


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  
  return (
    <motion.div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-trips" element={<CreateTrips />} />
        <Route path="/buses" element={<Buses />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </motion.div>
  )
}

export default App
