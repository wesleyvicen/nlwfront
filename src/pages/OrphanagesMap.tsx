import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'


import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

function OrphanagesMap(){
const [latitude, setLatitude] = useState(0);
const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      { timeout: 30000 }
    );
  }, []);
  
  function CarregaMap(){
    return(
    <Map
    center={[-8.0398072, -34.961686]}
    zoom={15}
    style={{width:'100%', height:'100%'}}
    >
      <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
    </Map>
    )
  }

  return (
  <div id="page-map">
    <aside>
      <header>
        <img src={mapMarkerImg} alt="Marker"/>
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>
      </header>
      <footer>
        <strong>Vicência</strong>
        <span>Pernambuco</span>
        </footer>
    </aside>
    <CarregaMap/>
        <Link to={''} className={'create-orphanage'}><FiPlus size={32} color={'#FFF'}/></Link>
  </div>
  );
}

export default OrphanagesMap;