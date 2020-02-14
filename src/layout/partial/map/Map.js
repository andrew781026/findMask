import React from 'react';
import Styles from './Map.module.css';
import Simple from "layout/partial/map/Simple";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

import axios from 'axios';

/*
const Map = () => (
    <div className={Styles.content}>
        <Simple/>
    </div>
);

 */


// 參考資料 : https://leafletjs.com/examples/quick-start/ & https://juejin.im/post/5cc192976fb9a032092e8e0a
class SimpleExample extends React.Component {

    state = {
        lat: 25.034180,
        lng: 121.564517,
        zoom: 17
    };

    componentDidMount() {

        const dataUrl = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';

        // Make a request for a user with a given ID
        axios.get(dataUrl)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        const mymap = L.map('mapid').setView([this.state.lat, this.state.lng], this.state.zoom);

        const OSMUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

        L.tileLayer(OSMUrl, {
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
        }).addTo(mymap);

        // 使用 leaflet-color-markers ( https://github.com/pointhi/leaflet-color-markers ) 當作 marker
        const greenIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        const marker = L.marker([25.034180, 121.564517], {icon: greenIcon}).addTo(mymap);

        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

        const circle = L.circle([25.034180, 121.564517], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(mymap);
    }

    render() {
        return (
            <div id='mapid' className={Styles.content}/>
        );
    }
}


export default SimpleExample;
