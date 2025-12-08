$(start);

let Options = ["Carrots", "Potatoes", "Rice", "Milk"];
let optionsLenght = Options.length;

function start() {
    let currentRecipeList = 0;

    let newName = $("<input>");
    newName.attr("placeholder", "RecipeName");
    $("body").append(newName);

    let btnCreateRecipe = $("<button>");
    btnCreateRecipe.html("Create Recipe");
    btnCreateRecipe.on("click", function(){
        let newRecipe = $("<div>");
        newRecipe.append(newName.val());
        $("body").append(newRecipe);
        let newRecipeIngredients = $("<ul>");
        newRecipeIngredients.append
        currentRecipeList = newRecipeIngredients;
    });
    $("body").append(btnCreateRecipe);

    let LabelElement1 = $("<label>");
    LabelElement1.html("Select ingredient:");
    let ingredientList = $("<select>");
    for (let i = 0; i < optionsLenght; i++) {
        let newOption = $("<option>");
        newOption.html(Options[i]);
        ingredientList.append(newOption);
    }
    $("body").append("<br>");
    $("body").append("<br>");
    $("body").append(LabelElement1);
    $("body").append(ingredientList);

    let LabelElement2 = $("<label>");
    LabelElement2.html("Quantity:");
    let quantity = $("<input>");
    quantity.attr("type", "number");
    $("body").append("<br>");
    $("body").append("<br>");
    $("body").append(LabelElement2);
    $("body").append(quantity);

    let addToRecipe = $("<button>");
    addToRecipe.html("Add Recipe");
    $("body").append("<br>");
    $("body").append("<br>");
    $("body").append(addToRecipe);

    addToRecipe.on("click", function () {
        if (currentRecipeList !=0) {
            let newIngredient = $("<li>");
            newIngredient.html(ingredientList.val() + " - " + quantity.val());
            currentRecipeList.append(newIngredient);
            quantity.val("");
        }
        else {
            alert("Error. Please create recipe first");
        }
    })

}

