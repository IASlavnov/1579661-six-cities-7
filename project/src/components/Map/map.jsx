import React, {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import offersPropTypes from '../Cities/offers.prop';

const FIRST_INDEX = 0;
const MARKER_URL = 'img/pin.svg';
const ACTIVE_MARKER_URL = 'img/pin-active.svg';

const icon = leaflet.icon({
  iconUrl: MARKER_URL,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const activeIcon = leaflet.icon({
  iconUrl: ACTIVE_MARKER_URL,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const addMarker = (offer, map, markerIcon) => {
  leaflet
    .marker({
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    }, {
      icon: markerIcon,
    })
    .addTo(map);
};

function Map({ filteredOffers, activeCard }) {
  const city = filteredOffers[FIRST_INDEX].city;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer.getElement) {
          layer.remove();
        }
      });

      const active = filteredOffers.find((offer) => offer.id === activeCard);
      active && addMarker(active, map, activeIcon);
      filteredOffers
        .filter((offer) => offer.id !== activeCard)
        .forEach((offer) => addMarker(offer, map, icon));
    }
  }, [map, filteredOffers, activeCard]);

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
  filteredOffers: offersPropTypes,
  activeCard: PropTypes.number,
};

const mapStateToProps = ({ filteredOffers, activeCard }) => ({
  filteredOffers,
  activeCard,
});

export { Map };
export default connect(mapStateToProps, null)(Map);
