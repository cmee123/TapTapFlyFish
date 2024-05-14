const state = {
    fish: 0,
    shillings: 0,
    DNRBucks: 0,
    FPC: 1,
    catchChance: 0,
    FPS: 0,
    Flies: [
        [8, 0.1, "Woolly Bugger", 0, 0.5, 0],
        [4, 0.3, "Hopper", 0, 0.2, 0], 
        [3, 0.5, "Prince Nymph", 0, 0.1, 0], 
        [15, 0.1, "Woolly Bugger", 0, 0.5, 0], 
        [10, 0.50, "Hopper", 0, 0.2, 0], 
        [7, 0.4, "Prince Nymph", 0, 0.1, 0], 
        [50, 0.15, "Woolly Bugger", 0, 0.5, 0], 
        [15, 0.25, "Hopper", 0, 0.2, 0], 
        [7, 0.6, "Prince Nymph", 0, 0.1, 0], 
        [200, 0.1, "Woolly Bugger", 0, 0.5, 0], 
        [150, 0.25, "Hopper", 0, 0.2, 0], 
        [100, 0.4, "Prince Nymph", 0, 0.1, 0],
        [200, 0.1, "Woolly Bugger", 0, 0.5, 0], 
        [150, 0.25, "Hopper", 0, 0.2, 0], 
        [100, 0.4, "Prince Nymph", 0, 0.1, 0]
    ],
    Anglers: [
        [1, 0, "Fishing Bum", 100, 1, 1],
        [2, 0, "Wall Street Tycoon", 500, 0, 1],
        [6, 0, "Meek Toddler", 1000, 0, 1],
        [5, 0, "Henry Norton Bower", 4000, 0, 1],
        [20, 0, "Olaf Hall Holt", 8000, 0, 1],
        [20, 0, "Discord Mod", 15000, 0, 1],
        [-40, 0, "Rampant Environmentalist", 5, 0, 1],
        [120, 0, "Exhausted Stav Worker", 30000, 0, 1],
        [140, 0, "Grace Chandler", 80000, 0, 1],
        [200, 0, "Commercial Fisher", 100000, 0, 1],
        [300, 0, "Under Paid Teacher", 300000, 0, 1],
        [500, 0, "World Cup Skier", 700000, 0, 1],
        [700, 0, "Clown", 1500000, 0, 1],
        [1400, 0, "IF4 Critic", 3000000, 0, 1],
        [-1600, 0, "Vegan Mom", 10, 0, 1],
        [2000, 0, "Cathal Mee", 40000000, 0, 1],
        [4000, 0, "Energetic Pre Teen", 100000000, 0, 1],
        [8000, 0, "Guy From Michigan", 300000000, 0, 1],
        [10000, 0, "Pro Angler", 600000000, 0, 1],
        [40000, 0, "Local Grandpa", 1000000000, 0, 1]
    ],
    DNR: [0, 0, 20, 0, 0, 0, 0, 0],
    Location: [0, 0, 0, 0, 0, 0, 0, "Mississippi"],
    LootBoxes: [
        [20, 7, 3, 1, 1, "Common", 100],
        [30, 10, 7, 2, 1, "Rare", 300],
        [35, 15, 8, 3, 1, "Epic", 700],
        [40, 20, 11, 5, 1, "Legendary", 1000]
    ]
}

export default state;
