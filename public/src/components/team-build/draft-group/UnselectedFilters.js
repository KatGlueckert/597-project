import React from 'react';
import { connect } from 'react-redux';
import { sortByRank, sortByName } from '../../../actions/team-build/filters';

const UnselectedFilters = (props) => (
    <div>
        <p>Sort By: 
        <select
        value={props.sortBy}
        onChange={(e) => {
            if(e.target.value === 'rank'){
                props.sortByRank();
            }else if(e.target.value === 'name'){
                props.sortByName();
            };
        }}
        >
            <option value="rank">Rank</option>
            <option value="name">Name</option>
        </select>
        </p> 
    </div>
);

const mapStateToProps = (state) => ({
    sortBy: state.filters.sortBy
});

const mapDispatchToProps = (dispatch) => ({
    sortByRank: () => dispatch(sortByRank()),
    sortByName: () => dispatch(sortByName())
});

export default connect(mapStateToProps, mapDispatchToProps)(UnselectedFilters);
