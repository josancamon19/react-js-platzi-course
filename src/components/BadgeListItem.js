import React from 'react';
import Gravatar from "../components/Gravatar";

class BadgeListItem extends React.Component {
    render() {
        return <div className="card mb-4 p-2">
            <div className="row">
                <div className="col-sm-2">
                    <Gravatar email={this.props.badge.email} alt="" className="rounded-circle p-2"/>
                </div>
                <div className="col align-middle">
                    <p className="m-0 font-weight-bold">{this.props.badge.firstName} {this.props.badge.lastName }</p>
                    <a href="" className="m-0 text-decoration-none">@{this.props.badge.twitter}</a>
                    <p className="m-0">{this.props.badge.jobTitle}</p>
                </div>
            </div>
        </div>
    }
}

export default BadgeListItem;