import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-flow; row;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid #2b2b2b;
`;

const RowContainerA = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default RowContainerA;
