import React from 'react';

// partial
import Navbar from './partial/navbar/Navbar';
import Footer from "./partial/footer/Footer";
import Toolbar from "./partial/toolbar/Toolbar";
import GoogleMap from "./partial/map/Map";

const App = (props) => {

    return (
        <div className='flex relative h-screen w-screen'>

            <Toolbar/>
            <Navbar/>

            <div className='flex flex-1 flex-col relative overflow-hidden'>

                <div className='flex flex-1 flex-col relative overflow-y-auto'>

                    <GoogleMap/>

                </div>

                <Footer/>

            </div>
        </div>
    );
};

export default App;
