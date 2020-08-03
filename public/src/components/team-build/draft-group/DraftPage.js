import React from 'react';
import ProjectSection from './ProjectSection';
import UnselectedSection from './UnselectedSection';

const DraftPage = () => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Draft Page</h1>
            </div>
        </div>
        <div>
            <ProjectSection />
            <UnselectedSection />
        </div>
    </div>
);

export default DraftPage;