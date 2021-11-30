import Navigation from "./components/Navigation";
import LeftSide from "./components/LeftSide";
import Center from "./components/Center";
import RightSide from "./components/RightSide";
import Footer from "./components/Footer";
import "./styles/main.scss";

function App() {
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
}
export default App;
