import React from "react";

export default class SearchBar extends React.Component {
    render() {
        return(
            <div className="searchBar">
                <input className="form-control" type="text" placeholder="Поиск" aria-label="Search"/>
            </div>
        );
    }
}