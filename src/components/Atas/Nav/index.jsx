import "./index.css"
import { useState } from "react";

const Nav = () => {

    const tagWork = () => {
        const work = document.getElementById("work")
        work.scrollIntoView({
            behavior: 'smooth'
        })
    }
    const tagContact = () => {
        const contact = document.getElementById("contact")
        contact.scrollIntoView({
            behavior: 'smooth'
        })
    }
    const tagAbout = () => {
        const about = document.getElementById("about");
        about.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div className="Nav">
            <div className="mainNav">
                <a href="/" className="nama">Zain Araihan</a>
                <div className="list">
                    <div onClick={tagWork}>Work</div>
                    <div onClick={tagContact}>Contact</div>
                    <div onClick={tagAbout}>About</div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
