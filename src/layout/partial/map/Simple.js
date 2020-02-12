import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Styles from './Map.module.css';

const AnyReactComponent = ({text}) => (
    <div className={Styles.redCircle}>
        <span className={Styles.tooltiptext}>{text}</span>
    </div>
);

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 25.034180,
            lng: 121.564517
        },
        zoom: 20
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDFP0Eo3_s2rK0o-HsnDo1xgYg4nvb7B_E'}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={25.034180}
                    lng={121.564517}
                    text="台北101"
                />
            </GoogleMapReact>
        );
    }
}

export default SimpleMap;
