import React, { Suspense, lazy } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader'
const Training = lazy(() => import('../../components/Training/Training'))

const TrainingPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader></LazyLoader>}>
                <Training></Training>
            </Suspense>
        </div>
    );
};

export default TrainingPage;