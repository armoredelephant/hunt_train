import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

import ClipSpinnerA from '@A/06-spinners/ClipSpinnerA';
import CarouselButtonsA from '@A/02-buttons/CarouselButtonsA';
import CarouselM from '@M/05-carousel/CarouselM';
import GuideSlideM from '@M/01-card_items/GuideSlideM';
import ModalContainerA from '@A/00-containers/ModalContainerA';

import { StateContext, DispatchContext } from '../../../App';

const Container = styled.div`
    display: inline-flex;
    flex-flow: column;
    align-items: center;
    align-self: center;
    radius: ${props => props.theme.brad};
    margin: 8px;
    background: ${props => props.theme.cardbg};
    box-shadow: ${props => props.theme.bshad};
`;

const SiteGuideO = () => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    const { guideData, isLoading } = state;

    useEffect(() => {
        dispatch({ type: 'loading' });

        try {
            Axios.get('/resources/stubs/site_guide.json')
                .then(res => {
                    const data = res.data;
                    const guideKeys = Object.keys(data);
                    let guideSections = [];
                    guideKeys.map(key => {
                        guideSections.push(data[key]);
                    });
                    dispatch({ type: 'guideData', guideData: guideSections });
                })
        } finally {
            dispatch({ type: 'loading' });
        }
    }, []);

    console.log(guideData);

    if (!guideData) return null;

    return (
        <ModalContainerA carousel={true}>
            {isLoading ?
                <ClipSpinnerA />
                :
                <CarouselM widget={CarouselButtonsA}>
                    {guideData.map(section => {
                        const rdmKey = Math.random()
                            .toString(36)
                            .substring(7);
                        return <GuideSlideM guide={section} key={rdmKey} />
                    })}
                </CarouselM>
            }
        </ModalContainerA>
    );
};

export default SiteGuideO;

