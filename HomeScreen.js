import './styles.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import castImg from './Images/IMG_5656.jpg'; 
import shill from './Images/imgbin_coin-florin-shilling-half-crown-pound-sterling-png.png'; 
import WB from './Images/Olive-Black-Woolly-Bugger.png'; 
import qmark from './Images/—Pngtree—vector question mark icon_3989724.png'
import hopper from './Images/ezgif-3-d11766f974.jpg'
import PN from './Images/ezgif-3-71a45c12e0.jpg'


import { useSelector, useDispatch } from 'react-redux'
import {
  catchFish,
  sellFish,
  spendFish,
  getFish,
  spendShillings,
  getShillings, 
  spendDNRBucks,
  getDNRBucks,
  increaseDPS,
  updateFPS,
  increaseCatchChance,
  increaseFPC,
  decreaseCatchChance,
  decreaseFPC,
  selectfish,
  selectDNRBucks,
  selectShillings,
  selectCC,
  selectFPC,
  selectFPS
} from './currenciesSlice'

import { hire, selectAnglers } from './autoSlice'
import { equip, unequip, unlock, selectFlybox } from './flyboxSlice'
import { 
  selectDNR,
  fund,
  decreaseBudget,
  increaseEducation,
  increaseHabitatRestoration,
  increaseParkBuilding,
  increaseStocking
} from './dnrSlice'

import {
  selectLootbox,
  buyBox
} from './lootboxSlice'

import {
  selectLocation,
  increaseLevel,
  updateCCBonus,
  updateFPCBonus
} from './locationSlice'


{/*3 columns:
- Current fly stats (picture?) DONE
- Idle fish and dnr bucks DONE
- Location DONE
- Tidy up graphics
- Add more dnr branding
- Balance the game
- Add save functionality with redux persist DONE?!?!
- Have idle game functionality when the app is closed
- Add a tutorial intro
*/}

