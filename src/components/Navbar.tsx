import React, { ReactElement } from 'react';
import './Navbar.css';

const Navbar: React.FC = (): ReactElement => {
    return (
        <div className='navbar'>
            <span>

                <a
                    className="navbar-link"
                    href="https://reactjs.org"
                >
                    aw email
                </a>

            </span>
        </div>
    );
}

export default Navbar