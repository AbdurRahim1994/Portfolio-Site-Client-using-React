import React, { Suspense, lazy } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader'
const Contact = lazy(() => import('../../components/Contact/Contact'))

const ContactPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader></LazyLoader>}>
                <Contact></Contact>
            </Suspense>
        </div>
    );
};

export default ContactPage;