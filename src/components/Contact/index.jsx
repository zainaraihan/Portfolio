import "../Contact/index.css"
import { useEffect, useState } from "react";

const Contact = () => {
    const [size, setSize] = useState("5.93rem");
    const [brl, setBrl] = useState("blur(0px)");
    const [crl, setCrl] = useState("#BDFF00");
    const [brl2, setBrl2] = useState("blur(0px)");
    const [crl2, setCrl2] = useState("#BDFF00");
    const [brl3, setBrl3] = useState("blur(0px)");
    const [crl3, setCrl3] = useState("#BDFF00");
    const [brl4, setBrl4] = useState("blur(0px)");
    const [crl4, setCrl4] = useState("#BDFF00");
    const [brl5, setBrl5] = useState("blur(0px)");
    const [crl5, setCrl5] = useState("#BDFF00");
    const [ltr, setLtr] = useState("0px");
    const [rttl, setRttl] = useState("rotate(0deg)");
    const [rttr, setRttr] = useState("rotate(0deg)");
    const [rttl2, setRttl2] = useState("rotate(0deg)");
    const [rttr2, setRttr2] = useState("rotate(0deg)");
    const [rttc, setRttc] = useState("rotate(0deg)");
    const [rttl3, setRttl3] = useState("rotate(0deg)");
    const [rttr3, setRttr3] = useState("rotate(0deg)");
    const [rttc2, setRttc2] = useState("rotate(0deg)");
    const [rttl4, setRttl4] = useState("rotate(0deg)");
    const [rttr4, setRttr4] = useState("rotate(0deg)");
    const [rttc3, setRttc3] = useState("rotate(0deg)");
    const [width, setWidth] = useState('\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0');
    const [windowWidth, setWindowWidth] = useState("window.innerWidth");

    useEffect(() => {
        const handleWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowWidth);

        if (windowWidth < 1200) {
            setWidth("");
        } else (
            setWidth("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0")
        )

        return () => {
            window.removeEventListener('resize', handleWindowWidth)
        }
    })

    const enter = () => {
        setSize("7.5rem");
        setBrl("blur(8px)");
        setCrl("rgb(172, 172, 172)");
        setBrl2("blur(8px)");
        setCrl2("rgb(172, 172, 172)");
        setBrl4("blur(8px)");
        setCrl4("rgb(172, 172, 172)");
        setLtr("15px")
        setRttl("rotate(13deg)");
        setRttr("rotate(-13deg)");
    }

    const leave = () => {
        setSize("5.93rem");
        setBrl("blur(0px)");
        setCrl("#BDFF00");
        setBrl2("blur(0px)");
        setCrl2("#BDFF00");
        setBrl4("blur(0px)");
        setCrl4("#BDFF00");
        setLtr("0px")
        setRttl("rotate(0deg)");
        setRttr("rotate(0deg)");
    }

    const [emSize, setEmSize] = useState("0px");

    const emEnter = () => {
        setEmSize("2.5rem")
        setBrl("blur(8px)");
        setCrl("rgb(172, 172, 172)");
        setBrl2("blur(8px)");
        setCrl2("rgb(172, 172, 172)");
        setBrl3("blur(8px)");
        setCrl3("rgb(172, 172, 172)");
        setBrl5("blur(8px)");
        setCrl5("rgb(172, 172, 172)");
        setRttl2("rotate(10deg)");
        setRttr2("rotate(-10deg)");
        setRttc("rotate(360deg)");
    }

    const emLeave = () => {
        setEmSize("0px")
        setBrl("blur(0px)");
        setCrl("#BDFF00");
        setBrl2("blur(0px)");
        setCrl2("#BDFF00");
        setBrl3("blur(0px)");
        setCrl3("#BDFF00");
        setBrl5("blur(0px)");
        setCrl5("#BDFF00");
        setRttl2("rotate(0deg)");
        setRttr2("rotate(0deg)");
        setRttc("rotate(0deg)");
    }

    const [emSize2, setEmSize2] = useState("0px");

    const emEnter2 = () => {
        setEmSize2("2.5rem")
        setBrl("blur(8px)");
        setCrl("rgb(172, 172, 172)");
        setBrl4("blur(8px)");
        setCrl4("rgb(172, 172, 172)");
        setBrl3("blur(8px)");
        setCrl3("rgb(172, 172, 172)");
        setBrl5("blur(8px)");
        setCrl5("rgb(172, 172, 172)");
        setRttl3("rotate(10deg)");
        setRttr3("rotate(-10deg)");
        setRttc2("rotate(360deg)");
    }

    const emLeave2 = () => {
        setEmSize2("0px")
        setBrl("blur(0px)");
        setCrl("#BDFF00");
        setBrl4("blur(0px)");
        setCrl4("#BDFF00");
        setBrl3("blur(0px)");
        setCrl3("#BDFF00");
        setBrl5("blur(0px)");
        setCrl5("#BDFF00");
        setRttl3("rotate(0)");
        setRttr3("rotate(0)");
        setRttc2("rotate(0)");
    }

    const emEnter3 = () => {
        setBrl("blur(8px)");
        setCrl("rgb(172, 172, 172)");
        setBrl4("blur(8px)");
        setCrl4("rgb(172, 172, 172)");
        setBrl3("blur(8px)");
        setCrl3("rgb(172, 172, 172)");
        setBrl2("blur(8px)");
        setCrl2("rgb(172, 172, 172)");
        setRttl4("rotate(10deg)");
        setRttr4("rotate(-10deg)");
        setRttc3("rotate(360deg)");

    }
    const emLeave3 = () => {
        setBrl("blur(0px)");
        setCrl("#BDFF00");
        setBrl4("blur(0px)");
        setCrl4("#BDFF00");
        setBrl3("blur(0px)");
        setCrl3("#BDFF00");
        setBrl2("blur(0px)");
        setCrl2("#BDFF00");
        setRttl4("rotate(0)");
        setRttr4("rotate(0)");
        setRttc3("rotate(0)");
    }



    return (
        <div id="contact" className="Contact">
            <div className="mainContact">
                <p className="pContact" style={{
                    WebkitFilter: brl,
                    color: crl
                }}>
                    ZAIN ARAIHAN FRONTEND DEV. & CREATIVE DESIGNER
                </p>
                <div
                    style={{ fontSize: size }}
                    onMouseLeave={leave}
                    onMouseEnter={enter}
                    className="number">
                    <a style={{
                        WebkitFilter: brl3,
                        color: crl3,
                        letterSpacing: ltr
                    }}
                        target={"_blank"} href="mailto:zainarhn@gmail.com">
                        <div
                            style={{ display: "flex" }}>
                            <span style={{ display: "block", transform: rttl }}>z</span>
                            <span style={{ display: "block", transform: rttr }}>a</span>
                            <span style={{ display: "block", transform: rttl }}>i</span>
                            <span style={{ display: "block", transform: rttr }}>n</span>
                            <span style={{ display: "block", transform: rttl }}>a</span>
                            <span style={{ display: "block", transform: rttr }}>r</span>
                            <span style={{ display: "block", transform: rttl }}>h</span>
                            <span style={{ display: "block", transform: rttr }}>n</span>
                            <span style={{ display: "block", transform: rttl }}>@</span>
                            <span style={{ display: "block", transform: rttr }}>g</span>
                            <span style={{ display: "block", transform: rttl }}>m</span>
                            <span style={{ display: "block", transform: rttr }}>a</span>
                            <span style={{ display: "block", transform: rttl }}>i</span>
                            <span style={{ display: "block", transform: rttr }}>l</span>
                            <span style={{ display: "block", transform: rttl }}>.</span>
                            <span style={{ display: "block", transform: rttr }}>c</span>
                            <span style={{ display: "block", transform: rttl }}>o</span>
                            <span style={{ display: "block", transform: rttr }}>m</span>
                        </div>
                    </a>
                </div>
                <div className="socmed">
                    <div
                        onMouseEnter={emEnter3}
                        onMouseLeave={emLeave3}
                        className="EmailSocmed">
                        <a
                            target={"_blank"}
                            style={{
                                color: crl5,
                                WebkitFilter: brl5
                            }}
                            href="mailto:zainarhn@gmail.com">
                            <div style={{ display: "flex" }}>
                                <span style={{ display: "block", transform: rttl4 }}>E</span>
                                <span style={{ display: "block", transform: rttr4 }}>M</span>
                                <span style={{ display: "block", transform: rttl4 }}>A</span>
                                <span style={{ display: "block", transform: rttr4 }}>I</span>
                                <span style={{ display: "block", transform: rttr4 }}>L</span>
                                <span style={{ display: "block" }}>-</span>
                                <span className="last" style={{ display: "block", transform: rttc3 }}>&#62;</span>
                            </div>
                        </a>
                    </div>
                    <div
                        onMouseEnter={emEnter}
                        onMouseLeave={emLeave}
                        className="githubSocmed">
                        <a
                            target={"_blank"}
                            style={{
                                color: crl4,
                                WebkitFilter: brl4
                            }}
                            href="https://www.behance.net/zainarhn">
                            <div style={{ display: "flex" }}>
                                <span style={{ display: "block", transform: rttl2 }}>B</span>
                                <span style={{ display: "block", transform: rttr2 }}>H</span>
                                <span style={{ display: "block", transform: rttl2 }}>N</span>
                                <span style={{ display: "block", transform: rttr2 }}>C</span>
                                <span style={{ display: "block" }}>-</span>
                                <span className="last" style={{ display: "block", transform: rttc }}>&#62;</span>
                            </div>
                        </a>
                    </div>
                    <div
                        onMouseEnter={emEnter2}
                        onMouseLeave={emLeave2}
                        className="InstaSocmed">
                        <a
                            target={"_blank"}
                            style={{
                                color: crl2,
                                WebkitFilter: brl2
                            }}
                            href="https://www.github.com/zainarhn">
                            <div style={{ display: "flex" }}>
                                <span style={{ display: "block", transform: rttl3 }}>G</span>
                                <span style={{ display: "block", transform: rttr3 }}>T</span>
                                <span style={{ display: "block", transform: rttl3 }}>H</span>
                                <span style={{ display: "block", transform: rttr3 }}>B</span>
                                <span style={{ display: "block" }}>-</span>
                                <span className="last" style={{ display: "block", transform: rttc2 }}>&#62;</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;