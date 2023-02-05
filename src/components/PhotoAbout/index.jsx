import "../PhotoAbout/index.css"

const PhotoAbout = () => {
    return (
        <div id="about" className="PhotoAbout">
            <div className="mainPhotoAbout">
                <div className="card photo">
                </div>
                <div className="card about">
                    <div className="mainAbout">
                        <div className="isiAbout"><p>About Me</p></div>
                        <div className="isiDetail">
                            <div className="detailParagraph">
                                <p>
                                    As a creative developer, I bring a unique blend of design and technical expertise to every project. With 3 years of experience as a graphic designer and 1 year as a frontend developer, I have honed my skills in both aesthetics and functionality..
                                </p>
                            </div>
                            <div className="detailLink">
                                <div className="image"></div>
                                <a href="about" className="arrow">
                                    <img src="/arrow.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoAbout;