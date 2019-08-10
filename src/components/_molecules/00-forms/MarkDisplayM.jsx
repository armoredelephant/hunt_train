import React from 'react';
import styled from 'styled-components';

import MarkInfoContainerA from '@A/00-containers/MarkInfoContainerA';
import FinalMarkNotificationA from '@A/03-notifications/FinalMarkNotificationA';

const MarkContainer = styled.div`
    display: flex;
    flex-flow: column;
    border: 1px solid green;
`;

const Warning = styled.p`
    color: white;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-flow: row;
    border: 1px solid white;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
`;

const MarkDisplayM = props => {
    const { currentMark, currentStop, totalStops } = props;
    const items = ['coords', 'instance', 'mark', 'zone'];
    console.log(totalStops, currentStop);

    return (
        <MarkContainer>
            <FinalMarkNotificationA
                hidden={currentStop !== totalStops && true}
            />
            <InfoContainer>
                {items.map(item => {
                    const rdmKey = Math.random()
                        .toString(36)
                        .substring(7);
                    return (
                        <MarkInfoContainerA
                            data={currentMark[item]}
                            label={item}
                            key={rdmKey}
                        />
                    );
                })}
            </InfoContainer>
        </MarkContainer>
    );
};

export default MarkDisplayM;
