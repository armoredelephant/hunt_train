import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-flow; row;
    justify-content: ${props => props.theme.between};
    padding-bottom: 5px;
    border-bottom: 1px solid ${props => props.theme.darkestbg};
`;

const RowContainerA = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default RowContainerA;
