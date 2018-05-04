import React from 'react';
import './Footer.css';

const Footer = (props) => (
	<footer className="footer">
		<div className="container">
			<div className="row">
				<div className="col-6 col-m-4 col-s-12">
					<ul className="footer__links">
						<li className="header_sml_brownish">Follow Spacex</li>
						<li className="header_sml_cool">Twitter</li>
						<li className="header_sml_cool">Youtube</li>
						<li className="header_sml_cool">Flickr</li>
						<li className="header_sml_cool">Instagram</li>
					</ul>
				</div>
				<div className="col-6 col-m-8 col-s-12">
					<h1 className="header_sml_brownish header_sml_brownish_right">2018 space exploration technologies corp.</h1>
				</div>
			</div>
		</div>
	</footer>

);

export default Footer;
