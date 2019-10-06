import React from 'react';
import styled from 'styled-components';

import GuideItemContainerA from '@A/00-containers/GuideItemContainerA';

// conditional for italics if notification
const Text = styled.p`
    display: flex;
    font-size: 13px;
    text-align: justify;
    font-family: ${props => props.theme.ff};
    letter-spacing: ${props => props.theme.ls};
    
`;

const GuideTextA = props => {
    const { notification, text } = props;

    return (
        <GuideItemContainerA>
            <Text>{text}</Text>
        </GuideItemContainerA>
    )
};

export default GuideTextA;