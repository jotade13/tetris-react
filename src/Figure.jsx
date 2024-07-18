import {useState} from "react";
import "./figure.css";

export default function Figure() {
	return (
		<>
			<Square mapX="0" mapY="0" figureX="0" figureY="0" />
			<Square mapX="0" mapY="0" figureX="0" figureY="0" />
			<Square mapX="0" mapY="0" figureX="0" figureY="0" />
			<Square mapX="0" mapY="0" figureX="0" figureY="0" />
		</>
	);
}

function Square(init) {
	const [posX, setPosX] = useState(parseInt(init.mapX));
	const [posY, setPosY] = useState(parseInt(init.mapY));
	const [coordX, setCoordX] = useState(parseInt(init.figureX));
	const [coordY, setCoordY] = useState(parseInt(init.figureY));

	const positionMapLeft = posX + coordX;
	const positionMapTop = posY + coordY;

	return (
		<div
			className="square"
			style={{
				background: "blue",
				left: positionMapLeft,
				Top: positionMapTop,
			}}
		></div>
	);
}
