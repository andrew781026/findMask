import React from 'react';
import Styles from './Map.module.css';
import Simple from "layout/partial/map/Simple";

import "leaflet/dist/leaflet.css";
import L from "leaflet";


// redux
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import ReduxMap from "redux/map/actionReducer";
import ReduxMask from "redux/mask/actionReducer";

/*
const Map = () => (
    <div className={Styles.content}>
        <Simple/>
    </div>
);

 */


// 參考資料 : https://leafletjs.com/examples/quick-start/ & https://juejin.im/post/5cc192976fb9a032092e8e0a
class SimpleExample extends React.Component {

    map = null;
    layerGroup = null;

    state = {
        lat: 25.034180,
        lng: 121.564517,
        zoom: 17
    };

    componentDidMount() {

        ReduxMask.AsyncMethods.getMaskData().then().catch(e => console.error(e));

        const map = L.map('mapid').setView([this.state.lat, this.state.lng], this.state.zoom);

        this.map = map;

        const OSMUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

        L.tileLayer(OSMUrl, {
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
        }).addTo(map);

        // 使用 leaflet-color-markers ( https://github.com/pointhi/leaflet-color-markers ) 當作 marker
        const greenIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        const goldIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        const redIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        // we can use differ color present the left amount of mask ( user can pick finding mask_adult or mask_child )

        // 0 => red
        // 1 ~ 30 => gold
        // 31 ~ => green

        const marker = L.marker([25.034180, 121.564517], {icon: greenIcon}).addTo(map);
        const marker1 = L.marker([25.03117377, 121.5562963], {icon: redIcon}).addTo(map);
        const marker2 = L.marker([25.032960, 121.5721783], {icon: goldIcon}).addTo(map);

        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

        map.on('moveend', (e) => {

            const latlng = map.getCenter();
            this.setState({lat: latlng.lat, lng: latlng.lng});
            this.props.actions.setMapCenter(latlng);

            // if (++i < 3) map.flyTo([-25.034180, -121.564517]);
        });

        this.layerGroup = L.layerGroup().addTo(map);

        /*
        const circle = L.circle([25.034180, 121.564517], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.3,
            radius: 5 * 1000 // Radius of the circle, in meters.
        }).addTo(map);

         */

    }

    componentDidUpdate(prevProps) {

        // 常見用法（別忘了比較 prop）：
        if (this.props.center.fly && this.map) {
            this.map.flyTo(this.props.center, 16);
            this.renderMarker(this.map);
        }
    }

    getMedicalStores = () => {

        const medicalStores = this.props.maskData.map(mask => ({
            lat: mask.geometry.coordinates[1],
            lng: mask.geometry.coordinates[0],
            ...mask.properties,
            name: mask.properties.name,
            address: mask.properties.address, // 401 - 郵遞區號 , 需要查詢郵局系統
            time: '08:00~21:30', // 只有 available : 星期一上午看診、星期二上午看診、星期三上午看診、星期四上午看診
            phone: mask.properties.phone,
            leftMask: {
                adult: mask.properties.mask_adult,
                children: mask.properties.mask_child,
            },
        }));

        return medicalStores.slice(0, 50);
    };

    renderMarker = () => {

        // 使用 leaflet-color-markers ( https://github.com/pointhi/leaflet-color-markers ) 當作 marker
        const greenIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        const medicalStores = this.getMedicalStores();

        // remove all the markers in one go
        this.layerGroup.clearLayers();

        medicalStores.forEach(store => {

            L.marker([store.lat, store.lng], {icon: greenIcon}).addTo(this.layerGroup);
        });

    };

    render() {

        // if props.center change fly to center ? => 外部點擊需要到達目標位置才飛

        return (
            <div id='mapid' className={Styles.content}/>
        );
    }
}

const mapStateToProps = state => ({
    center: ReduxMap.Selector.getMapCenter(state),
    maskData: ReduxMask.Selector.getMaskData(state),
});

const mapDispatchToProps = (dispatch) => {
    const actions = {
        setMapCenter: ReduxMap.ActionCreator.setMapCenter,
    };

    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleExample);

