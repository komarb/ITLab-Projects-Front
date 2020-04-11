import React from "react";
import {ProgressBar} from "react-bootstrap";

export default class ReadyBar extends React.Component {
    render() {
        return(
            <div>
                Готовность:
                <ProgressBar variant="success" now={1/(this.props.openIssues+1)*100}/>
            </div>

        );
    }
}