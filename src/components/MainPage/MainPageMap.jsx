import React, { Component } from 'react';
import './MainPageMap.css';

let Map, TileLayer, Marker, Popup;
class MainPageMap extends Component {

  componentDidMount(){
    //Only runs on Client, not on server render
    Map = require('react-leaflet').Map;
    TileLayer = require('react-leaflet').TileLayer;
    Marker = require('react-leaflet').Marker;
    Popup = require('react-leaflet').Popup;
    this.forceUpdate();
  }

  render() {
    const position = [48.1850019, 6.4693901]
    return (
      (Map)
      ?
      (<Map center={position} zoom={16} className="main-page-map">
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
              Centre des Congrés d'Epinal
            </span>
          </Popup>
        </Marker>
      </Map>)
      : null
    )
  }

}

export default MainPageMap;
