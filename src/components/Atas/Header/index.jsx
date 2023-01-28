import "../Header/index.css"

const Header = () => {
    return (
        <div className="Header">
            <div className="mainHeader">
                <div className="textSatu">
                    <p className="felipa">Creative <span className="uncut">Dev.</span></p>
                    <div className="imgSatu igm"></div>
                    <img className="gifz" src="/z.gif" alt="" />
                </div>
                <div className="textDua">
                    <div className="imgDua igm"></div>
                    <p className="felipa">Designer</p>
                </div>
                <div className="textTiga">
                    <img className="gifa" src="/a.gif" alt="" />
                    <p className="uncut">Frontend</p>
                    <div className="imgTiga igm"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;
