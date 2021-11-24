let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];
console.log(Object.entries(recipes[2]))
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    for (let butts in recipes){
        // console.log(butts);
        // console.log(recipes[butts])
        // console.log(Object.keys(recipes))
        console.log(Object.entries(recipes[butts]))
    }
}
console.log(chooseRecipe(bakeryA, bakeryB, recipes))


// console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// bakeryA = ['potatoes', 'bay leaf', 'raisins'];
// bakeryB = ['red bean', 'dijon mustard', 'apples'];
// recipes = [
//     {
//         name: 'Potato Ganache',
//         ingredients: ['potatoes', 'chocolate']
//     },
//     {
//         name: 'Sweet Fish',
//         ingredients: ['anchovies', 'honey']
//     },
//     {
//         name: "Nima's Famous Dijon Raisins",
//         ingredients: ['dijon mustard', 'raisins']
//     }
// ];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));
