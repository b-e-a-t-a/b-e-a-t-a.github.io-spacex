import React from 'react';
import '../styles/Hero.css';
import '../assets/rocket.png';

const Hero = (props) => (
	<section className="hero">
		<div className="conatiner">
			<div className="row">
				<div className="col-12">
					<h3 className="hero__header_sml_semibold_big">Mission Links</h3>
					<button className="hero__button">Reddit Campaign </button>
					<button className="hero__button">Presskit</button>
					<button className="hero__button">Mission video</button>
				</div>
			</div>

		</div>
	</section>

);

export default Hero;