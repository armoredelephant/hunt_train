import React from 'react';
import styled from 'styled-components';

import CardHeaderM from '@M/01-card_items/CardHeaderM';
import CardRowM from '@M/01-card_items/CardRowM';

const CardContainer = styled.div`
    min-width: 400px;
    border: 1px solid red;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 5px;
`;

const Card = styled.div`
    display: flex;
    flex-flow: column;
    margin: 5px;
`;

const ZoneCardM = props => {
    const { zone, marks, crystals } = props;
    const marksArray = Object.keys(marks);
    // we have our 3 instances
    // const [instaceData, setInstanceData] = useState(null);

    // const handleOptimize = (mark, instance) => {
    // first determine which instance needs to be updated 
    // let currentInstance = instanceSwitch();

    // const instanceSwitch = instance => {
    //     switch (instance) {
    //         case 1:
    //             i1;
    //             break;
    //         case 2:
    //             i2;
    //             break;
    //         case 3:
    //             i3;
    //             break;
    //     };
    // };

    // if (!currentInstance) {
    //     instance === 1 && 
    // }

    // second, if there is already an index - get it's distance

    // const firstMarkDistance = currentInstance[0].distance;
    // const currentMarkDistance = mark.distance;

    // third, determine which distance is shorter and either push (end) or unshift (front)

    // firstMarkDistance < currentMarkDistance ?
    // currentInstance.push(mark)
    // : currentInstance.unshift(mark);

    // lastly determine which instance to update

    // instance === 1 && setInstanceOne(i1); // mark will have to be object {"mark": "Nuckelvee, "coord: 13,15, "distance:" *Distance from crystal*}
    // instance === 2 && setInstanceTwo(i2);
    // instance === 3 && setInstanceThree(i3);
    // }

    return (
        <CardContainer>
            <Card>
                <CardHeaderM zone={zone} />
                {marksArray.map(mark => {
                    const rdmKey = Math.random()
                        .toString(36)
                        .substring(7);
                    return (
                        <CardRowM
                            key={rdmKey}
                            mark={mark}
                            zone={zone} />
                    );
                })}
                {/** <CardOptimize /> */}
            </Card>
        </CardContainer>
    );
};

export default ZoneCardM;
