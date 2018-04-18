/*global google*/
import { observer } from 'mobx-react';
import * as React from 'react';

import GoogleMap from 'react-google-maps/lib/components/GoogleMap';
import Marker from 'react-google-maps/lib/components/Marker';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';

export interface IMarker {
    position: {
        lat: number;
        lng: number;
    };
    key: string;
    animation: number;
}

interface IGenericMapProps {
    defaultCenter: {
        lat: number;
        lng: number;
    };
    defaultZoom: number;
    onMapLoad: any;
    onMapClick: any;
    markers: IMarker[];
}

export const GenericMap = withGoogleMap(
    observer((props: IGenericMapProps) => {
        const { defaultCenter, defaultZoom, markers, onMapClick, onMapLoad } = props;

        const markersComponents = markers.map(marker => {
            return <Marker position={marker.position} key={marker.key} animation={marker.animation} />;
        });

        return (
            <GoogleMap ref={onMapLoad} defaultZoom={defaultZoom} defaultCenter={{ ...defaultCenter }} onClick={onMapClick}>
                {markersComponents}
            </GoogleMap>
        );
    })
);

export default GenericMap;
