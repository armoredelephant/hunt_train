import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row no-wrap;
  margin: 0 15px;
`;

export const Button = styled.div`
  display: flex;
  cursor: pointer;
  user-select: none;
  font-size: 30px;
  font-family: sans-serif;
  color: ${props => (props.hidden ? props.theme.cardbg : props.theme.blue)};
  visibility: ${props => props.hidden && 'hidden'};
`;

const Dot = styled.span`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: white;
  margin: 7px 5px;
  opacity: ${props => (props.selected ? '1' : '0.3')};
  transition-duration: 300ms;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 15px;
`;

const CarouselButtonsA = props => {
  const { count, index, nextHandler, prevHandler, total } = props;
  return (
    <ButtonWrapper>
      <Button
        className="left" // prettier-ignore
        hidden={index === 0 && true}
        onClick={prevHandler}
      >
        &lt;
      </Button>
      {/* Radio Buttons */}
      {total < 2 ? (
        <StyledDiv />
      ) : (
          <StyledDiv>
            {Array(...Array(total)).map((x, i) => {
              const rdmKey = Math.random()
                .toString(36)
                .substring(7);
              return <Dot key={rdmKey} selected={index === i} />;
            })}
          </StyledDiv>
        )}
      <Button
        className="right" // prettier-ignore
        onClick={nextHandler}
        hidden={index === count && true}
      >
        &gt;
      </Button>
    </ButtonWrapper>
  );
};

export default CarouselButtonsA;

CarouselButtonsA.propTypes = {
  count: PropTypes.number,
  index: PropTypes.number,
  nextHandler: PropTypes.func,
  prevHandler: PropTypes.func,
  total: PropTypes.number
};

CarouselButtonsA.defaultProps = {
  count: 1,
  index: 1,
  nextHandler: () => { },
  prevHandler: () => { },
  total: 1
};
