import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Configs from 'configs/googleMapConfig';

import Marker from './components/Marker';
import Tooltip from './components/Tooltip';

// redux
import {connect} from 'react-redux';
import ReduxMask from "redux/mask/actionReducer";

/*

{
  '0': {
    type: 'Feature',
    properties: {
      id: '5901012203',
      name: '博荃藥局',
      phone: '02 -27316736',
      address: '台北市松山區敦化北路4巷51號',
      mask_adult: 0,
      mask_child: 28,
      updated: '2020/02/11 10:16:38',
      available: '星期一上午看診、星期二上午看診、星期三上午看診、星期四上午看診、星期五上午看診、星期六上午看診、星期日上午休診、星期一下午看診、星期二下午看診、星期三下午看診、星期四下午看診、星期五下午看診、星期六下午看診、星期日下午休診、星期一晚上看診、星期二晚上看診、星期三晚上看診、星期四晚上看診、星期五晚上看診、星期六晚上看診、星期日晚上休診',
      note: '如遇國定連續假期,藥局公休',
      custom_note: '',
      website: '',
      county: '臺北市',
      town: '松山區',
      cunli: '中正里',
      service_periods: 'NNNNNNYNNNNNNYNNNNNNY',
      service_note: '如遇國定連續假期,藥局公休'
    },
    geometry: {
      type: 'Point',
      coordinates: [
        121.544742,
        25.050063
      ]
    }
  }
}

 */

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 25.034180,
            lng: 121.564517
        },
        zoom: 17
    };

    render() {

        const medicalStores = this.props.maskData.map(mask => ({
            lat: mask.geometry.coordinates[1],
            lng: mask.geometry.coordinates[0],
            medicalStores: {
                ...mask.properties,
                name: mask.properties.name,
                address: mask.properties.address, // 401 - 郵遞區號 , 需要查詢郵局系統
                time: '08:00~21:30', // 只有 available : 星期一上午看診、星期二上午看診、星期三上午看診、星期四上午看診
                phone: mask.properties.phone,
                leftMask: {
                    adult: mask.properties.mask_adult,
                    children: mask.properties.mask_child,
                },
            }
        }));

        const newMedicalStores = medicalStores.slice(0, 50);

        return (
            <div style={{height: '100%', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: Configs.key}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    options={{
                        zoomControl: false,
                        mapTypeControl: false,
                        streetViewControl: true,
                        rotateControl: true,
                        fullscreenControl: true,
                        scaleControl: true,
                    }}
                >
                    {
                        newMedicalStores.map(mask => (
                            <Marker
                                lat={mask.lat}
                                lng={mask.lng}
                                tooltip={<Tooltip medicalStore={mask.medicalStores}/>}
                            />
                        ))
                    }
                </GoogleMapReact>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    maskData: ReduxMask.Selector.getMaskData(state),
});

export default connect(mapStateToProps, null)(SimpleMap);
