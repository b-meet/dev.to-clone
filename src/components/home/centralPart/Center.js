import React from "react";
import { useEffect, useState } from "react";
import Article from "./Article";
import axios from "axios";

const Center = (pageNumber) => {
	const [info, setInfo] = useState([]);

	useEffect(() => {
		axios({
			method: "GET",
			url: "https://dev.to/api/articles/latest",
			params: {
				page: pageNumber,
			},
		}).then((resp) => setInfo(resp.data));
	}, []);

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
			{<Article articles={info} />}
		</section>
	);
};

export default Center;
