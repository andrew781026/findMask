import React from 'react';

// partial
import Navbar from './partial/navbar/Navbar';
import Footer from "./partial/footer/Footer";
import Toolbar from "./partial/toolbar/Toolbar";
import Hint from "./partial/hint/Hint";
import GoogleMap from "./partial/map/Map";

const App = (props) => {

    return (
        <div className='flex-col relative h-screen w-screen'>
            <Toolbar/>
            <Footer/>
            <Hint/>
            <Navbar/>
            <GoogleMap/>
        </div>
    );
};

export default App;
