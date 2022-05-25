'use strict';

const sportShop = {
    shopName: 'Lucky Sports',
    location: 'Nowhere City, Cartoon Network',
    categories: ['Cricket', 'Football', 'Basketball', 'Golf'],
    starterPacks: ['Gray Nicolls', 'MRF Bats', 'Premium Golf Sticks', 'Nike Basktball'],
    mainItems: ['Cricket Bats', 'Golf Sticks', 'Basketballs']
};

// destructuring any one array from above object
// original array will not be affected
const [a,b,c,d] = sportShop.starterPacks;
console.log(a,b,c,d);