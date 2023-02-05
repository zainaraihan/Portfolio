import Nav from "../Atas/Nav/index"
import './index.css'

const About = () => {
    return (
        <div className="About">
            <div className="aboutt">
                <div className="main">
                    <div className="isiAbout">
                        <div className="aboutMe">
                            <div className="img">
                            </div>
                            <div className="desc">
                                <div className="paragraph">
                                    <p className="txtAtas">About <span>ME.</span></p>
                                    <p className="txt">
                                        As a talented Graphic Designer and Frontend Developer, I have a passion for combining aesthetics with functionality to bring your brand to life. With an eye for detail and a drive to exceed expectations, I work closely with clients to understand their unique needs and bring their vision to fruition. Whether it's creating a stunning logo, designing a beautiful website, or developing a custom web application, I have the skills and experience to deliver the results you're looking for. Let's work together to make your brand shine.
                                    </p>
                                </div>
                                <div className="CTA">
                                    <div className="behance">
                                        <a target={"_blank"} href="www.behance.net/zainarhn">BHNC -&#62;</a>
                                    </div>
                                    <div className="eemmaa">
                                        <div className="kotak"></div>
                                        <div className="email">
                                            <a
                                                target={"_blank"}
                                                href="mailto:zainarhn@gmail.com">EMAIL</a>
                                        </div>
                                    </div>
                                    <div className="github">
                                        <a target={"_blank"} href="www.github.com/zainarhn">&#60;- GTHB</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills">
                <div className="isiSkills">
                    <div className="skillAtas">
                        <div className="dev">
                            <p>WEB DEVELOPER</p>
                            <div className="isiDev">
                                <p>Frontend Website</p>
                                <p>Interactive Website</p>
                                <p>Figma to Website</p>
                            </div>
                        </div>
                        <div className="gd">
                            <p>GRAPHIC DESIGN</p>
                            <div className="isiGd">
                                <div className="satu">
                                    <p>Logo Design</p>
                                    <p>Social Media Poster</p>
                                    <p>Motion Graphic</p>
                                </div>
                                <div className="dua">
                                    <p>Branding</p>
                                    <p>UI Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skillBawah">
                        <div className="isiSkillBawah">
                            <p className="tools">TOOLS</p>
                            <div className="isiTools">
                                <div className="satu">
                                    <p>Javascript</p>
                                    <p>React Js</p>
                                    <p>Vanilla CSS</p>
                                </div>
                                <div className="dua">
                                    <p>GSAP</p>
                                    <p>Node Js</p>
                                    <p>Mongo DB</p>
                                </div>
                                <div className="tiga">
                                    <p>Figma</p>
                                    <p>Photoshop</p>
                                    <p>Illustrator</p>
                                </div>
                                <div className="empat">
                                    <p>After Effect</p>
                                    <p>Cinema 4D</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;