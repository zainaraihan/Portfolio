import Nav from "../Nav"
import "../GD/index.css"
import Footer from "../../Footer"

const GD = ({ header, image, nama, services, atas, bawah }) => {
    console.log(header)
    return (
        <div className="gd">
            <Nav />
            <div className="header">
                <img className="isiHeader" src={header} alt="" />
            </div>
            <div className="info">
                <div className="left">
                    <div className="namePro">
                        <p className="name">{nama}</p>
                    </div>
                    <div className="services">
                        <p className="hServices">SERVICES</p>
                        <div className="isiServices">
                            {services}
                        </div>
                    </div>
                </div>

                <div className="project">
                    <p className="hProject">PROJECT INFORMATION</p>
                    <div className="bodyProject">
                        <p className="atasProject">
                            {atas}
                        </p>
                        <p className="bawahProject">
                            {bawah}
                        </p>
                    </div>
                </div>
            </div>
            <div className="isiImage mrgn">
                {image}
            </div>
            <div className="zGif">
                <img src="/z.gif" alt="" />
            </div>
            <Footer />
        </div>
    );
}

export default GD;