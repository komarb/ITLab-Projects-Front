import React from "react";
import SearchBar from "./SearchBar";
import Paginator from "./Paginator";

export default class NavigationBar extends React.Component {
    render() {
        return(
            <div className="navigationBar">
                <SearchBar/>
                <Paginator loadRepositoriesPage={this.props.loadRepositoriesPage} pagesCount={this.props.pagesCount}/>
            </div>
        );
    }
}