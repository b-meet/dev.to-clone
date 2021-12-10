import React from "react";

const Center = () => {
	return (
		<section className='site-center'>
			<header>
				<nav className='central-nav'>
					<ul>
						<li>
							<a href=''>Relavent</a>
						</li>
						<li>
							<a href=''>Latest</a>
						</li>
						<li>
							<a href=''>Top</a>
						</li>
					</ul>
				</nav>
			</header>
			<main className='article-container'>
				<article className='article-content-container'>
					<header className='title-date-profile'>
						<img src='' alt='profile' className='profile' />
						<h4 className='title'></h4>
						<p className='date'>
							<time></time>
						</p>
					</header>
					<main className='article-info'>
						<h2 className='name-of-article'></h2>
						<ul className='related-tags'>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</main>
					<footer className='interation-container'>
						<p></p>
						<p></p>
						<time></time>
						<p></p>
					</footer>
				</article>
			</main>
		</section>
	);
};

export default Center;
