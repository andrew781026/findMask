import React from "react";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        minWidth: 'calc(100% - 13.6rem)',
        maxWidth: 'calc(100% - 13.6rem)',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
    },
});

class BigContent extends React.Component {

    render() {

        return (
            <>
                <div className='flex items-center'>

                    <div className='pr-12'>

                        | 口罩地圖 ver 1.0 by Andrew {/* e<sup>πi</sup>+1=0*/}

                    </div>

                    <div className='pr-12'>

                        | 資料來源 : 衛福部

                    </div>

                </div>
            </>
        )
    }
}

const Footer = ({classes}) => (
    <div className={`flex h-24 bg-black z-20 fixed pin-b root`}>
        <BigContent/>
        { /*language=CSS*/}
        <style jsx>
            {`
                .root {

                    min-width: calc(100% - 13.6rem);
                    max-width: calc(100% - 13.6rem);
                    align-items: center;
                    justify-content: space-between;
                    color: white;

                }
            `}
        </style>
    </div>
);

export default withStyles(styles)(Footer);
