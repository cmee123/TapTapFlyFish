import React from 'react';
import brown from './Images/brown.png'; 
import shill from './Images/imgbin_coin-florin-shilling-half-crown-pound-sterling-png.png'; 
import dnrB from './Images/images (1).jpg'; 
import fishClock from './Images/file.png'; 
import cast from './Images/c9ed64_0ea1c91073ad4b758866ae5821f122e1~mv2.png'; 
import pct from './Images/file (1).png'; 
import './styles.css';

function Header({fish, shillings, DNRBucks, FPS, catchChance, FPC}) {
    return (

<div className='header'>
    <div className="container">
        <div className='flex'>
        <div className='headerItem'>
            <p className='headerText'>{fish}</p>
            <img src={brown} alt='none'></img>
        </div>
        <div className='headerItem'>
            <p className='headerText'>{shillings}</p>
            <img src={shill} alt='none'></img>
        </div>
        <div className='headerItem'>
            <p className='headerText'>{DNRBucks}</p>
            <img src={dnrB} alt='none'></img>
        </div>
        <div className='headerItem'>
            <p className='headerText'>{FPS}</p>
            <img src={fishClock} alt='none'></img>
        </div>
        <div className='headerItem'>
            <p className='headerText'>{parseInt(catchChance*100)}%</p>
            <img src={cast} alt='none'></img>
        </div>
        <div className='headerItem' style={{"borderRight": "#232e3e 2px solid"}}>
            <p className='headerText'>{FPC}</p>
            <img src={pct} alt='none'></img>
        </div>
        </div>
    </div>
</div>
  );
}

export default Header;