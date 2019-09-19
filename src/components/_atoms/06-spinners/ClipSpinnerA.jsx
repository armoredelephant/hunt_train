import styled, { keyframes } from 'styled-components';

const clip = keyframes`
    0% {transform: rotate(0deg) scale(1)}
    50% {transform: rotate(180deg) scale(0.8)}
    100% {transform: rotate(360deg) scale(1)}
`;

const ClipSpinnerA = styled.div`
    display: flex;
    align-self: center;
    background: transparent !important;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid;
    border-color: ${props => props.theme.blue};
    border-bottom-color: transparent;
    display: inline-block;
    animation: ${clip} 0.75s 0s infinite linear;
    animation-fill-mode: both;
`;

export default ClipSpinnerA;