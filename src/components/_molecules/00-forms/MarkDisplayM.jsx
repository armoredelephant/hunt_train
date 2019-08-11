import React from 'react';
import styled from 'styled-components';

import MarkInfoContainerA from '@A/00-containers/MarkInfoContainerA';
import FinalMarkNotificationA from '@A/03-notifications/FinalMarkNotificationA';

const MarkContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-flow: row;
  background-color: #2b2b2b;
  border-radius: ${props => props.theme.brad};
  justify-content: space-between;
  border-top: 2px solid #222;
  border-left: 1px solid #222;
  border-right: 1px solid #222;
  border-bottom: 1px solid #242424;
  align-items: center;
  margin: 5px;
`;

const MarkDisplayM = props => {
  const { currentMark, currentStop, totalStops } = props;
  const items = ['zone', 'instance', 'coords'];
  console.log(totalStops, currentStop);

  return (
    <MarkContainer>
      <FinalMarkNotificationA hidden={currentStop !== totalStops && true} />
      <InfoContainer>
        {items.map(item => {
          const rdmKey = Math.random()
            .toString(36)
            .substring(7);
          return <MarkInfoContainerA data={currentMark[item]} label={item} key={rdmKey} />;
        })}
      </InfoContainer>
    </MarkContainer>
  );
};

export default MarkDisplayM;
