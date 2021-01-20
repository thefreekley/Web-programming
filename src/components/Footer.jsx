import React from 'react';
import logo from "../accets/img/logo.png"
import "../accets/css/components-style/footer.css"
function Footer(props) {
    return (
        <footer className="footer">

            <a className="header__title transition" href="/">
                WORLD OF PRINTERS
                <img alt="" className="logo" src={logo}/>
            </a>
            <p className="footer-text">2020 TFK ©Copyright all rights reserved</p>


        </footer>
    );
}

export default Footer;