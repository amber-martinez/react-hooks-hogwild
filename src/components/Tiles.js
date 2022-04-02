import React from "react";
import Tile from "./Tile";

function Tiles({ sortedHogs }) {

    console.log(sortedHogs)

    return (
            <div>
                <div className="ui grid container">
                    {sortedHogs.map((hog) => (
                        <Tile
                        key={hog.name}
                        name={hog.name}
                        src={hog.image}
                        alt={hog.name}
                        specialty={hog.specialty}
                        greased={hog.greased}
                        weight={hog.weight}
                        medal={hog["highest medal achieved"]}
                        />
                    ))}
                </div>
            </div>
    )

}

export default Tiles;