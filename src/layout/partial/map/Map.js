// react
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Styles from './Map.module.css';

// leaflet
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// components
import Tooltip from "./components/Tooltip";
import GeoLocated from "./GeoLocation";

// redux
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import ReduxMap from "redux/map/actionReducer";
import ReduxMask from "redux/mask/actionReducer";

// 參考資料 : https://leafletjs.com/examples/quick-start/ & https://juejin.im/post/5cc192976fb9a032092e8e0a
class SimpleExample extends React.Component {

    map = null;
    layerGroup = null;
    icons = {};

    state = {
        lat: 25.034180,
        lng: 121.564517,
        zoom: 17
    };

    componentDidMount() {

        ReduxMask.AsyncMethods.getMaskData().then().catch(e => console.error(e));

        const map = L.map('mapid').setView([this.state.lat, this.state.lng], this.state.zoom);

        const OSMUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

        L.tileLayer(OSMUrl, {
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
        }).addTo(map);

        map.on('moveend', (e) => {

            const latlng = map.getCenter();
            this.setState({lat: latlng.lat, lng: latlng.lng});
            this.props.actions.setMapCenter(latlng);
        });

        // 計算 5 km 內的藥局 , 並顯示之

        this.map = map;
        this.layerGroup = L.layerGroup().addTo(map); // add layerGroup for markers with clearLayers
    }

    componentDidUpdate(prevProps) {

        if (this.map) {
            if (this.props.center.fly) this.map.flyTo(this.props.center, 16);
            this.renderMarker(this.map);
        }
    }

    getIcon = (color = 'green') => {

        const icon = this.icons[color];

        if (icon) return icon;
        else {

            // 使用 leaflet-color-markers ( https://github.com/pointhi/leaflet-color-markers ) 當作 marker
            const newIcon = new L.Icon({
                iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });

            this.icons[color] = newIcon;
            return newIcon;
        }

    };

    getMedicalStores = () => {

        const medicalStores = this.props.nearByMasks.map(mask => ({
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

        return medicalStores;
    };

    getMarker = (store) => {

        // 使用 leaflet-color-markers ( https://github.com/pointhi/leaflet-color-markers ) 當作 marker
        const greenIcon = this.getIcon('green');
        const goldIcon = this.getIcon('gold');
        const redIcon = this.getIcon('red');

        // we can use differ color present the left amount of mask ( user can pick finding mask_adult or mask_child )

        // 0 => red
        // 1 ~ 30 => gold
        // 31 ~ => green

        const maskType = this.props.maskType;
        const mask_adult = store.leftMask.adult;
        const mask_child = store.leftMask.children;

        const getMaskAmount = (maskType) => {

            if (maskType === 'child') return mask_child;
            else if (maskType === 'adult') return mask_adult;
            else return mask_child + mask_adult;
        };


        const getIcon = (maskAmount) => {

            if (maskAmount > 30) return greenIcon;
            else if (maskAmount <= 30 && maskAmount > 0) return goldIcon;
            else return redIcon;
        };

        return L.marker([store.lat, store.lng], {icon: getIcon(getMaskAmount(maskType))});
    };

    renderMarker = () => {

        const medicalStores = this.getMedicalStores();

        // remove all the markers in one go
        this.layerGroup.clearLayers();

        medicalStores.forEach(store => {
            const marker = this.getMarker(store).addTo(this.layerGroup);
            const content = ReactDOMServer.renderToString(<Tooltip medicalStore={store}/>);  // 將 react-element 轉換成 html-string
            marker.bindPopup(content, {className: 'popupCustom'});
        });

    };

    render() {

        // if props.center change fly to center ? => 外部點擊需要到達目標位置才飛

        return (
            <>
                <GeoLocated/>
                <div id='mapid' className={Styles.content}/>
            </>
        );
    }
}

const mapStateToProps = state => ({
    center: ReduxMap.Selector.getMapCenter(state),
    maskType: ReduxMap.Selector.getMaskType(state),
    maskData: ReduxMask.Selector.getMaskData(state),
    nearByMasks: ReduxMask.Selector.getNearByMasks(state),
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

