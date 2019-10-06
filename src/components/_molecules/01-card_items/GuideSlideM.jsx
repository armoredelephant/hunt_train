import React from 'react';
import styled from 'styled-components';

import GuideListA from '@A/08-guide_items/GuideListA';
import GuideTextA from '@A/08-guide_items/GuideTextA';
import GuideTitleA from '@A/08-guide_items/GuideTitleA';

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%
`;

const GuideSlideM = props => {
    const { guide } = props;
    const { notification, ol, text, title, ul } = guide;
    return (
        <Container>
            <GuideTitleA text={title} />
            {text && <GuideTextA text={text} />}
            {ol && <GuideListA ordered={true} list={ol} />}
            {ul && <GuideListA list={ul} />}
            {notification && <GuideTextA notification={true} text={notification} />}
        </Container>
    );
};

export default GuideSlideM; 