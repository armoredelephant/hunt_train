import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-flow; row;
    justify-content: ${props => props.align ? props.align : props.theme.between};
    padding-bottom: ${props => props.nopad ? '0px' : '5px'};
    border-bottom: 1px solid ${props => props.theme.darkestbg};
`;

const RowContainerA = props => {
  const { center, children } = props;
  return <Container {...props}>{children}</Container>;
};

export default RowContainerA;
