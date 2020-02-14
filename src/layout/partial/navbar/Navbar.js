import React from "react";
import Styles from './Navbar.module.css';
import clockPng from 'assets/clock.png';
import DropDown from './DropDown';

// material component
import {Button} from '@material-ui/core';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReduxMap from "redux/map/actionReducer";
import ReduxMask from "redux/mask/actionReducer";

const medicalStores = [
    {
        name: '樹秀藥局',
        address: '401 台中市東區南京東路92號',
        time: '08 : 00 ~ 21 : 30',
        leftMask: {
            adult: 162,
            children: 12
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                121.544742,
                25.050063
            ]
        }
    },
    {
        name: '佳美藥局',
        address: '401 台中市東區南京東路92號',
        time: '08 : 00 ~ 21 : 30',
        leftMask: {
            adult: 106,
            children: 47
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                121.56066,
                25.04836
            ]
        }
    },
    {
        name: '敦化小林健保藥局',
        address: '401 台中市東區南京東路92號',
        time: '08 : 00 ~ 21 : 30',
        leftMask: {
            adult: 88,
            children: 7
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                121.558489,
                25.058709
            ]
        }
    },
    {
        name: '博宇藥局',
        address: '401 台中市東區南京東路92號',
        time: '08 : 00 ~ 21 : 30',
        leftMask: {
            adult: 180,
            children: 33
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                121.553125,
                25.057129
            ]
        }
    },
];


class Navbar extends React.Component {

    handleClick = (store, setMapCenter) => event => {

        const lat = store.lat;
        const lng = store.lng;
        setMapCenter({lat, lng, fly: true});
    };

    render() {

        const props = this.props;

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

        const newMedicalStores = medicalStores.slice(0, 50);

        return (
            <div className={Styles.content}>

                <div className={Styles.search_root}>
                    {/* 目前地圖視角之中心位置 */}
                    <div>中心位置</div>
                    <div className='flex'>
                        <span>lat：</span>
                        <input className='flex-1' value={props.center.lat}/>
                    </div>
                    <div className='flex'>
                        <span>lng：</span>
                        <input className='flex-1' value={props.center.lng}/>
                    </div>
                    <div className='mt-12'>距離</div>
                    <DropDown
                        value={1}
                        data={[
                            {value: 1, label: '5km'}
                        ]}
                    />
                    <div className='mt-12'>口罩類別</div>
                    <DropDown
                        value={1}
                        data={[
                            {value: 1, label: '成人'},
                            {value: 2, label: '兒童'},
                            {value: 3, label: '成人與兒童'},
                        ]}
                    />
                    <Button fullWidth variant="contained" color="primary"
                            style={{backgroundColor: '#06b66c', marginTop: '10px'}}>
                        搜尋
                    </Button>
                </div>

                <div className='px-8 py-4'>
                    共 5 家可買口罩
                </div>

                {
                    newMedicalStores.map((store, index) => (

                        <div className={Styles.card_root} key={`card-${index}`}
                             onClick={this.handleClick(store, props.actions.setMapCenter)}>
                            <div style={{fontWeight: 900, color: '#848484'}}>{store.name}</div>
                            <div style={{paddingTop: '2px'}}>
                                <div style={{fontSize: '10px', color: '#848484'}}>{store.address}</div>
                            </div>
                            <div className='flex items-center' style={{paddingTop: '2px', paddingBottom: '2px',}}>
                                <img src={clockPng} className='pr-4' alt="時鐘圖示"/>
                                <div style={{verticalAlign: 'middle', fontSize: '10px', color: '#a3a3a3'}}>
                                    {store.time}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className={Styles.adult_mask}>
                                    <div className='flex flex-1'>成人口罩</div>
                                    <div>{store.leftMask.adult}個</div>
                                </div>
                                <div className={Styles.children_mask}>
                                    <div className='flex flex-1'>兒童口罩</div>
                                    <div>{store.leftMask.children}個</div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
