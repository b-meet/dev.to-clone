import React from "react";
import { FaDev } from "react-icons/fa";
import { RiNotification4Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useState } from "react";

const Navigation = () => {
	const [showDropDown, setShowDropDown] = useState(false);

	return (
		<nav className='nav-container'>
			<ul className='leftside-nav'>
				<IconContext.Provider value={{ className: "dev-logo" }}>
					<li>
						<FaDev />
					</li>
				</IconContext.Provider>
				<li>
					<form className='input-container'>
						<input
							type='text'
							id='searchbar'
							name='searchbar'
							placeholder='Search...'
						/>
						<IconContext.Provider value={{ className: "search-logo" }}>
							<button type='button' className='search-btn'>
								<FiSearch />
							</button>
						</IconContext.Provider>
					</form>
				</li>
			</ul>
			<ul className='rightside-nav'>
				<li>
					<button type='button' className='post-btn'>
						create post
					</button>
				</li>
				<li className='notification'>
					<RiNotification4Line />
				</li>
				<li className='li-img-container'>
					<div
						className='img-container'
						onClick={() => setShowDropDown(!showDropDown)}
					>
						<img
							src=' https://res.cloudinary.com/practicaldev/image/fetch/s--y06-8rMd--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/583243/b0929333-dcf7-48ad-a59d-0d1acc98321f.jpg'
							alt='profile'
							className='profile-picture'
						/>
					</div>
					{showDropDown && (
						<ul className='drop-down'>
							<li className='username-li'>
								<h4>b-meet</h4>
								<p>@meetbhalodiya</p>
							</li>
							<hr />
							<li>dashboard</li>
							<li>create post</li>
							<li>reading list</li>
							<li>settings</li>
							<hr />
							<li>signout</li>
						</ul>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
