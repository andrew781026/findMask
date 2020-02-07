import React from "react";
import Styles from './Navbar.module.css';
import clockPng from 'assets/clock.png';

// material component
import {MenuItem, Select, Button, withStyles} from '@material-ui/core';

const StyledSelect = withStyles({
    root: {
        padding: '10px'
    }
})(Select);

const Navbar = (props) => (
    <div className='min-h-screen'>
        <div className={Styles.content}>

            <div className='p-12 flex-col' style={{borderBottom: '1px solid rgba(0,0,0,0.2)'}}>
                <div>機構</div>
                <StyledSelect variant="filled" fullWidth value={1}>
                    <MenuItem value={1}>特約藥局</MenuItem>
                </StyledSelect>
                <div className='mt-12'>距離</div>
                <StyledSelect variant="filled" fullWidth value={1}>
                    <MenuItem value={1}>5km</MenuItem>
                </StyledSelect>
                <div className='mt-12'>口罩類別</div>
                <StyledSelect variant="filled" fullWidth value={1}>
                    <MenuItem value={1}>成人</MenuItem>
                    <MenuItem value={2}>兒童</MenuItem>
                    <MenuItem value={3}>成人與兒童</MenuItem>
                </StyledSelect>
                <Button fullWidth variant="contained" color="primary"
                        style={{backgroundColor: '#06b66c', marginTop: '10px'}}>
                    搜尋
                </Button>
            </div>

            <div className='px-8 py-4'>
                共 5 家可買口罩
            </div>

            <div className='flex-col px-8 py-4' style={{borderBottom: '1px solid rgba(0,0,0,0.2)'}}>
                <div style={{fontWeight: 900, color: '#848484'}}>樹秀藥局</div>
                <div style={{paddingTop: '2px'}}>
                    <div style={{fontSize: '10px', color: '#848484'}}>401 台中市東區南京路92號</div>
                </div>
                <div className='flex items-center' style={{paddingTop: '2px', paddingBottom: '2px',}}>
                    <img src={clockPng} className='pr-4' alt="時鐘圖示"/>
                    <div style={{verticalAlign: 'middle', fontSize: '10px', color: '#a3a3a3'}}>08:00 ~ 21:30</div>
                </div>
                <div className='flex' style={{fontSize: '12px'}}>
                    <div
                        className='flex flex-1 bg-green text-white p-4'
                        style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}
                    >
                        <div className='flex flex-1'>成人口罩</div>
                        <div>162個</div>
                    </div>
                    <div
                        className='flex flex-1 bg-yellow-dark text-white p-4'
                        style={{borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}
                    >
                        <div className='flex flex-1'>兒童口罩</div>
                        <div>12個</div>
                    </div>
                </div>
            </div>

            <div className='flex-col px-8 py-4' style={{borderBottom: '1px solid rgba(0,0,0,0.2)'}}>
                <div style={{fontWeight: 900, color: '#848484'}}>樹秀藥局</div>
                <div style={{paddingTop: '2px'}}>
                    <div style={{fontSize: '10px', color: '#848484'}}>401 台中市東區南京路92號</div>
                </div>
                <div className='flex items-center' style={{paddingTop: '2px', paddingBottom: '2px',}}>
                    <img src={clockPng} className='pr-4' alt="時鐘圖示"/>
                    <div style={{verticalAlign: 'middle', fontSize: '10px', color: '#a3a3a3'}}>08:00 ~ 21:30</div>
                </div>
                <div className='flex' style={{fontSize: '12px'}}>
                    <div
                        className='flex flex-1 bg-green text-white p-4'
                        style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}
                    >
                        <div className='flex flex-1'>成人口罩</div>
                        <div>162個</div>
                    </div>
                    <div
                        className='flex flex-1 bg-yellow-dark text-white p-4'
                        style={{borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}
                    >
                        <div className='flex flex-1'>兒童口罩</div>
                        <div>12個</div>
                    </div>
                </div>
            </div>

            <div className='flex-col px-8 py-4' style={{borderBottom: '1px solid rgba(0,0,0,0.2)'}}>
                <div style={{fontWeight: 900, color: '#848484'}}>樹秀藥局</div>
                <div style={{paddingTop: '2px'}}>
                    <div style={{fontSize: '10px', color: '#848484'}}>401 台中市東區南京路92號</div>
                </div>
                <div className='flex items-center' style={{paddingTop: '2px', paddingBottom: '2px',}}>
                    <img src={clockPng} className='pr-4' alt="時鐘圖示"/>
                    <div style={{verticalAlign: 'middle', fontSize: '10px', color: '#a3a3a3'}}>08:00 ~ 21:30</div>
                </div>
                <div className='flex' style={{fontSize: '12px'}}>
                    <div
                        className='flex flex-1 bg-green text-white p-4'
                        style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}
                    >
                        <div className='flex flex-1'>成人口罩</div>
                        <div>162個</div>
                    </div>
                    <div
                        className='flex flex-1 bg-yellow-dark text-white p-4'
                        style={{borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}
                    >
                        <div className='flex flex-1'>兒童口罩</div>
                        <div>12個</div>
                    </div>
                </div>
            </div>

            <div className='flex-col px-8 py-4' style={{borderBottom: '1px solid rgba(0,0,0,0.2)'}}>
                <div style={{fontWeight: 900, color: '#848484'}}>樹秀藥局</div>
                <div style={{paddingTop: '2px'}}>
                    <div style={{fontSize: '10px', color: '#848484'}}>401 台中市東區南京路92號</div>
                </div>
                <div className='flex items-center' style={{paddingTop: '2px', paddingBottom: '2px',}}>
                    <img src={clockPng} className='pr-4' alt="時鐘圖示"/>
                    <div style={{verticalAlign: 'middle', fontSize: '10px', color: '#a3a3a3'}}>08:00 ~ 21:30</div>
                </div>
                <div className='flex' style={{fontSize: '12px'}}>
                    <div
                        className='flex flex-1 bg-green text-white p-4'
                        style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}
                    >
                        <div className='flex flex-1'>成人口罩</div>
                        <div>162個</div>
                    </div>
                    <div
                        className='flex flex-1 bg-yellow-dark text-white p-4'
                        style={{borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}
                    >
                        <div className='flex flex-1'>兒童口罩</div>
                        <div>12個</div>
                    </div>
                </div>
            </div>


        </div>
    </div>
);

export default Navbar;
