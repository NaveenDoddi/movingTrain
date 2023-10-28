import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from './Button.js'
import Timer from './timer.js';
import Sjunction from './southTrain.js';
import Njuction from './northTrain.js';
import reportWebVitals from './reportWebVitals';
import Run1 from './data.js';
import Cal from './calculator.js';



export default function Run(){
    return(<>
    {/* <Sjunction />
    <Njuction /> */}
    {/* <Run1 /> */}
    <Cal />

    </>)
    
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Run />)
reportWebVitals();




