import '../Portfolio/index.css'
import { useState, useEffect } from 'react';

const Portfolio = () => {
    const [gray, setGray] = useState("grayscale(1)");
    const grays = "grayscale(0)";
    const [ckc, setCkc] = useState(true)
    const [scrl, setScrl] = useState("rgb(172, 172, 172)");
    const [brl, setBrl] = useState("blur(0px)");

    const handleEnter = () => {
        setGray("grayscale(0)");
        setScrl("#BDFF00")
        setBrl("blur(25px)")
    }
    const handleLeave = () => {
        setGray("grayscale(1)");
        setScrl("rgb(172, 172, 172)")
        setBrl("blur(0px)");
    }

    const [gray2, setGray2] = useState("grayscale(1)");
    const grays2 = "grayscale(0)";
    const [scrl2, setScrl2] = useState("rgb(172, 172, 172)");
    const [brl2, setBrl2] = useState("blur(0px)");

    const handleEnter2 = () => {
        setGray2("grayscale(0)");
        setScrl2("#BDFF00")
        setBrl2("blur(25px)")
    }
    const handleLeave2 = () => {
        setGray2("grayscale(1)");
        setScrl2("rgb(172, 172, 172)")
        setBrl2("blur(0px)");
    }

    const [wdth, setWdth] = useState(window.innerWidth);
    const handleResize = () => {
        setWdth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        if (wdth < 769) {
            setCkc(false)
        } else (
            setCkc(true)
        )
    })

    return (
        <div className="Portfolio">
            <div className="value Frontend">
                <div className="main mainFrontend">
                    <div className="label labelFrontend">
                        <p className='lab'>FRONTEND &#123;DEV&#125;</p>
                        <div className='scroll'>
                            <div className='scroll_t'>
                                <p style={{
                                    color: scrl,
                                    WebkitFilter: brl
                                }}>Frontend</p>
                            </div>
                            <div className='scroll_t scroll_t2'>
                                <p style={{
                                    color: scrl,
                                    WebkitFilter: brl
                                }}>Frontend</p>
                            </div>
                        </div>
                    </div>
                    <div id="work" className="isi isiFrontend">
                        <a target={"_blank"} href='https://ealquran.netlify.app/' className="f f1 f1Frontend">
                            <div className="frame frame1 frame1Frontend">
                                <div
                                    onMouseEnter={handleEnter}
                                    onMouseLeave={handleLeave}
                                    style={{ filter: ckc ? (gray) : (grays) }}
                                    className='frameImg frameImg1'>
                                    <img src="/assets/Portfolio/Frontend/alQuran.png" alt="" />
                                </div>
                                <div className='frameText frameText1'>
                                    <div className="textHeader">
                                        <div className="headerArrow">
                                            <img src="/assets/Portfolio/arrow.png" alt="" />
                                        </div>
                                        <div className='pHeader'>E Al-Quran</div>
                                    </div>
                                    <p className='textDetail'>
                                        /ReactJS /Api /Gsap
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="value Gd">
                <div className="main mainGd">
                    <div className="label labelGd">
                        <p className='lab'>GRAPHIC DESIGN</p>
                        <div className='scroll'>
                            <div className='scroll_t'>
                                <p style={{
                                    color: scrl2,
                                    WebkitFilter: brl2
                                }}>GraphicDesign</p>
                            </div>
                            <div className='scroll_t scroll_t2'>
                                <p style={{
                                    color: scrl2,
                                    WebkitFilter: brl2
                                }}>GraphicDesign</p>
                            </div>
                        </div>
                    </div>
                    <div className="isi isiGd">
                        <div className="f f1 f1Gd">
                            <a href="/sia" className="frame frame1 frame1Gd">
                                <div
                                    onMouseEnter={handleEnter2}
                                    onMouseLeave={handleLeave2}
                                    style={{ filter: ckc ? (gray2) : (grays2) }}
                                    className='frameImg frameImg1'>
                                    <img src="/assets/Portfolio/Graphic/GD1.png" alt="" />
                                </div>
                                <div className='frameText frameText1'>
                                    <div className="textHeader">
                                        <div className="headerArrow">
                                            <img src="/assets/Portfolio/arrow.png" alt="" />
                                        </div>
                                        <p className='pHeader'>SIA The Label</p>
                                    </div>
                                    <p className='textDetail'>
                                        /Logo /Brand
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="f f1 f1Gd">
                            <a href="/gaming" className="frame frame1 frame1Gd">
                                <div
                                    onMouseEnter={handleEnter2}
                                    onMouseLeave={handleLeave2}
                                    style={{ filter: ckc ? (gray2) : (grays2) }}
                                    className='frameImg frameImg1'>
                                    <img src="/assets/Portfolio/Graphic/Gaming/Header.png" alt="" />
                                </div>
                                <div className='frameText frameText1'>
                                    <div className="textHeader">
                                        <div className="headerArrow">
                                            <img src="/assets/Portfolio/arrow.png" alt="" />
                                        </div>
                                        <p className='pHeader'>Gamingghype</p>
                                    </div>
                                    <p className='textDetail'>
                                        /Logo /SocialMedia
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;