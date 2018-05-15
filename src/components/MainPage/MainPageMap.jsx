import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


import './MainPageMap.css';

export default class SimpleExample extends Component {
  state = {
    lat: 48.1850019,
    lng: 6.4693901,
    zoom: 16,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} className="main-page-map">
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}
