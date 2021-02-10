import React from 'react';
import Timeline from './Timeline';
import Faq from './Faq';
import faqContent from './faqContent';

const Learn = () => {
    return (
        <>
            <Faq content={faqContent} />
            <Timeline />
        </>
    );
}

export default Learn;