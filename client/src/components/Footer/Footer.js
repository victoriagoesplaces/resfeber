import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div>
            <footer className="page-footer ">
                <div className="container">
                    <div className="row">
                        <h5 className="center">Resfeber</h5>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2018 Resfeber Copyright
                    <a className="grey-text text-lighten-4 right" href="https://github.com/victoriagoesplaces">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;