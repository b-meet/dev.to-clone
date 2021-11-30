import React from "react";
import {
	FcVideoCall,
	FcHome,
	FcReading,
	FcTodoList,
	FcShop,
	FcLike,
	FcPrivacy,
	FcBusinessContact,
} from "react-icons/fc";
import {
	FaMicrophone,
	FaTags,
	FaLightbulb,
	FaDev,
	FaThumbsUp,
	FaHandPointRight,
	FaTwitter,
	FaFacebookSquare,
	FaGithub,
	FaTwitch,
} from "react-icons/fa";
import { RiInstagramFill, RiSettingsLine } from "react-icons/ri";

const LeftSide = () => {
	return (
		<aside className='complete-leftnav-container'>
			<nav>
				<ul className='main-navigation'>
					<li>
						<a href=''>
							<FcHome />
							<p>home</p>
						</a>
					</li>
					<li>
						<a href=''>
							<FcReading />
							<p>reading list</p>
						</a>
					</li>
					<li>
						<a href=''>
							<FcTodoList />
							<p>listings</p>
						</a>
					</li>
					<li>
						<a href=''>
							<FaMicrophone />
							<p>podcasts</p>
						</a>
					</li>
					<li>
						<a href=''>
							<FcVideoCall />
							<p>videos</p>
						</a>
					</li>
					<li>
						<a href=''>
							<FaTags />
							<p>tags</p>
						</a>
					</li>
					<li>
						<a href=''>
							<FaLightbulb />
							<p>FAQ</p>
						</a>
					</li>
					<li>
						<a href=''>
							<FcShop />
							<p>DEV shop</p>
						</a>
					</li>
					<li>
						<a href=''>
							<FcLike />
							<p>sponsors</p>
						</a>
					</li>
					<li>
						<a href=''>
							<FaDev />
							<p>about</p>
						</a>
					</li>
					<li>
						<a href=''>
							<FcBusinessContact />
							<p>contact</p>
						</a>
					</li>
				</ul>
			</nav>
			<nav className='other-content-container'>
				<h3>Other</h3>
				<ul>
					<li>
						<a href=''>
							<FaThumbsUp />
							<p>code of conduct</p>
						</a>
					</li>
					<li>
						<a href=''>
							<FcPrivacy />
							<p>privacy policy</p>
						</a>
					</li>
					<li>
						<a href=''>
							<FaHandPointRight />
							<p>terms of use</p>
						</a>
					</li>
				</ul>
			</nav>
			<nav>
				<ul className='social-media-list-container'>
					<li>
						<a title='Twitter' href=''>
							<FaTwitter />
						</a>
					</li>
					<li>
						<a title='Facebook' href=''>
							<FaFacebookSquare />
						</a>
					</li>
					<li>
						<a title='Github' href=''>
							<FaGithub />
						</a>
					</li>
					<li>
						<a title='Instagram' href=''>
							<RiInstagramFill />
						</a>
					</li>
					<li>
						<a title='Twitch' href=''>
							<FaTwitch />
						</a>
					</li>
				</ul>
			</nav>
			<nav className='tags'>
				<div>
					<h3>my tags</h3>
					<button title='Customise tag priority' className='settings'>
						<RiSettingsLine />
					</button>
				</div>
				<ul className='tags-list-container'>
					<li>
						<a href=''>#javascript</a>
					</li>
					<li>
						<a href=''>#react</a>
					</li>
					<li>
						<a href=''>#html</a>
					</li>
					<li>
						<a href=''>#css</a>
					</li>
					<li>
						<a href=''>#java</a>
					</li>
					<li>
						<a href=''>#python</a>
					</li>
					<li>
						<a href=''>#rust</a>
					</li>
					<li>
						<a href=''>#angular</a>
					</li>
					<li>
						<a href=''>#vue</a>
					</li>
					<li>
						<a href=''>#webdev</a>
					</li>
				</ul>
			</nav>
			<section className='get-stickers'>
				<a href=''>
					<img
						src='https://cdn.shopify.com/s/files/1/1626/8507/products/Sticker_Collage_2019_1024x1024.png?v=1566402781'
						alt='stickers'
					/>
				</a>
				<h1>
					<a href=''>get your stickers !</a>
				</h1>
			</section>
			<section className='forum'>
				<p>
					DEV runs on 100% open source code known as <a href=''>Forem</a> .
					Contribute to the codebase or host your own!
				</p>
				<p className='list'>Check these out! 👇</p>
				<ul className='last-poster-list-container'>
					<li>
						<a href=''>Main Forem Repo</a>
					</li>
					<li>
						<a href=''> Self-Host Instructions</a>
					</li>
				</ul>
			</section>
		</aside>
	);
};

export default LeftSide;
