import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="row">
                <div className="col-3 offset-1">
                    <img className="vertical-center logo" src="generic-logo.png" alt="image_3" />
                </div>
                <div className="col offset-5 ">
                    <button className="button button-small default">LOG-IN</button>
                    <button className="button button-small primary pill">SIGN UP</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
