import React, { ReactElement } from 'react';
import './Navbar.css';

const Navbar: React.FC = (): ReactElement => {
    return (
        <div className='navbar'>
            <span>
                <p> Wolt</p>

                <a
                    className="navbar-link"
                    href="https://reactjs.org"
                >
                    Link1
                </a>
                <a
                    className="navbar-link"
                    href="https://reactjs.org"
                >
                    Link2
                </a>

            </span>
        </div>
    );
}

export default Navbar