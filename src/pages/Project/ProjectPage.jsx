import React, { Suspense, lazy } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader'
const Project = lazy(() => import('../../components/Project/Project'))

const ProjectPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader></LazyLoader>}>
                <Project></Project>
            </Suspense>
        </div>
    );
};

export default ProjectPage;