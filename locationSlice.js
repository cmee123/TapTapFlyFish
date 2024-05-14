import { createSlice } from '@reduxjs/toolkit'

export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        name: "Mississippi River",
        CCBonus: 0,
        FPCBonus: 0,
        waterQuality: 0,
        habitatQuality: 0,
        wildlifeDiversity: 0,
        fishAbundance: 0,
        fishQuality: 0
    },
    reducers: {
      increaseLevel: (state, lvl) => {
        state[lvl.payload] += 1;
      },
      updateCCBonus: (state, amt) => {
        state.CCBonus += amt.payload;
        if(state.CCBonus > 0.8) {
            state.CCBonus = 0.8
        }
      },
      updateFPCBonus: (state, amt) => {
        state.FPCBonus += amt.payload;
      }
    }
  })

export const { increaseLevel, updateCCBonus, updateFPCBonus } = locationSlice.actions

export const selectLocation = state => state.location

export default locationSlice.reducer