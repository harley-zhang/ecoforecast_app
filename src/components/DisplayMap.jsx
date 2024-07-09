import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import LocationMarker from './LocationMarker';

const DisplayMap = ({ eventData, center = {lat: 40, lng: -110}, zoom = 5.1 }) => {
    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker position={{lat: ev.geometries[0].coordinates[1], lng: ev.geometries[0].coordinates[0]}} />
        } else return null;
    })

    return (
        <div className="h-screen w-screen relative">
            <APIProvider apiKey={'AIzaSyDjUtSiXaEUKQUo0-5sT8Oi_ViRGN2sn_w'}>
                <Map defaultCenter={center} defaultZoom={zoom}>
                    {markers}
                </Map>
            </APIProvider>
        </div>
    );
}

export default DisplayMap;
