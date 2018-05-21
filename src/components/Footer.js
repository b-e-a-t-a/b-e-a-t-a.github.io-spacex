import React from 'react';
import '../styles/Footer.css';

const Footer = (props) => (
	<footer className="page-footer">
		<div className="page-footer__content">
			<div className="page-footer__social">
				<span className="page-footer__social-follow">Follow Spacex
				</span>
				<ul className="page-footer__social-links">
					<li className="page-footer__social-link">Twitter</li>
					<li className="page-footer__social-link">Youtube</li>
					<li className="page-footer__social-link">Flickr</li>
					<li className="page-footer__social-link">Instagram</li>
				</ul>
			</div>
			<div className="page-footer__right">2018 space exploration technologies corp.</div>
		</div>
	</footer>

);

export default Footer;
