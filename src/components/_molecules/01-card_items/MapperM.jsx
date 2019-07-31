import React from 'react';

import ModalContainerA from '@A/00-containers/ModalContainerA';

const MapperM = props => {
    const [showMap, setShowMap] = useState(false);
    const { coordinates, instance, mark, zone } = props;
    

    const handleModal = () => {
        setShowMap(!showMap);
    }

    const handleCoordinates = coord => {
        setSelectedCoordinate(coord);
    }

    return (
        <>  {/** will display the coordinates, default '-' */}
            <CoordinateDisplayA 
                coordinates={coordinates ? coordinates : '-'} />
            {/** will display the map button below coordinates */}
            <MapButtonA />
            {/** will display modal with map if mapp button was clicked */}
            {modal &&
                <ModalContainerA handleModal={handleModal}>
                    <ZoneMapM // this will be the image/map/area component.
                        coordinates={} // need to find coordinates of mouse over image
                        handleCoordinates={handleCoordinates}
                        zone={zone} />
                </ModalContainerA>
            }
        </>
    );
}

export default MapperM;

// <ModalContainer>
// <Map> over the Modal Container