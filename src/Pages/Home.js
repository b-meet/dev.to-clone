import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import LeftSide from "../components/home/leftPart/LeftSide";
import Center from "../components/home/centralPart/Center";
import RightSide from "../components/home/RightSide";

const Home = () => {
	return (
		<>
			<header className='nav'>
				<Navigation />
			</header>
			<main className='main-site-container'>
				<LeftSide />
				<Center />
				<RightSide />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Home;
