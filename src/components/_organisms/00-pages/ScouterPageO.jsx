import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// axios call to gather data 

import MainContainerA from '@A/00-containers/MainContainerA';
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


    if (!zoneData || !zoneKeys) {
        return null;
    } else {
        console.log(zoneKeys, zoneData);
        return (
            <MainContainerA>
                {zoneKeys.map(item => {
                    const rdmKey = Math.random()
                        .toString(36)
                        .substring(7);
                    return (
                        <ZoneCardM
                            key={rdmKey}
                            marks={zoneData[item].marks}
                            zone={zoneData[item].zone} />
                    )
                })}
            </MainContainerA>
        );
    }
};

export default ScouterPageO;