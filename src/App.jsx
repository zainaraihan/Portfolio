import Atas from "./components/Atas"
import PhotoAbout from "./components/PhotoAbout"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './App.css'

import { useState, useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const [main, setMain] = useState(true);
  const [bawah, setBawah] = useState(true);
  const [dis, setDis] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000)

    setTimeout(() => {
      setMain(false)
    }, 5000)

    setTimeout(() => {
      setDis(false)
    }, 4000)

    setTimeout(() => {
      setBawah(false)
    }, 3000)
  })

  return (
    <div style={{ overflowY: main ? ("hidden") : ("visible") }} className="App">

      <div style={{ height: bawah ? ("0%") : ("100%"), top: dis ? ("0%") : ("-100%") }} className="bawah">
      </div>

      <div style={{ display: loading ? ("flex") : ("none"), top: dis ? ("0%") : ("-100%") }} className="loading">
        <img src="/z.gif" alt="" />
      </div>

      <div className="main">
        <Atas />
        <PhotoAbout />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
