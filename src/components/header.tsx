import React from 'react';
import {Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="nav">
            <input type="checkbox" id="nav-check"/>
            <div className="nav-header">
                <div className="nav-title">
                    <img className="img-fluid"
                         src="https://net-demosoledad-gavu0xo8w0ybxpt6g.netdna-ssl.com/soledad-travel-agency-multipurpose/wp-content/uploads/sites/8/2019/10/logo.png"
                         alt="Soledad – Travel Agency" />

                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
                <Link to="//github.io/jo_geek" target="_blank">Github</Link>
                <Link to="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</Link>
                <Link to="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</Link>
                <Link to="https://codepen.io/jo_Geek/" target="_blank">Codepen</Link>
                <Link to="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</Link>
            </div>
        </div>
    )
}