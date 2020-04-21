import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class LastUpdated extends React.Component {
    render() {
        const date = new Date(this.props.project.updated_at);
        return(
            <div className="lastUpdated">
                <FontAwesomeIcon icon={['far', 'clock']} /> Последнее обновление: {date.toLocaleDateString()}
            </div>
        );
    }
}