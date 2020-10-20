import React from "react";

// css
import Styles from './Navbar.module.css';
import DropDown from './DropDown';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReduxMap from "redux/map/actionReducer";
import ReduxMask from "redux/mask/actionReducer";

// assets
import phoneSvg from 'assets/phone-solid.svg';
import bigPhoneSvg from 'assets/phone.svg';
import settingSvg from 'assets/setting.svg';

// material-ui
import {SwipeableDrawer} from "@material-ui/core";

class MdNavbar extends React.Component {

    handleClick = (store, setMapCenter) => event => {

        const lat = store.lat;
        const lng = store.lng;
        setMapCenter({lat, lng, fly: true});
        this.props.toggleDrawer && this.props.toggleDrawer();
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

    render() {

        const props = this.props;
        const {setDistance, setMaskType} = this.props.actions;

        const newMedicalStores = this.getMedicalStores();

        return (
            <div className={Styles.content}>

                <div className={Styles.search_root}>
                    <div>距離</div>
                    <DropDown
                        value={2}
                        data={[
                            {value: 1, label: '100m'},
                            {value: 2, label: '500m'},
                            {value: 3, label: '1km'},
                            {value: 4, label: '3km'},
                        ]}
                        onChange={(newValue) => {

                            if (newValue === 1) setDistance({meter: 100});
                            else if (newValue === 2) setDistance({meter: 500});
                            else if (newValue === 3) setDistance({meter: 1000});
                            else if (newValue === 4) setDistance({meter: 3 * 1000});
                        }}
                    />
                    <div className='mt-12'>口罩類別</div>
                    <DropDown
                        value={1}
                        data={[
                            {value: 1, label: '成人'},
                            {value: 2, label: '兒童'},
                            {value: 3, label: '成人與兒童'},
                        ]}
                        onChange={(newValue) => {

                            // maskType : adult . child
                            if (newValue === 1) setMaskType('adult');
                            else if (newValue === 2) setMaskType('child');
                            else if (newValue === 3) setMaskType('adult & child');
                        }}
                    />
                </div>

                <div className='px-8 py-4'>
                    共 {newMedicalStores ? newMedicalStores.length : 0} 家可買口罩
                </div>

                {
                    newMedicalStores.map((store, index) => (

                        <div className={Styles.card_root} key={`card-${index}`}
                             onClick={this.handleClick(store, props.actions.setMapCenter)}>
                            <div className='flex'>
                                <div className='flex-1' style={{fontWeight: 900, color: '#848484'}}>{store.name}</div>
                                <a href={`tel:+886-${store.phone}`} onClick={(e) => {
                                    e.stopPropagation();  //  <------ Here is the magic
                                }}>
                                    <img src={bigPhoneSvg}
                                         style={{paddingRight: '3px', paddingLeft: '3px'}}
                                         height='20px'
                                         alt="電話"/>
                                </a>
                            </div>
                            <div style={{paddingTop: '2px'}}>
                                <div style={{fontSize: '10px', color: '#848484'}}>{store.address}</div>
                            </div>
                            <div className='flex items-center' style={{paddingTop: '2px', paddingBottom: '2px',}}>
                                <img src={phoneSvg}
                                     style={{paddingRight: '3px', paddingLeft: '3px'}}
                                     height='10px'
                                     alt="電話圖示"/>
                                <div style={{verticalAlign: 'middle', fontSize: '10px', color: '#a3a3a3'}}>
                                    {store.phone}
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

class LeftDrawer extends React.Component {

    toggleDrawer = () => this.props.actions.toggleDrawer();

    render() {

        return (
            <SwipeableDrawer
                anchor="left"
                open={this.props.drawerOpen}
                onOpen={this.toggleDrawer}
                onClose={this.toggleDrawer}
            >
                <MdNavbar {...this.props} toggleDrawer={this.toggleDrawer}/>
            </SwipeableDrawer>
        )
    }
}

const Navbar = (props) => (
    <>
        <div className="hidden-xs-only">
            <MdNavbar {...props}/>
        </div>
        <div className="hidden-sm-and-up">
            <LeftDrawer {...props}/>
            <div className={Styles.setting} onClick={() => setTimeout(props.actions.toggleDrawer, 100)}>
                <img src={settingSvg} height='20px' alt="設定"/>
            </div>
        </div>
    </>
);

const mapStateToProps = state => ({
    center: ReduxMap.Selector.getMapCenter(state),
    drawerOpen: ReduxMap.Selector.getDrawerOpen(state),
    maskData: ReduxMask.Selector.getMaskData(state),
    nearByMasks: ReduxMask.Selector.getNearByMasks(state),
});

const mapDispatchToProps = (dispatch) => {
    const actions = {
        setMapCenter: ReduxMap.ActionCreator.setMapCenter,
        setDistance: ReduxMap.ActionCreator.setDistance,
        setMaskType: ReduxMap.ActionCreator.setMaskType,
        toggleDrawer: ReduxMap.ActionCreator.toggleDrawer,
    };

    return {
        actions: bindActionCreators(actions, dispatch),
        dispatch,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
