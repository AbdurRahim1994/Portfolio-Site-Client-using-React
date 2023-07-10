import React, { Suspense, lazy } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader'
const Technology = lazy(() => import('../../components/Technology/Technology'))

const TechnologyPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader></LazyLoader>}>
                <Technology></Technology>
            </Suspense>
        </div>
    );
};

export default TechnologyPage;