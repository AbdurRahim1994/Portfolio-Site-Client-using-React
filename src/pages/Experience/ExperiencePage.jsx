import React, { Suspense, lazy } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader'
const Experience = lazy(() => import('../../components/Experience/Experience'))

const ExperiencePage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader></LazyLoader>}>
                <Experience></Experience>
            </Suspense>
        </div>
    );
};

export default ExperiencePage;