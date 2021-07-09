import React, {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { connect } from 'react-redux';
import offersPropTypes from '../Cities/offers.prop';

const FIRST_INDEX = 0;
const MARKER_URL = 'img/pin.svg';

const icon = leaflet.icon({
  iconUrl: MARKER_URL,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map({ offers, filteredOffers }) {
  const city = offers[FIRST_INDEX].city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer.getElement) {
          layer.remove();
        }
      });
      filteredOffers.forEach((ad) => {
        leaflet
          .marker({
            lat: ad.location.latitude,
            lng: ad.location.longitude,
          }, {
            icon: icon,
          })
          .addTo(map);
      });
    }
  }, [map, filteredOffers]);

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
  filteredOffers: offersPropTypes,
};

const mapStateToProps = ({ offers, filteredOffers }) => ({
  offers,
  filteredOffers,
});

export { Map };
export default connect(mapStateToProps, null)(Map);
