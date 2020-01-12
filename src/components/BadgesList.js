import React from 'react';
import BadgeListItem from "./BadgeListItem";
import {Link} from "react-router-dom";

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredBadges(result);
    }, [badges, query]);

    return {query, setQuery, filteredBadges}
}

function BadgesList(props) {
    const badges = props.badges;
    const {query, setQuery, filteredBadges} = useSearchBadges(badges);

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="">Filter Badges</label>
                    <input type="text" className="form-control" value={query} onChange={(e) => {
                        setQuery(e.target.value);
                    }}/>
                </div>
                <h3>No Badges were found</h3>
                <Link to="/badges/new" className="btn btn-primary">Create new badge</Link>
            </div>
        )
    }
    return (
        <div className="BadgesList">
            <div className="form-group">
                <label htmlFor="">Filter Badges</label>
                <input type="text" className="form-control" value={query} onChange={(e) => {
                    setQuery(e.target.value);
                }}/>
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map(badge => {
                    return (
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <BadgeListItem badge={badge}/>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default BadgesList;