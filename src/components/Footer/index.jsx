import "../Footer/index.css"
import { useEffect, useState } from "react";

const Footer = () => {

    const [str, setStr] = useState();
    const [time, setTime] = useState(Date.now())
    const [kota, setKota] = useState("")


    const jam = () => {
        const waktu = new Date();
        const sekarang = waktu.toLocaleTimeString();
        const dot = sekarang.replace(/\:/g, ".");
        setStr(dot)
    }

    useEffect(() => {
        const interval = setInterval(() => setTime(Date()));
        return () => {
            clearInterval(interval);
            time;
            jam()
        }

    })

    useEffect(() => {
        fetch("https://extreme-ip-lookup.com/json/?key=SgLQm6A7wcUea8pFH7HW")
            .then(res => res.json())
            .then(response => {
                setKota(response.city.toUpperCase())
            })
    }, [])

    const toTop = () => {
        const atas = document.getElementById("atasDiv");
        atas.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div className="Footer">
            <div id="work" className="mainFooter">
                <div className="sosmed">
                    <a
                        target={"_blank"}
                        href="https://www.instagram.com/zainaraihann"
                        className="behance">
                        Instagram</a>
                    <a
                        target={"_blank"}
                        href="https://www.linkedin.com/in/zainarhn"
                        className="github">
                        Linkedin</a>
                </div>
                <p className="time">{kota + " " + str}</p>
                <div className="right">
                    <div
                        style={{ cursor: "pointer" }}
                        onClick={toTop}
                        className="top">
                        <p>Back to Top <img src="/assets/Portfolio/arrowfooter.png" alt="" /></p>
                    </div>
                    <p className="copyright">© Zain 2025.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;