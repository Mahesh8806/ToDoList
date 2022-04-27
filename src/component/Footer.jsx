import React from "react";
import '../App.css'


const cYear = new Date().getFullYear();

function Footer(){
    return  <footer>
                <p>CopyRight @ {cYear}</p>
            </footer>
}

export default Footer;