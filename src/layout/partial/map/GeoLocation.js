// 參考資料 : https://no23reason.github.io/react-geolocated/readme

import React from "react";
import {geolocated} from "react-geolocated";

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReduxMap from "redux/map/actionReducer";

const geolocatedConfig = {
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
};

class GeoLocated extends React.Component {

    componentDidUpdate(prevProps) {

        if (prevProps.coords === this.props.coords) {

            return null;

        } else if (!this.props.isGeolocationAvailable) { //  Your browser does not support Geolocation

        } else if (!this.props.isGeolocationEnabled) { //  Geolocation is not enabled

        } else if (this.props.coords) { //  Geolocation has been got

            const latitude = this.props.coords.latitude;
            const longitude = this.props.coords.longitude;
            const altitude = this.props.coords.altitude;
            const heading = this.props.coords.heading;
            const speed = this.props.coords.speed;

            this.props.actions.setMapCenter({lat: latitude, lng: longitude, fly: true});
        }
    }

    render() {

        return null;
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        setMapCenter: ReduxMap.ActionCreator.setMapCenter,
    };

    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch,
    }
};

export default connect(null, mapDispatchToProps)(geolocated(geolocatedConfig)(GeoLocated));
