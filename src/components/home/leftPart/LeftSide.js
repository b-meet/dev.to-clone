import React from "react";
import { FcPrivacy } from "react-icons/fc";
import {
	FaThumbsUp,
	FaHandPointRight,
	FaTwitter,
	FaFacebookSquare,
	FaGithub,
	FaTwitch,
} from "react-icons/fa";
import { RiInstagramFill, RiSettingsLine } from "react-icons/ri";
import Data from "./navigationData";
import { tags } from "./navigationData";

const LeftSide = () => {
	return (
		<aside className='complete-leftnav-container'>
			<nav>
				<ul className='main-navigation'>
					{Data.map((item) => {
						return (
							<li>
								<a href={item.link}>
									{item.icon}
									<p>{item.text}</p>
								</a>
							</li>
						);
					})}
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
					{tags.map((tag) => {
						return (
							<li>
								<a href={tag.link}>{tag.tagName}</a>
							</li>
						);
					})}
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
