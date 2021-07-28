import React, {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilteredOffers, getActiveCard } from '../../store/offers/selectors';
import { getOffersNear } from '../../store/offer/selectors';

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

function Map({ isFromOneOffer = false }) {
  const filteredOffers = useSelector(getFilteredOffers);
  const activeCard = useSelector(getActiveCard);
  const offersNear = useSelector(getOffersNear);

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

      let offers;
      isFromOneOffer ? offers = offersNear : offers = filteredOffers;

      offers
        .filter((offer) => offer.id !== activeCard)
        .forEach((offer) => addMarker(offer, map, icon));
    }
  }, [map, filteredOffers, activeCard, isFromOneOffer, offersNear]);

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
  isFromOneOffer: PropTypes.bool,
};

export default Map;
