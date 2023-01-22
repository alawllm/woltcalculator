import React, { ReactElement } from 'react';
import './Navbar.css';

const Navbar: React.FC = (): ReactElement => {
    return (
        <div className='navbar'>
            <span>
                <p> Hello I am navbar</p>
            </span>

            <span>
                <ul>
                    <li>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                        >
                            Link1
                        </a>
                    </li>
                    <li>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                        >
                            Link2
                        </a>
                    </li>
                    <li>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                        >
                            Link3
                        </a>
                    </li>
                </ul>
            </span>
        </div>
    );
}

export default Navbar