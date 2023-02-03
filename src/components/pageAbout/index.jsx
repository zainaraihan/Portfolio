import Nav from "../Atas/Nav/index"
import './index.css'

const About = () => {
    return (
        <div className="About">
            <Nav />
            <div className="isiAbout">
                <div className="aboutMe">
                    <img src="/profile.jpeg" alt="" />
                    <div className="paragraph">
                        <p>About <span>ME.</span></p>
                        <p className="txt">
                            As a talented Graphic Designer and Frontend Developer, I have a passion for combining aesthetics with functionality to bring your brand to life. With an eye for detail and a drive to exceed expectations, I work closely with clients to understand their unique needs and bring their vision to fruition. Whether it's creating a stunning logo, designing a beautiful website, or developing a custom web application, I have the skills and experience to deliver the results you're looking for. Let's work together to make your brand shine.
                        </p>
                    </div>
                    <div className="CTA">
                        <div className="behance">
                            <a href="www.behance.net/zainarhn">BHNC -&#62;</a>
                        </div>
                        <div className="email">
                            <a href="mailto:zainarhn@gmail.com">Email</a>
                        </div>
                        <div className="github">
                            <a href="www.github.com/zainarhn">GTHB -&#62;</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Skills">
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
                            <p>Graphic Design</p>
                            <div className="isiGd">
                                <p>Logo Design</p>
                                <p>Social Media Poster</p>
                                <p>Motion Graphic</p>
                                <p>Branding</p>
                                <p>UI Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="tools">
                        <div>
                            <p>TOOLS</p>
                            <div className="isiTools">
                                <p>Javascript</p>
                                <p>React Js</p>
                                <p>Vanilla CSS</p>
                                <p>GSAP</p>
                                <p>Node Js</p>
                                <p>Mongo DB</p>
                                <p>Figma</p>
                                <p>Photoshop</p>
                                <p>Illustrator</p>
                                <p>After Effect</p>
                                <p>Cinema 4D</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;