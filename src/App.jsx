import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import SpaceStone from './pages/SpaceStone'
import PowerStone from './pages/PowerStone'
import MindStone from './pages/MindStone'
import RealityStone from './pages/RealityStone'
import TimeStone from './pages/TimeStone'
import SoulStone from './pages/SoulStone'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/space" element={<SpaceStone />} />
        <Route path="/power" element={<PowerStone />} />
        <Route path="/mind" element={<MindStone />} />
        <Route path="/reality" element={<RealityStone />} />
        <Route path="/time" element={<TimeStone />} />
        <Route path="/soul" element={<SoulStone />} />
        {/* You can later add more routes like below: */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  )
}
