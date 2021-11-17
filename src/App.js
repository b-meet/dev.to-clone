import Navigation from "./components/Navigation";
import LeftSide from "./components/LeftSide";
import Center from "./components/Center";
import RightSide from "./components/RightSide";
import "./styles/main.scss";

function App() {
	return (
		<main>
			<Navigation />
			<LeftSide />
			<Center />
			<RightSide />
		</main>
	);
}
export default App;
