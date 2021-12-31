import React from "react";
import { useEffect, useState } from "react";
import Article from "./Article";
import SkeletonUI from "./SkeletonUI";

const url = "https://dev.to/api/articles/latest";

const Center = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [info, setInfo] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const resp = await fetch(url);
			if (resp.status >= 200 && resp.status <= 299) {
				const data = await resp.json();
				setIsLoading(false);
				setInfo(data);
			} else {
				setIsError(true);
			}
		};
		getData();
	}, []);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>Error...</h2>;
	}

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
			{isLoading || <Article articles={info} />}
		</section>
	);
};

export default Center;
