import React from "react";
import Styles from './Footer.module.css';

class BigContent extends React.Component {

    render() {

        return (
            <div className='sm:flex xs:flex-col mb-4'>

                <div>
                    | 口罩地圖 ver 1.0 by
                    <a className={Styles.link} href='https://github.com/andrew781026/findMask' target='_blank'>
                        Andrew
                    </a>
                </div>
                <div>
                    <span className='sm:pl-12'>| 資料來源 : 衛福部</span>
                </div>

            </div>
        )
    }
}

const Footer = () => (
    <div className={`flex px-8 h-28 bg-black z-20 fixed pin-b pin-r ${Styles.root}`}>
        <BigContent/>
    </div>
);

export default Footer;
