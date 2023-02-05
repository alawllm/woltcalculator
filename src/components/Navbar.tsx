import React, { ReactElement } from 'react';
import './Navbar.css';

const Navbar: React.FC = (): ReactElement => {
    return (
        <div className='navbar'>
            <span>
                WOLT DELIVERY FEE CALCULATOR
            </span>
        </div>
    );
}

export default Navbar