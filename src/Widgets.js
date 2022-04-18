import React from 'react';
import './Widgets.css';

function Widgets() {
  return (
    <div className='widgets'>
        <iframe title='Forest Area' style={{ border : "none", overflow : "hidden" }} src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Beech_Forest_%28AU%29%2C_Great_Otway_National_Park%2C_Beauchamp_Falls_--_2019_--_1271.jpg' width='280' height='150' scrolling='no' frameBorder='0' allowTransparency='true' allow='encrypted-media'></iframe>
        <p> Check out these beautiful forests! </p>
    </div>
  )
}

export default Widgets