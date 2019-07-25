import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// axios call to gather data 

import ZoneCardM from '@M/00-forms/ZoneCardM';

const ScouterPageO = () => {
    const [zoneKeys, setZoneKeys] = useState(null);
    const [zoneData, setZoneData] = useState(null);

    const fetchData = async url => {
        const result = await Axios.get(url);
        setZoneKeys(Object.keys(result.data));
        setZoneData(result.data)
    }

    useEffect(() => {
        fetchData('/resources/stubs/hunt_data.json');
    }, []);

    if (zoneKeys === null) return <></>;
    return (
        <React.Fragment>
            {  /** need a test component to map here */}
            {zoneKeys.map(item => {
                <ZoneCardM
                    zone={zoneData[item].zone} />
            })}
        </React.Fragment>
    );
};

export default ScouterPageO;