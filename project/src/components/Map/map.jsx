import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import offersPropTypes from '../Cities/offers.prop';

const AMSTERDAM_LOCATION = [52.38333, 4.9];
const ZOOM = 12;

const icon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map({ offers }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = leaflet.map(mapRef.current, {
      center: AMSTERDAM_LOCATION,
      zoom: ZOOM,
      zoomControl: false,
      marker: true,
    });

    map.setView(AMSTERDAM_LOCATION, ZOOM);

    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      })
      .addTo(map);

    const offerCoords = offers.map(({ location: { latitude, longitude }}) => [
      latitude,
      longitude,
    ]);

    offerCoords.forEach((coords) => {
      leaflet
        .marker(coords, { icon })
        .addTo(map);
    });
  }, [offers]);

  return (
    <div
      id='map'
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  offers: offersPropTypes,
};

export default Map;
