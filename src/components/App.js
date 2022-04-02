import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Tiles from "./Tiles";
import Sort from "./Sort";

import hogs from "../porkers_data";

function App() {

	const [sortedHogs, sortAllHogs] = useState(hogs);
	
	function selectingGrease(event) {
		let selectGrease = event.target.value;
		const hogsFilter = hogs.filter((hog) => {
			console.log(selectGrease, hog.greased)
			if (selectGrease === "All") {
				return true
			} else if (hog.greased.toString() === selectGrease) {
				return true
			} else {
				return false
			}
		})

		sortAllHogs(hogsFilter)
	}
	console.log(sortedHogs)

	function settingSort(event) {
		let sort = event.target.value

		if (sort === "Sort by") {
			sortAllHogs(sortedHogs)
		} else if (sort === "Weight") {

			let hogsWeightCopy = [...sortedHogs];
			const weightSort = hogsWeightCopy.sort(function (a, b) {
				return a.weight - b.weight;
			});
			sortAllHogs(weightSort);
		} else if (sort === "Name") {

			let hogsNameCopy = [...sortedHogs];
			const nameSort = hogsNameCopy.sort(function(a, b) {
				const nameA = a.name.toUpperCase(); // ignore upper and lowercase
				const nameB = b.name.toUpperCase(); // ignore upper and lowercase
				if (nameA < nameB) {
				return -1;
				}
				if (nameA > nameB) {
				return 1;
				}
			
				// names must be equal
				return 0;
			});
			sortAllHogs(nameSort);
		}
	}


	return (
		<div className="App">
			<Nav />
			<Filter selectingGrease={selectingGrease} />
			<Sort settingSort={settingSort}/>
			<Tiles sortedHogs={sortedHogs} />
		</div>
	);
}

export default App;
