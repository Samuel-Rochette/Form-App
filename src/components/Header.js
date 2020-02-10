import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="row">
                <div className="col-2 offset-1">
                    <p className="logo">GENERIC LOGO <sup>TM</sup></p>
                </div>
                <div className="col offset-6">
                    <button className="button button-small default">LOG-IN</button>
                    <button className="button button-small primary pill">SIGN UP</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
