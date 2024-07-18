import {useEffect, useState} from "react";
import Figure from "./Figure.jsx";

function Map() {
	const [height, setHeight] = useState(20);
	const [width, setWidth] = useState(10);
	const data = [];
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			const id = i + "-" + j;
			data.push({key: id, occupated: "false"});
		}
	}
	const [map, setMap] = useState(data);

	useEffect(() => {});

	return (
		<div className="map">
			<Figure />
		</div>
	);
}

export default Map;
