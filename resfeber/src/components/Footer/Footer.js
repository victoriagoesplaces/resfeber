import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div>
            <footer className="page-footer ">
                <div className="container">
                    <div className="row">
                        {/* <div className="col l6 s12"> */}
                            <h5 className="white-text center">Resfeber</h5>
                        </div>
                    {/* </div> */}
                </div>
                <div className="footer-copyright">
                    <div className="container">
                     © 2018 Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/victoriagoesplaces">GitHub</a>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;