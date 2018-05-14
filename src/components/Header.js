import React from 'react';
import './Header.css';
import '../assets/logo.png';

class Header extends React.Component {
		render () {
			return (
				<header className="section-header">
					<span className="section-header__back" onClick={this.props.onClick}><i className="fa fa-long-arrow-left"></i>go back</span>
					<a href="#" className="section-header__logo">logo</a>
				</header>
			);
		}
}
	

export default Header;