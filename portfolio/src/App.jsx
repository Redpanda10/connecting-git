import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './routes/Home'
import Resume from './routes/Resume'

export default function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}