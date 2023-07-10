import React, { Suspense, lazy } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader'
const Reference = lazy(() => import('../../components/Reference/Reference'))

const ReferencePage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader></LazyLoader>}>
                <Reference></Reference>
            </Suspense>
        </div>
    );
};

export default ReferencePage;