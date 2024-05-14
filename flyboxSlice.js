import { createSlice } from '@reduxjs/toolkit'

export const flyboxSlice = createSlice({
    name: 'flybox',
    initialState: {
        1: {
            FPC: 8,
            CC: 0.1,
            name: "Woolly Bugger",
            equipped: 0,
            dropChance: 0.5,
            unlocked: 0
        },
        2: {
            FPC: 4,
            CC: 0.3,
            name: "Hopper",
            equipped: 0,
            dropChance: 0.2,
            unlocked: 0
        },
        3: {
            FPC: 3,
            CC: 0.5,
            name: "Prince Nymph",
            equipped: 0,
            dropChance: 0.1,
            unlocked: 0
        },
        4: {
            FPC: 15,
            CC: 0.1,
            name: "Woolly Bugger",
            equipped: 0,
            dropChance: 0.5,
            unlocked: 0
        },
        5: {
            FPC: 10,
            CC: 0.5,
            name: "Hopper",
            equipped: 0,
            dropChance: 0.2,
            unlocked: 1
        },
        6: {
            FPC: 7,
            CC: 0.4,
            name: "Prince Nymph",
            equipped: 0,
            dropChance: 0.1,
            unlocked: 1
        },
        7: {
            FPC: 50,
            CC: 0.15,
            name: "Woolly Bugger",
            equipped: 0,
            dropChance: 0.5,
            unlocked: 1
        },
        8: {
            FPC: 15,
            CC: 0.25,
            name: "Hopper",
            equipped: 0,
            dropChance: 0.2,
            unlocked: 0
        },
        9: {
            FPC: 7,
            CC: 0.6,
            name: "Prince Nymph",
            equipped: 0,
            dropChance: 0.1,
            unlocked: 0
        },
        10: {
            FPC: 200,
            CC: 0.1,
            name: "Woolly Bugger",
            equipped: 0,
            dropChance: 0.5,
            unlocked: 0
        },
        11: {
            FPC: 150,
            CC: 0.25,
            name: "Hopper",
            equipped: 0,
            dropChance: 0.2,
            unlocked: 0
        },
        12: {
            FPC: 100,
            CC: 0.4,
            name: "Prince Nymph",
            equipped: 0,
            dropChance: 0.1,
            unlocked: 0
        },
        13: {
            FPC: 200,
            CC: 0.1,
            name: "Woolly Bugger",
            equipped: 0,
            dropChance: 0.5,
            unlocked: 0
        },
        14: {
            FPC: 150,
            CC: 0.25,
            name: "Hopper",
            equipped: 0,
            dropChance: 0.2,
            unlocked: 0
        },
        15: {
            FPC: 100,
            CC: 0.4,
            name: "Prince Nymph",
            equipped: 0,
            dropChance: 0.1,
            unlocked: 0
        }
    },
    reducers: {
      equip: (state, fly) => {
        state[fly.payload].equipped = 1;
      },
      unequip: (state, fly) => {
        state[fly.payload].equipped = 0;
      },
      unlock: (state, fly) => {
        state[fly.payload].unlocked = 1;
      }
    }
  })

export const { equip, unequip, unlock } = flyboxSlice.actions

export const selectFlybox = state => state.flybox

export default flyboxSlice.reducer