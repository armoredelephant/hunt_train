import React from 'react';
import styled from 'styled-components';

import GuideItemContainerA from '@A/00-containers/GuideItemContainerA';

// conditional for italics if notification
const Text = styled.p`
    display: flex;
    font-size: .813em;
    text-align: justify;
    font-family: ${props => props.theme.ff};
    letter-spacing: ${props => props.theme.ls};
    color: ${props => props.notification && props.theme.red};
    font-weight: ${props => props.theme.lightfont};
    
`;

const GuideTextA = props => {
    const { notification, text } = props;

    return (
        <GuideItemContainerA>
            <Text notification={notification}>{text}</Text>
        </GuideItemContainerA>
    )
};

export default GuideTextA;