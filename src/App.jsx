import "./App.css";
import Map from "./Map.jsx";

function App() {
	return (
		<>
			<aside className="left"></aside>
			<main>
				<h1 className="heading-main">TETRIS</h1>
				<Map />
			</main>
			<aside className="right"></aside>
		</>
	);
}

export default App;
