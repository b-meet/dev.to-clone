import React from "react";
import { FaLeaf } from "react-icons/fa";

function Footer() {
	//chimpu anna
	return (
		<article className='outside-footer-container'>
			<section className='footer-container'>
				<a href=''>
					DEV Community – A constructive and inclusive social network for
					software developers. With you every step of your journey.
				</a>
				<div className='footer-last-paragraphs-container'>
					<p>
						<a href=''>Built on Forem</a> — the <a href=''>open source</a>{" "}
						software that powers <a href=''>DEV</a> and other inclusive
						communities.
					</p>
					<p>
						Made with love and <a href=''>Ruby on Rails</a>. DEV Community ©
						2016 - 2021.
					</p>
				</div>
				<a title='Forem Link' href='' className='forem-link-logo'>
					<FaLeaf />
				</a>
			</section>
		</article>
	);
}

export default Footer;
