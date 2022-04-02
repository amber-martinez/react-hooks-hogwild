import React from "react";

function Filter({ selectingGrease }) {

    return (
        <form id="selectionDiv">
            <select id="select" onChange={selectingGrease}>
                <option value="All">All</option>
                <option value="true">Greased</option>
                <option value="false">Not greased</option>
            </select>
        </form>
    )
}

export default Filter;