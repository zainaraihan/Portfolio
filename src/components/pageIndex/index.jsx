import Atas from "../Atas"
import PhotoAbout from "../PhotoAbout"
import Portfolio from "../Portfolio"
import Contact from "../Contact"
import Footer from "../Footer"
import './index.css'

import { useState, useEffect } from "react"

function Index() {
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
        <div style={{ overflowY: main ? ("hidden") : ("visible") }} className="Index">
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

export default Index
