function ingredientCheck(bakery, recipes) {
    let bakeryARecipes = []
    for (let x = 0; x < recipes.length; x++) {
        for (let y = 0; y < bakery.length; y++) {
            if ((recipes[x].ingredients).includes(bakery[y])) {
                bakeryARecipes.push(recipes[x].name)
            }
        }
    }
    return bakeryARecipes
}
const chooseRecipe = function(bakeryA, bakeryB, recipes){
    
    function ingredientCheck(bakery, recipes) {
        let bakeryARecipes = []
        for (let x = 0; x < recipes.length; x++) {
            for (let y = 0; y < bakery.length; y++) {
                if ((recipes[x].ingredients).includes(bakery[y])) {
                    bakeryARecipes.push(recipes[x].name)
                }
            }
        }
        return bakeryARecipes
    }
    let a = ingredientCheck(bakeryA, recipes) 
    let b = ingredientCheck(bakeryB, recipes)
    let result = []
    for (let i = 0; i < a.length; i++){
        if(a[i].includes(b))
        result += a[i]
    }
    
    return result
}
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

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));