import React from "react";
import Styles from './Footer.module.css';

class BigContent extends React.Component {

    render() {

        return (
            <div className='flex mb-4'>

                | 口罩地圖 ver 1.0 by
                <a className={Styles.link} href='https://github.com/andrew781026' target='_blank'>
                    Andrew
                </a>

                {/* e<sup>πi</sup>+1=0*/}

                <span className='pl-12'>| 資料來源 : 衛福部</span>

            </div>
        )
    }
}

const Footer = () => (
    <div className={`flex px-8 h-24 bg-black z-20 fixed pin-b pin-r ${Styles.root}`}>
        <BigContent/>
    </div>
);

export default Footer;
