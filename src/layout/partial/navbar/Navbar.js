import React from "react";
import Styles from './Navbar.module.css';
import clockPng from 'assets/clock.png';
import DropDown from './DropDown';

// material component
import {Button} from '@material-ui/core';

const medicalStores = [
    {
        name: '樹秀藥局',
        address: '401 台中市東區南京東路92號',
        time: '08 : 00 ~ 21 : 30',
        leftMask: {
            adult: 162,
            children: 12
        },
    },
    {
        name: '佳美藥局',
        address: '401 台中市東區南京東路92號',
        time: '08 : 00 ~ 21 : 30',
        leftMask: {
            adult: 106,
            children: 47
        },
    },
    {
        name: '敦化小林健保藥局',
        address: '401 台中市東區南京東路92號',
        time: '08 : 00 ~ 21 : 30',
        leftMask: {
            adult: 88,
            children: 7
        },
    },
    {
        name: '博宇藥局',
        address: '401 台中市東區南京東路92號',
        time: '08 : 00 ~ 21 : 30',
        leftMask: {
            adult: 180,
            children: 33
        },
    },
];

const Navbar = (props) => (
    <div className='min-h-screen'>
        <div className={Styles.content}>

            <div className={Styles.search_root}>
                <div>機構</div>
                <DropDown
                    value={1}
                    data={[
                        {value: 1, label: '特約藥局'}
                    ]}
                />
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
                medicalStores.map(store => (

                    <div className={Styles.card_root}>
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
    </div>
);

export default Navbar;
