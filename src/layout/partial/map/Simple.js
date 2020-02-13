import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Configs from 'configs/googleMapConfig';

import Marker from './components/Marker';
import Tooltip from './components/Tooltip';


class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 25.034180,
            lng: 121.564517
        },
        zoom: 17
    };

    render() {

        const medicalStores = [
            {
                name: '樹秀藥局',
                address: '401 台中市東區南京東路92號',
                time: '08:00~21:30',
                phone:'04-22422698',
                leftMask: {
                    adult: 162,
                    children: 12
                },
            }
        ];

        return (
            <div style={{height: '100%', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: Configs.key}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={25.034180}
                        lng={121.564517}
                        text="台北101"
                        tooltip={<Tooltip medicalStore={medicalStores[0]}/>}
                    />
                </GoogleMapReact>
            </div>
        )

        /*
        return (
            <div className='flex justify-center items-center w-full h-full'>
                <Marker
                    lat={25.034180}
                    lng={121.564517}
                    text="台北101"
                />
            </div>
        );
         */
    }
}

export default SimpleMap;
