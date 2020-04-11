import React from "react";

export default class Issue extends React.Component {
    render() {
        const date = new Date(this.props.issue.created_at).toUTCString();
        return(
            <div className="card mb-4 shadow-sm">
                <h2><a href={`${this.props.issue.html_url}`}>{this.props.issue.name}</a></h2>
                <p>
                    {this.props.issue.user.login}
                    <img className="avatar" src={this.props.issue.user.avatar_url} alt={this.props.issue.user.login} />
                </p>
                <p>{date}</p>
            </div>
        );
    }
}