import React, { Suspense, lazy } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader'
const Education = lazy(() => import('../../components/Education/Education'))

const EducationPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader></LazyLoader>}>
                <Education></Education>
            </Suspense>
        </div>
    );
};

export default EducationPage;