import React from "react";

const RightSide = () => {
	return (
		<aside className='rightside-container'>
			<section className='first-forem'>
				<h2>Have you added a ⭐️ to the Forem GitHub repo yet?</h2>
				<button type='button' className='background-less-blue-btn'>
					👉 Forem 👈
				</button>
			</section>
			<section className='second-github-dev'>
				<img
					src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h55ubjdvzm6cazmhz5ra.png'
					alt='GitHub + DEV'
				/>
				<button className='background-less-white-btn'>Stories(70)</button>
				<ul>
					<li>
						<a href=''>Dotnet Outdated - Install and Update</a>
					</li>
					<li>
						<a href=''>GitHub Actions workflow for Go Continuous Integration</a>
					</li>
					<li>
						<a href=''>
							Bulk merge & Approve Github Pull Requests with the Gomerge github
							action!
						</a>
					</li>
					<li>
						<a href=''>
							Build, Test and Deploy your Android Application with GitHub
							Actions
						</a>
					</li>
				</ul>
				<div className='btn-container'>
					<button className='blue-bg-submit-btn' type='submit'>
						submit your project
					</button>
					<button className='grey-bg-btn' type='button'>
						See all post
					</button>
				</div>
			</section>
			<section className='third-listings'>
				<header>
					<h3>Listings</h3>
					<a href=''>See all</a>
				</header>
				<ul>
					<li>
						<a href=''>Web Data Platform - A CMS that accepts data</a>
						<p>products</p>
					</li>
					<li>
						<a href=''>Ebook: MongoDB Practical Mastercalss (50% off)</a>
						<p>products</p>
					</li>
					<li>
						<a href=''>50% - 80% Off Black Friday Sale (last chance)</a>
						<p>education</p>
					</li>
					<li>
						<a href=''>A Better Way to Learn Javascript?</a>
						<p>education</p>
					</li>
				</ul>
				<button type='button' className='background-less-white-btn'>
					create a listings
				</button>
			</section>
			<section>
				<header>
					<h2>#news</h2>
				</header>
				<ul>
					<li>
						<a href=''>
							With free GraphQL tools, StepZen's API management vision begins to
							take form
						</a>
						<p className='para-containing-new'>New</p>
					</li>
					<li>
						<a href=''>The Next Generation of Digital Identity</a>
						<p>6 comments</p>
					</li>
					<li>
						<a href=''>Appwriter's Hacktoberfest '21 Journey</a>
						<p className='para-containing-new'>New</p>
					</li>
				</ul>
			</section>
			<section>
				<header>
					<h2>#help</h2>
				</header>
				<ul>
					<li>
						<a href=''>Express middlewares</a>
						<p className='para-containing-new'>New</p>
					</li>
				</ul>
			</section>
			<section>
				<header>
					<h2>#challenge</h2>
				</header>
				<ul>
					<li>
						<a href=''>Day 74/100 Node.js</a>
						<p className='para-containing-new'>New</p>
					</li>
					<li>
						<a href=''>So you know strings in golang, hun?</a>
						<p className='para-containing-new'>New</p>
					</li>
					<li>
						<a href=''>Advancedm Interview Questions</a>
						<p className='para-containing-new'>New</p>
					</li>
					<li>
						<a href=''>Day 73/100 Project: A Pixel Art Editor</a>
						<p className='para-containing-new'>New</p>
					</li>
				</ul>
			</section>
			<section>
				<header>
					<h2>#meta</h2>
				</header>
				<ul>
					<li>
						<a href=''>Dev.to Writing: 52 Weeks!</a>
						<p>10 comments</p>
					</li>
					<li>
						<a href=''>Dev.to Writing: Reactions</a>
						<p>8 comments</p>
					</li>
					<li>
						<a href=''>How do you use each of the emoji reactions on dev.to?</a>
						<p>15 comments</p>
					</li>
					<li>
						<a href=''>
							Remainder - Join the GitHub Actions Hackathon 2021 on DEV
						</a>
						<p>27 comments</p>
					</li>
				</ul>
			</section>
			<section>
				<header>
					<h2>#watercooler</h2>
				</header>
				<ul>
					<li>
						<a href=''>Interesting C++ bug involving `std::cin` for input.</a>
						<p>4comments</p>
					</li>
					<li>
						<a href=''>
							Creating a cryptocurrency - Creating transactions, mining rewards,
							mint and gas fee
						</a>
						<p>2 comments</p>
					</li>
				</ul>
			</section>
		</aside>
	);
};

export default RightSide;
