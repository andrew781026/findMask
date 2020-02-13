import React from "react";

// styles
import Styles from "./Tooltip.module.css";

// assets
import clockSvg from "assets/clock-regular.svg";
import phoneSvg from "assets/phone-solid.svg";
import adultFaceSvg from "assets/adult-face.svg";
import childFaceSvg from "assets/child-face.svg";


const Tooltip = ({medicalStore}) => (
    <div className={Styles.card_root}>

        <div className={Styles.text_root}>

            <div className='pb-4'>
                <span className={Styles.text_name}>{medicalStore.name}</span>
            </div>
            <div className='pb-4'>
                <span className={Styles.text_address}>
                    {medicalStore.address}
                </span>
            </div>
            <div className='flex'>
                <div className='flex-1 flex items-center'>
                    <img className='px-4' height='12px' src={clockSvg} alt="時鐘 :　"/>
                    <span className={Styles.time_letter}>{medicalStore.time}</span>
                </div>
                <div className='flex-1 flex items-center'>
                    <img className='px-4' src={phoneSvg} height='12px' alt="電話 : "/>
                    <span className={Styles.phone_letter}>{medicalStore.phone}</span>
                </div>
            </div>
        </div>

        <div className='flex'>
            <div className={Styles.adult_mask}>
                <div>成人口罩數量</div>
                <div className='w-full flex items-end pt-4'>
                    <div className='flex flex-1 justify-center items-center'>
                        <img src={adultFaceSvg} height='37px' alt="成人頭像"/>
                    </div>
                    <div>
                        <span className='text-16 pr-4'>{medicalStore.leftMask.adult}</span> 個
                    </div>
                </div>
            </div>
            <div className={Styles.children_mask}>
                <div>兒童口罩數量</div>
                <div className='w-full flex items-end pt-4'>
                    <div className='flex flex-1 justify-center items-center'>
                        <img src={childFaceSvg} height='40px' alt="兒童頭像"/>
                    </div>
                    <div>
                        <span className='text-16 pr-4'>{medicalStore.leftMask.children}</span> 個
                    </div>
                </div>
            </div>

        </div>
    </div>
);

export default Tooltip;
