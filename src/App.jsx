import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Denuncias from './pages/Denuncias'
import ScreenWhistle from './components/ScreenWhistle'
import Support from './pages/Support'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/inicio" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/denuncias" element={<Denuncias />} />
        </Routes>
        <Routes>
          <Route path="/denunciar" element={<ScreenWhistle />} />
        </Routes>
        <Routes>
          <Route path="/soporte" element={<Support />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
