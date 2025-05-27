 const hummus = function(factor) {
 const ingredient = function(amount, unit, name) {
 let ingredientAmount = amount * factor;
 if (ingredientAmount > 1) {
 unit += "s";
 }
 console.log(`${ingredientAmount} ${unit} ${name}`);
 }
 ingredient(1, "can", "chickpeas");
 ingredient(0.25, "cup", "tahini");
 ingredient(0.25, "cup", "lemon juice");
 ingredient(1, "clove", "garlic");
 ingredient(2, "tablespoon", "olive oil");
 62
ingredient(0.5, "teaspoon", "cumin");
 };

hummus(4);
 console.log(hummus);

