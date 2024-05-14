import { createSlice } from '@reduxjs/toolkit'

export const autoSlice = createSlice({
    name: 'automation',
    initialState: {
        1: {fps: 1, quantity: 0, name: 'Fishing Bum', price: 100, unlocked: 1},
        2: {fps: 2, quantity: 0, name: 'Wall Street Tycoon', price: 500, unlocked: 0},
        3: {fps: 6, quantity: 0, name: 'Meek Toddler', price: 1000, unlocked: 0},
        4: {fps: 5, quantity: 0, name: 'Henry Norton Bower', price: 4000, unlocked: 0},
        5: {fps: 20, quantity: 0, name: 'Olaf Hall Holt', price: 8000, unlocked: 0},
        6: {fps: 20, quantity: 0, name: 'Discord Mod', price: 15000, unlocked: 0},
        7: {fps: -40, quantity: 0, name: 'Rampant Environmentalist', price: 5, unlocked: 0},
        8: {fps: 120, quantity: 0, name: 'Exhausted Stav Worker', price: 30000, unlocked: 0},
        9: {fps: 140, quantity: 0, name: 'Grace Chandler', price: 80000, unlocked: 0},
        10: {fps: 200, quantity: 0, name: 'Commercial Fisher', price: 100000, unlocked: 0},
        11: {fps: 300, quantity: 0, name: 'Under Paid Teacher', price: 300000, unlocked: 0},
        12: {fps: 500, quantity: 0, name: 'World Cup Skier', price: 700000, unlocked: 0},
        13: {fps: 700, quantity: 0, name: 'Clown', price: 1500000, unlocked: 0},
        14: {fps: 1400, quantity: 0, name: 'IF4 Critic', price: 3000000, unlocked: 0},
        15: {fps: -1600, quantity: 0, name: 'Vegan Mom', price: 10, unlocked: 0},
        16: {fps: 2000, quantity: 0, name: 'Cathal Mee', price: 40000000, unlocked: 0},
        17: {fps: 4000, quantity: 0, name: 'Energetic Pre Teen', price: 100000000, unlocked: 0},
        18: {fps: 8000, quantity: 0, name: 'Guy From Michigan', price: 300000000, unlocked: 0},
        19: {fps: 10000, quantity: 0, name: 'Pro Angler', price: 600000000, unlocked: 0},
        20: {fps: 40000, quantity: 0, name: 'Local Grandpa', price: 1000000000, unlocked: 0}
    },
    reducers: {
      hire: (state, angler) => {
        state[angler.payload].quantity += 1;
      }
    }
  })

export const { hire } = autoSlice.actions

export const selectAnglers = state => state.automation

export default autoSlice.reducer