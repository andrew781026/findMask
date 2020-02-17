import React from "react";
import Styles from './Toolbar.module.css';
import settingPng from 'assets/setting.png';
import linkPng from 'assets/link.png';
import calenderPng from 'assets/calender.png';
import moment from 'moment';

const getText = (number) => {

    const weekDay = moment().weekday();

    if (!number) return '請設定您的身分證尾碼';
    else if (weekDay === 0) return `您今日可以購買口罩歐！(尾數${number})`;
    else {

        if (number % 2 === 1) {

            // 1 . 3 . 5 => 奇
            if (weekDay % 2 === 1) return `您今日可以購買口罩歐！(尾數${number})`;
            else return `您明日才能購買口罩歐！(尾數${number})`;

        } else {

            // 2 . 4 . 6 => 偶
            if (weekDay % 2 === 0) return `您今日可以購買口罩歐！(尾數${number})`;
            else return `您明日才能購買口罩歐！(尾數${number})`;

        }
    }
};

// type : edit . buy . wait
const Toolbar = (props) => (
    <div className={`flex h-80 shadow-b z-20 relative ${Styles.root}`}>
        <div className='flex-col p-12 absolute pin-l font-900 text-white'>
            <div className='flex items-start'>
                <img className='pr-4' src={calenderPng} alt='日曆圖示'/>
                2020/
            </div>
            <div className='text-xl my-4'>02/10(一)</div>
            <div className='font-500' style={{fontSize: '12px'}}>如今日購買，下次最快可購買日為02/17(一)</div>
        </div>
        <div className={Styles.right_content}>
            <div className='flex-col flex-1 text-white mt-4 mx-8'>
                <p className={Styles.right_p}>民眾持本人 「健保卡」 ，每人現購 2 片，7 天內不可重複購買 </p>
                <p className={Styles.right_p}>可委託親友代為購買，一人限代持一張健保卡 </p>
                <p className={Styles.right_p}>兒童口罩僅限 12 歲以下兒童健保卡購買</p>
            </div>
            <div className={Styles.link}>
                <img src={linkPng} alt='健保署公告連結'/>
                <span>健保署公告連結</span>
            </div>
        </div>
    </div>
);

export default Toolbar;
