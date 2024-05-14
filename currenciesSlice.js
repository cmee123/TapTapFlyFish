import { createSlice } from '@reduxjs/toolkit'

export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: {
      fish: 1000000,
      shillings: 100000,
      DNRBucks: 10000,
      FPC: 1,
      catchChance: 0.2,
      FPS: 0,
      DPS: 0
    },
    reducers: {
      catchFish: state => {
        state.fish += state.FPC
      },
      getFish: (state) => {
        state.fish += state.FPS
      },
      sellFish: (state, amt) => {
        let cr = 1.4;
        state.fish -= amt.payload;
        state.shillings += parseInt(amt.payload*cr);
      },
      spendFish: (state, amt) => {
        state.fish -= amt.payload;
      },
      spendShillings: (state, amt) => {
        state.shillings -= amt.payload;
      },
      getShillings: (state, amt) => {
        state.shillings += amt.payload;
      },
      spendDNRBucks: (state, amt) => {
        state.DNRBucks -= amt.payload;
      },
      getDNRBucks: (state) => {
        state.DNRBucks += state.DPS;
      },
      updateFPS: (state, amt) => {
        state.FPS += amt.payload;
      },
      increaseFPC: (state, fly) => {
        state.FPC += fly.payload;
      },
      increaseCatchChance: (state,  fly) => {
        state.catchChance +=  fly.payload;
      },
      decreaseFPC: (state,  fly) => {
        state.FPC -=  fly.payload.FPC;
      },
      decreaseCatchChance: (state,  fly) => {
        state.catchChance -=  fly.payload.CC;
      },
      increaseDPS: state => {
        state.DPS += 1;
      }
    }
  })

export const { catchFish, sellFish, increaseDPS, getFish, spendFish, spendShillings, getShillings, spendDNRBucks, getDNRBucks, updateFPS, increaseCatchChance, increaseFPC, decreaseCatchChance, decreaseFPC } = currenciesSlice.actions

export const selectfish = state => state.currencies.fish
export const selectShillings = state => state.currencies.shillings
export const selectDNRBucks = state => state.currencies.DNRBucks
export const selectCC = state => state.currencies.catchChance
export const selectFPC = state => state.currencies.FPC
export const selectFPS = state => state.currencies.FPS

export default currenciesSlice.reducer