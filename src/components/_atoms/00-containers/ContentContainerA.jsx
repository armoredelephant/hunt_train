import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Contains the content within the Splash page.
 * Used in: <SplashPageO />
 */

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  height: 18.750rem;
  margin: .938rem;
`;

const ContentContainerA = props => {
  const { children } = props;
  return <Container>{children}</Container>;
};

export default ContentContainerA;

ContentContainerA.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};
