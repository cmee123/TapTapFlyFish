import { createSlice } from '@reduxjs/toolkit'

export const dnrSlice = createSlice({
    name: 'dnr',
    initialState: {
        budget: 0,
        productionRate: 0,
        stocking: 0,
        habitatRestoration: 0,
        education: 0,
        parkBuilding: 0
    },
    reducers: {
      fund: (state, funding) => {
        state.budget += parseInt(funding.payload);
      },
      decreaseBudget: (state, amt) => {
        state.budget -= amt.payload;
      },
      increaseStocking: state => {
        state.stocking += 1;
        state.productionRate += 1;
      },
      increaseHabitatRestoration: state => {
        state.habitatRestoration += 1;
        state.productionRate += 1;
      },
      increaseEducation: state => {
        state.education += 1;
        state.productionRate += 1;
      },
      increaseParkBuilding: state => {
        state.parkBuilding += 1;
        state.productionRate += 1;
      }
    }
  })

export const { fund, decreaseBudget, increaseEducation, increaseHabitatRestoration, increaseParkBuilding, increaseStocking } = dnrSlice.actions

export const selectDNR = state => state.dnr

export default dnrSlice.reducer