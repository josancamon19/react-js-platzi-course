import React from 'react';
import BadgeListItem from "./BadgeListItem";
import {Link} from "react-router-dom";

class BadgesList extends React.Component {
    render() {

        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No Badges were found</h3>
                    <Link to="/badges/new" className="btn btn-primary">Create new badge</Link>
                </div>
            )
        }
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map(badge => {
                        return (
                            <li key={badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                                    <BadgeListItem badge={badge}/>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;