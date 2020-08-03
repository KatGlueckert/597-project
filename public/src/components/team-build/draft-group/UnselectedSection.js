import React from 'react';
import UnselectedFilters from './UnselectedFilters';
import UnselectedList from './UnselectedList';

const UnselectedSection = () => (
    <div className="content-container">
        <h1>Unselected Section</h1>
        <UnselectedFilters />
        <UnselectedList />
    </div>
);

export default UnselectedSection;