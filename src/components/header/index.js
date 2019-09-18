import React from 'react';
import './main.scss';
import Menu from './menu';

const Header = () => (
	<header id="main-header">
		<div className="menu-container"><Menu /></div>
	</header>
);

export default Header;