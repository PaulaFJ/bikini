import React, { Component } from 'react';
import Submenu from './submenu';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAboutMenu: false
        };
    }

    handleHover = () => {
        this.setState({ showAboutMenu: true });
    };

    handleLeave = () => {
        this.setState({ showAboutMenu: false });
    };

    render() {
        return (
            <nav className="navbar">
                <ul className="menu">
                    <li className="item"> <a>Home</a> </li>

                    <li className="item" onMouseLeave={this.handleLeave}>
                        <a onMouseEnter={this.handleHover}>About</a>
                        { this.state.showAboutMenu && <Submenu /> }
                    </li>

                    <li className="item"> <a>Contact</a> </li>

                    <li className="item"> <a>Contact</a> </li>

                    <li className="item"> <a>Contact</a> </li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
