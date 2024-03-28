import NavBar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './page/home/Home'
import About from './page/about/about'
import Service from './page/service/Service'
import PracticeEffect from './components/navbar/practiceEffect'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <PracticeEffect/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
