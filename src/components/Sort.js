import React from "react";

function Sort({ settingSort }) {

    return (
        <div id="sort" onChange={settingSort}>
            <select id="select" onChange={settingSort}>
                <option value="Sort by">Sort by</option>
                <option value="Name">Name</option>
                <option value="Weight">Weight</option>
            </select>
        </div>
    )

}

export default Sort;