function HomeScreen() {

  const dispatch = useDispatch();

  // Page Screens
  const [showMarket, setShowMarket] = useState(true);
  const [showDNR, setShowDNR] = useState(false);
  const [showLoc, setShowLoc] = useState(false);
  const [showFlybox, setShowFlybox] = useState(false);

  //currencies
  const fish = useSelector(selectfish);
  const shillings = useSelector(selectShillings);
  const DNRBucks = useSelector(selectDNRBucks);
  const FPS = useSelector(selectFPS);
  const catchChance = useSelector(selectCC);
  const FPC = useSelector(selectFPC);

  //Anglers
  const anglers = useSelector(selectAnglers);

  // Flies
  const flies = useSelector(selectFlybox);
  const [equippedFly, setEquippedFly] = useState(null);

  // DNR
  const dnr = useSelector(selectDNR);
  const dnrPrices = [100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000];

  //Lootboxes
  const lootboxes = useSelector(selectLootbox);

  // Location
  const location = useSelector(selectLocation);
  console.log(location);

  const locationPrice = [50, 100, 1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000];

  //Input Boxes
  const [sellFishValue, setSellFishValue] = useState('');
  const [fundDNRValue, setFundDNRValue] = useState('');

  const dnrClick = () => {
    setShowMarket(false);
    setShowLoc(false);
    setShowFlybox(false);
    setShowDNR(true);
  }
  const locClick = () => {
    setShowMarket(false);
    setShowDNR(false);
    setShowFlybox(false);
    setShowLoc(true);
  }
  const marketClick = () => {
    setShowDNR(false);
    setShowLoc(false);
    setShowFlybox(false);
    setShowMarket(true);
  }
  const flyboxClick = () => {
    setShowDNR(false);
    setShowLoc(false);
    setShowMarket(false);
    setShowFlybox(true);
  }

  const handleSellFishChange = (event) => {
    setSellFishValue(event.target.value);
  }

  const handlefundDNRBudget = (event) => {
    setFundDNRValue(event.target.value);
  }

  //Get idle currencies
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getFish());
      dispatch(getDNRBucks());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const cast = () => {
    const randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);
    if(randomNumber <= catchChance*10) {
      dispatch(catchFish());
    } else {
      console.log("no");
    }
    
  }

  const convertFish = () => {
    if(fish >= sellFishValue) {
      dispatch(sellFish(sellFishValue));
    } else {
      alert("Not enough fish!!");
    }
    setSellFishValue('');
  }

  const equipFly = (e) => {
    let n = e.target.id;
    if(flies[n].unlocked) {
      if(equippedFly > 0) {
        //Remove impact of the currently equipped fly
        dispatch(unequip(equippedFly));
        dispatch(decreaseCatchChance(flies[equippedFly]));
        dispatch(decreaseFPC(flies[equippedFly]));
      }
      // Update multipliers
      dispatch(increaseCatchChance(flies[n].CC));
      dispatch(increaseFPC(flies[n].FPC));
      //Equip the new fly
      dispatch(equip(n));
      setEquippedFly(n);
    } else {
      alert("Fly is not unlocked :/")
    }
  }

  const hireAngler = (e) => {
    let n = e.target.id;
    if(anglers[n].price <= shillings) {
      dispatch(hire(n));
      dispatch(spendShillings(anglers[n].price));
      dispatch(updateFPS(anglers[n].fps));
    } else {
      alert("not eough shillings!");
    }
  }

  const fundDNR = () => {
    if(shillings >= fundDNRValue) {
      dispatch(spendShillings(fundDNRValue));
      dispatch(fund(fundDNRValue));
    } else {
      alert("not eough shillings!");
    }
    setFundDNRValue('');
  }

  const buyHR = () => {
    if(dnr.budget >= dnrPrices[dnr.habitatRestoration]) {
      dispatch(decreaseBudget(dnrPrices[dnr.habitatRestoration]));
      dispatch(increaseHabitatRestoration(dnrPrices[dnr.habitatRestoration]));
      dispatch(increaseDPS());
    } else {
      alert("Not enough budget!!");
    }
  }
  const buyS = () => {
    if(dnr.budget >= dnrPrices[dnr.stocking]) {
      dispatch(decreaseBudget(dnrPrices[dnr.stocking]));
      dispatch(increaseStocking(dnrPrices[dnr.stocking]));
      dispatch(increaseDPS());
    } else {
      alert("Not enough budget!!");
    }
  }
  const buyE = () => {
    if(dnr.budget >= dnrPrices[dnr.education]) {
      dispatch(decreaseBudget(dnrPrices[dnr.education]));
      dispatch(increaseEducation(dnrPrices[dnr.education]));
      dispatch(increaseDPS());
    } else {
      alert("Not enough budget!!");
    }
  }
  const buyPB = () => {
    if(dnr.budget >= dnrPrices[dnr.parkBuilding]) {
      dispatch(decreaseBudget(dnrPrices[dnr.parkBuilding]));
      dispatch(increaseParkBuilding(dnrPrices[dnr.parkBuilding]));
      dispatch(increaseDPS());
    } else {
      alert("Not enough budget!!");
    }
  }

  const buyLootbox = (e) => {
    let n = e.target.id;
    if(fish >= parseInt(lootboxes[n].price*lootboxes[n].multiplier)) {
      dispatch(spendFish(parseInt(lootboxes[n].price*lootboxes[n].multiplier)));
      dispatch(buyBox(n));
      const randomNumber = Math.floor(Math.random() * 100)+1;
      let rn2;
        if( randomNumber <= lootboxes[n].cChance) {
          console.log("yes");
          rn2 = Math.floor(Math.random() * 4)+1;
          if(!flies[rn2].unlocked) {
            dispatch(unlock(rn2));
            alert("New Fly!! You have recieved a Common " + flies[rn2].name + ".");
          } else {
            dispatch(getShillings(parseInt(lootboxes[n].price*lootboxes[n].multiplier*2)))
            alert("Fly already owned. You have recieved " + parseInt(lootboxes[n].price*lootboxes[n].multiplier*2) + " shillings.")
          }
          }
        else if( randomNumber <= lootboxes[n].cChance + lootboxes[n].rChance) {
          rn2 = Math.floor(Math.random() * 7)+4;
          if(!flies[rn2].unlocked) {
            dispatch(unlock(rn2));
            alert("New Fly!! You have recieved a Rare " + flies[rn2].name + ".");
          } else {
            dispatch(getShillings(parseInt(lootboxes[n].price*lootboxes[n].multiplier*2)))
            alert("Fly already owned. You have recieved " + parseInt(lootboxes[n].price*lootboxes[n].multiplier*2) + " shillings.")
          }
        }
        else if( randomNumber <= lootboxes[n].cChance + lootboxes[n].rChance + lootboxes[n].eChance) {
          rn2 = Math.floor(Math.random() * 10)+7;
          if(!flies[rn2].unlocked) {
            dispatch(unlock(rn2));
            alert("New Fly!! You have recieved an Epic " + flies[rn2].name + ".");
          } else {
            dispatch(getShillings(parseInt(lootboxes[n].price*lootboxes[n].multiplier*2)))
            alert("Fly already owned. You have recieved " + parseInt(lootboxes[n].price*lootboxes[n].multiplier*2) + " shillings.")
          }
        }
        else if( randomNumber <= lootboxes[n].cChance + lootboxes[n].rChance + lootboxes[n].eChance + lootboxes[n].lChance) {
          rn2 = Math.floor(Math.random() * 13)+10;
          if(!flies[rn2].unlocked) {
            dispatch(unlock(rn2));
            alert("New Fly!! You have recieved a Legendary " + flies[rn2].name + ".");
          } else {
            dispatch(getShillings(parseInt(lootboxes[n].price*lootboxes[n].multiplier*2)))
            alert("Fly already owned. You have recieved " + parseInt(lootboxes[n].price*lootboxes[n].multiplier*2) + " shillings.")
          }
        }
        else {
          dispatch(getShillings(parseInt(lootboxes[n].price*lootboxes[n].multiplier/2)))
          alert("No fly was found in this box. You have recieved " + parseInt(lootboxes[n].price*lootboxes[n].multiplier/2) + " shillings.")
        }
    } else {
      alert("Not enough fish!! **sad emoji**");
    }
  }

  const upgradeLocation = (e) => {
    let n = e.target.id;
    if(DNRBucks >= locationPrice[location[n]] && location[n] < 10) {
      dispatch(spendDNRBucks(locationPrice[location[n]]))
      dispatch(increaseLevel(n));
      const total = location.waterQuality +
      location.habitatQuality +
      location.wildlifeDiversity +
      location.fishAbundance +
      location.fishQuality;

      if(catchChance + (total/100) > 1) {
        dispatch(increaseCatchChance(1-catchChance));
      } else {
        dispatch(increaseCatchChance(total/500));
      }

      dispatch(updateCCBonus(total/500));
      dispatch(updateFPCBonus(total*5));

      dispatch(increaseFPC(total*5));
      
    } else {
      alert("Not enough DNR Bucks!");
    }
  }

  return (

    <div style={{
      display: "grid",
      gridTemplateRows: "70px calc(100vh - 70px)", // First column for the header, second column for the rest
      height: "100vh",
      width: "100%",
      position: "fixed"
    }}>
      <Header 
        fish={fish} 
        shillings={shillings}
        DNRBucks={DNRBucks}
        FPS={FPS}
        catchChance={catchChance}
        FPC={FPC}
        style={{ gridColumn: "1" }} /> {/* Header with fixed width */}
    <div className='homeLayout container'>
      <div className='grid'>
        <button className='cast' onClick={cast}>Cast</button>
        <div className='flyBioWrapper'>
          <div className='card'>
            {equippedFly > 0 ?
            <div className='flex'>
                  <img src={
                    flies[equippedFly].name == "Woolly Bugger" ? WB :
                    flies[equippedFly].name == "Hopper" ? hopper : 
                    PN
                  }></img>
                  <div className='flyTextWrapper'>
                    <div className='flex'>
                      <p className='flyTitle'>{flies[equippedFly].name}</p>
                      <p className='subtext'>Rarity: {
                        equippedFly <= 3 ? "Common" :
                        equippedFly <= 6 ? "Uncommon" : 
                        equippedFly <= 9 ? "Rare" :
                        equippedFly <= 12 ? "Epic" :
                        "Legendary"
                      }</p>
                      <p className='subtext'>Catch Chance Bonus: {parseInt(flies[equippedFly].CC*100)}%</p>
                      <p className='subtext'>Fish Per Cast Bonus: {flies[equippedFly].FPC}</p>
                      <button className='solidButton' onClick={flyboxClick}>Fly Box</button>
                    </div>
                    </div>
                    </div> : 
                    <div className='flex'>
                      <img src={qmark}></img>
                      <div className='flyTextWrapper'>
                        <div className='flex'>
                          <p className='flyTitle'>Visit the flybox to equip a fly!!</p>
                          <button className='solidButton' onClick={flyboxClick}>Fly Box</button>
                        </div>
                      </div>
                    </div>}
          </div>  
        </div>
        
        <div className='gameInfoWrapper'>
          <div className='flex'>
            <div className='card'>
              <p className='flyTitle'>DNR</p>
              <p className='subtext'>PR: {dnr.productionRate} B/S</p>
              <p className='subtext'>Budget: ${dnr.budget}</p>
              <button className='solidButton' onClick={dnrClick}>DNR</button>
            </div>
            <div className='card'>
              <p className='flyTitle'>Location</p>
              <p className='subtext'>CC Bonus: {(location.CCBonus*100).toFixed(1)}%</p>
              <p className='subtext'>FPC Bonus: {location.FPCBonus}</p>
              <button className='solidButton' onClick={locClick}>Location</button>
            </div>
          </div>
        </div>

        {showMarket && 
        <div className='fishMarketWrapper'>
          <div className='flex'>
            <h1>Fish Market</h1>
            <p className='flyTitle'>Sell Fish</p>
            <div className='convertFlex'>
              <p className='subtext'>Fish: </p>
              <input className='fishInput' type="text" value={sellFishValue} onChange={handleSellFishChange} />
            </div>
            <p className='subtext'>Shillings: 200</p>
            <button className='solidButton' onClick={convertFish}>Convert</button>
            <p className='flyTitle'>Loot Boxes</p>

            <div className='lootBoxFlex'>
            {Object.entries(lootboxes).map(([n, box]) => 
              <div className='card'>
                <div className='flex'>
                  <p className='flyTitle'>{box.name}</p>
                  <p className='lbtext'>{parseInt(box.price*box.multiplier)} S</p>
                  <button className='solidButton' onClick={e => buyLootbox(e, "id")} id={n}>Buy</button>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>}
        {/* Fly Box Page */}
        {showFlybox && 
        <div className='fishMarketWrapper flybox'>
          <div className='flex'>
            <h1>Fly Box</h1>
            <div className='grid'>
              {Object.entries(flies).map(([n,  fly]) => 
                <div className='card' style={
                    fly.equipped ? {backgroundColor: "gold"} : 
                    !fly.unlocked ? {backgroundColor: "white"} :
                    n<=3 ? {backgroundColor: "lightGray"} : 
                    n <= 6 ? {backgroundColor: "lightGreen"} : 
                    n <= 9 ? {backgroundColor: "lightBlue"} : 
                    n <= 12 ? {backgroundColor: "#CBC3E3"} : 
                    {backgroundColor: "#FFD580"}
                  }>
                  <p className='fbTitle'>{ fly.name}</p>
                  <p>FPC Bonus: { fly.FPC}</p>
                  <p>CC Bonus: { fly.CC*100}%</p>
                  { fly.equipped ? <p className='textButton' onClick={e => equipFly(e, "id")} id={n}>Equipped</p> : 
                  fly.unlocked ? <p className='textButton' onClick={e => equipFly(e, "id")} id={n}>Equip</p> : 
                  <p className='textButton' onClick={e => equipFly(e, "id")} id={n}>Locked</p>}
                </div>
              )}
            </div>
            <button className='solidButton' onClick={marketClick}>Market</button>
          </div>
        </div>}

        {showDNR && 
        <div className='fishMarketWrapper DNRPage'>
          <div className='flex'>
            <h1>Department of Natural Resources</h1>
            <p className='flyTitle'>Budget: ${dnr.budget}</p>
            <div className='convertFlex'>
              <input className='budgetInput' type="text" value={fundDNRValue} onChange={handlefundDNRBudget}></input>
              <button className='solidButton' onClick={fundDNR}>Fund</button>
            </div>
            <div className='lootBoxFlex'>
              <div className='card'>
                <div className='flex'>
                  <p className='flyTitle'>Stocking</p>
                  <p className='lbtext'>{dnrPrices[dnr.stocking]} S</p>
                  <button className='solidButton' onClick={buyS}>Buy</button>
                </div>
                <div className='flexBar'>
                  <div className='greenBar' style={{width: `${dnr.stocking*10}%`}}></div>
                  <div className='grayBar' style={{width: `${100-dnr.stocking*10}%`}}></div>
                </div>
              </div>
              <div className='card'>
              <div className='flex'>
                <p className='flyTitle'>Habitat Restoration</p>
                <p className='lbtext'>{dnrPrices[dnr.habitatRestoration]} S</p>
                <button className='solidButton' onClick={buyHR}>Buy</button>

              </div>
              <div className='flexBar'>
                <div className='greenBar' style={{width: `${dnr.habitatRestoration*10}%`}}></div>
                  <div className='grayBar' style={{width: `${100-dnr.habitatRestoration*10}%`}}></div>
                </div>
              </div>
              <div className='card'>
              <div className='flex'>
                <p className='flyTitle'>Education</p>
                <p className='lbtext'>{dnrPrices[dnr.education]} S</p>
                <button className='solidButton' onClick={buyE}>Buy</button>
              </div>
              <div className='flexBar'>
                <div className='greenBar' style={{width: `${dnr.education*10}%`}}></div>
                  <div className='grayBar' style={{width: `${100-dnr.education*10}%`}}></div>
                </div>
              </div>
              <div className='card'>
              <div className='flex'>
                <p className='flyTitle'>Park Building</p>
                <p className='lbtext'>{dnrPrices[dnr.parkBuilding]} S</p>
                <button className='solidButton' onClick={buyPB}>Buy</button>
              </div>
              <div className='flexBar'>
                <div className='greenBar' style={{width: `${dnr.parkBuilding*10}%`}}></div>
                  <div className='grayBar' style={{width: `${100-dnr.parkBuilding*10}%`}}></div>
                </div>
              </div>
              <button className='solidButton marketButton' onClick={marketClick}>Market</button>

            </div>
          </div>
        </div>}

        {showLoc && 
        <div className='fishMarketWrapper DNRPage'>
          <div className='flex'>
            <h1>Location</h1>
            <p className='flyTitle'>Name: {location.name}</p>
            <div className='lootBoxFlex'>
              {Object.entries(location).map(([n,  val]) => 
                {if(n != "name" && n != "CCBonus" && n != "FPCBonus") {
                  let ind;
                  for(let k=1; k<n.length; k++) {
                    if(n[k] == n[k].toUpperCase()) {
                      ind = k;
                    }
                  }
                  let label = n[0].toUpperCase() + n.slice(1, ind) + " " + n.slice(ind);
                  return(
                  <div className='card'>
                    <div className='flex'>
                      <p className='flyTitle'>{label}</p>
                      <p className='lbtext'>{locationPrice[val]} DNR Bucks</p>
                      <button className='solidButton' onClick={e => upgradeLocation(e, "id")} id={n}>Buy</button>
                    </div>
                    <div className='flexBar'>
                      <div className='greenBar' style={{width: `${val*10}%`}}></div>
                      <div className='grayBar' style={{width: `${100-val*10}%`}}></div>
                    </div>
                  </div>)
                }}
                
              )}

              <button className='solidButton marketButton' onClick={marketClick}>Market</button>

            </div>
          </div>
        </div>}

        <div className='automationList'>
          <div className='autoWrapper flex'>
            <h1>Automation</h1>
          {Object.entries(anglers).map(([n, angler]) => 
            <div className='automationItem' id={n}>
              <div className='flex'>
                <p className='autoTitle'>{angler.name}</p>
                <div className='subtextFlex'>
                  <img className='subImg' src={shill}></img>
                  <p className='subtext'>{angler.price}</p>
                  <p className='subtext' style={{marginLeft: "15px"}}>FPS: {angler.fps}</p>
                </div>
              </div>
              <p className='autoQuantity'>{angler.quantity}</p>
              <button className='autoHire' onClick={e => hireAngler(e, "id")} id={n}>Hire</button>
            </div>
          )}
          
          </div>
        
          </div>
      </div>
      
    </div>
    </div>
  );
}

export default HomeScreen;
