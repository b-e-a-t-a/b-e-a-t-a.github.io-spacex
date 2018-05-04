import React from 'react';
import './Header.css';
import '../assets/logo.png';

const Header = (props) => (
	<header className="header">
		<span className="header__back"><i className="fa fa-long-arrow-left"></i>go back</span>
		<a href="#" className="header__logo">logo</a>
	</header>

);

export default Header;