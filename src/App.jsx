import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Denuncias from './pages/Denuncias'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/denuncias" element={<Denuncias />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
