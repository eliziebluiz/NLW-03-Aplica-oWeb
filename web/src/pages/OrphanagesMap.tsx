import React from 'react';

import mapMarkerImg from '../images/map-maker.svg'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet'
import '../styles/pages/orphanages-map.css'

import 'leaflet/dist/leaflet.css'

function OrphanagesMap(){
  return(
   <div id='page-map'>
     <aside>
       <header>
        <img src={mapMarkerImg} alt="Happy"/>
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando sua visita :)</p>
       </header>

      <footer>
        <strong>Mossoró</strong>
        <span>Rio Grande do Norte</span> 
      </footer> 
     </aside>

     <Map
     center={[-5.1625947,-37.3292853]}
     zoom={14}
     style={{ width:'100%', height:'100%' }}
     >
       <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
     </Map>

     <Link to="" className='create-orphanage'> 
      <FiPlus size={32} color='#FFF'></FiPlus>
     </Link>
   </div>
  )
}

export default OrphanagesMap;