import React, { Component } from 'react';

class Submenu extends Component {
  render() {
    return (
      <ul className="submenu">
        <li className="submenu-item ">
          <a>Our Company</a>
        </li>
        <li className="submenu-item ">
          <a>Our Team</a>
        </li>
        <li className="submenu-item ">
          <a>Our Portfolio</a>
        </li>
      </ul>
    )
  }
}

export default Submenu;