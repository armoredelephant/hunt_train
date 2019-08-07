import React from 'react';
import styled from 'styled-components';

import RowContainerA from '@A/00-containers/RowContainerA';
import InstanceContainerA from '@A/00-containers/InstanceContainerA';
import ZoneMarkContainerA from '@A/00-containers/ZoneMarkContainerA';

const Zone = styled.h3`
    padding: 0;
    margin: 0;
    color: ${props => props.theme.fntClr};
    font-family: ${props => props.theme.ff};
`

const Instance = styled.h3`
    padding: 0;
    margin: 0;
    color: ${props => props.theme.fntClr};
    font-family: ${props => props.theme.ff};
`

const CardHeaderM = props => {
    const { zone } = props;
    const instances = [1, 2, 3];
    return (
        <RowContainerA>
            <ZoneMarkContainerA>
                <Zone>{zone}</Zone>
            </ZoneMarkContainerA>
            <InstanceContainerA>
                {instances.map(instance => {
                    const rdmKey = Math.random()
                        .toString(36)
                        .substring(7);
                    return <Instance key={rdmKey}>{instance}</Instance>
                })}
            </InstanceContainerA>
        </RowContainerA>
    );
};

export default CardHeaderM;