import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Styles from './Map.module.css';
import Configs from 'configs/googleMapConfig';

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
                bootstrapURLKeys={{key: Configs.key}}
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
