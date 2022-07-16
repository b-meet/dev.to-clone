import React from "react";
import { RiHeart2Line } from "react-icons/ri";
import { GoComment } from "react-icons/go";

const Article = ({ articles }) => {
	return (
		<section className='content-container'>
			{articles.map((info) => {
				return (
					<article className='article-info' key={info.id}>
						<img
							className='cover-image'
							src={info.social_image}
							alt='cover img of the post'
						/>
						<section>
							<header>
								<img src={info.user.profile_image} alt='profile' />
								<div className='username-publish-date'>
									<h5>{info.user.name}</h5>
									<p>
										<span>published on {info.readable_publish_date}</span>
									</p>
								</div>
							</header>
							<main className='main-title-tags'>
								<h3>
									<a className='title' href=''>
										{info.title}
									</a>
								</h3>
								<ul>
									{info.tag_list.map((tag, index) => {
										return (
											<li key={index}>
												<a href=''># {tag}</a>{" "}
											</li>
										);
									})}
								</ul>
							</main>
							<footer className='reactions'>
								<div>
									<button type='button'>
										<RiHeart2Line
											style={{
												fontSize: "1.2rem",
												marginRight: "0.4rem",
												verticalAlign: "middle",
											}}
										/>
										{info.public_reactions_count === 1
											? `1 Reaction`
											: `${info.public_reactions_count} Reactions`}
									</button>
									<button type='button'>
										<GoComment
											style={{
												fontSize: "1.2rem",
												marginRight: "0.4rem",
												verticalAlign: "middle",
											}}
										/>
										{info.comments_count === 1
											? `1 comment`
											: info.comments_count > 1
											? `${info.comments_count} comments`
											: "Add comment"}
									</button>
								</div>
								<div>
									<span>
										<time>{info.reading_time_minutes} min</time>
									</span>
									<button type='button' className='save-btn'>
										Save
									</button>
								</div>
							</footer>
						</section>
					</article>
				);
			})}
		</section>
	);
};

export default Article;
