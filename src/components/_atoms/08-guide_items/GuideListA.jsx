import React from 'react';
import styled from 'styled-components';

import GuideItemContainerA from '@A/00-containers/GuideItemContainerA';

const OL = styled.ol`
    display: inline-flex;
    flex-flow: column;
    align-self: center;

`;

const UL = styled.ul`
    display: inline-flex;
    flex-flow: column;
    align-self: center;

`;
// refactor to use here annd VerificationGuideA
const Item = styled.li`
    margin-bottom: .5em;
    font-size: .813em;
    text-align: justify;
`;

const GuideListA = props => {
    const { list, ordered } = props;

    return (
        <GuideItemContainerA>
            {ordered ?
                <OL>
                    {list.map(item => {
                        const rdmKey = Math.random()
                            .toString(36)
                            .substring(7);
                        return <Item key={rdmKey}>{item}</Item>
                    })}
                </OL>
                :
                <UL>
                    {list.map(item => {
                        const rdmKey = Math.random()
                            .toString(36)
                            .substring(7);
                        return <Item key={rdmKey}>{item}</Item>
                    })}
                </UL>
            }
        </GuideItemContainerA>
    )
};

export default GuideListA;