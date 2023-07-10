import React, { Suspense, lazy } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader'
const Footer = lazy(() => import('../../components/Footer/Footer'))

const FooterPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader></LazyLoader>}>
                <Footer></Footer>
            </Suspense>
        </div>
    );
};

export default FooterPage;