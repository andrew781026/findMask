import React from "react";
import Styles from './Hint.module.css';

const Hint = (props) => (
    <div className={Styles.root}>
        {/*<div className={Styles.all_type}>顯示全部</div>*/}
        <div className={Styles.many_mask}>31 ~</div>
        <div className={Styles.less_mask}>1 ~ 30</div>
        <div className={Styles.no_mask}>無庫存</div>
    </div>
);

export default Hint;
