import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component {
    render() {
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
}