import "../PhotoAbout/index.css"

const PhotoAbout = () => {
    return (
        <div className="PhotoAbout">
            <div className="mainPhotoAbout">
                <div className="card photo">
                </div>
                <div className="card about">
                    <div className="mainAbout">
                        <div className="isiAbout"><p>About Me</p></div>
                        <div className="isiDetail">
                            <div className="detailParagraph">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisl ac neque iaculis lobortis ut in nulla. Mauris rutrum lacinia urna. Praesent euismod volutpat accumsan. Praesent cursus faucibus eros, at mollis dolor fringilla ut. Mauris consequat sagittis odio convallis. Sed ac nibh nec justo ultrices ultrices sed sed ante. Sed ac sollicitudin leo.
                                </p>
                            </div>
                            <div className="detailLink">
                                <div className="image"></div>
                                <a href="#about" className="arrow">
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