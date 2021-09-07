var pizzaStyle;
var pizzas;
var flour;
var water;
var yeast;
var salt;
var sugar;
var oil;
var sauceOrDough = "dough";
var sdbutton = document.getElementById("pizzasauce");
var language = "english";
var mixOrRepice = "recipe";

function napoletanaCheck(){
    document.getElementById("sugarneed").style.display = "none";
    document.getElementById("sugarneed2").style.display = "none";
    document.getElementById("paste").style.display = "none";
    document.getElementById("paste2").style.display = "none";
    document.getElementById("ore").style.display = "none";
    document.getElementById("ore2").style.display = "none";
    document.getElementById("onion").style.display = "none";
    document.getElementById("onion2").style.display = "none";
    document.getElementById("bas").style.display = "inline";
    document.getElementById("bas2").style.display = "inline";
    document.querySelector(".flourneeded").innerHTML = "";
    document.querySelector(".waterneeded").innerHTML = "";
    document.querySelector(".yeastneeded").innerHTML = "";
    document.querySelector(".sugarneeded").innerHTML = "";
    document.querySelector(".saltneeded").innerHTML = "";
    document.querySelector(".oilneeded").innerHTML = "";
    document.querySelector(".crushedtomatoes").innerHTML = "";
    document.querySelector(".oliveoil").innerHTML = "";
    document.querySelector(".onionpowder").innerHTML = "";
    document.querySelector(".tomatopaste").innerHTML = "";
    document.querySelector(".salt").innerHTML = "";
    document.querySelector(".oregano").innerHTML = "";
    pizzaStyle = "napoletana";
}

function newyorkCheck(){
    document.getElementById("sugarneed").style.display = "inline";
    document.getElementById("sugarneed2").style.display = "inline";
    document.getElementById("paste").style.display = "inline";
    document.getElementById("paste2").style.display = "inline";
    document.getElementById("ore").style.display = "inline";
    document.getElementById("ore2").style.display = "inline";
    document.getElementById("onion").style.display = "inline";
    document.getElementById("onion2").style.display = "inline";
    document.getElementById("bas").style.display = "none";
    document.getElementById("bas2").style.display = "none";
    document.querySelector(".flourneeded").innerHTML = "";
    document.querySelector(".waterneeded").innerHTML = "";
    document.querySelector(".yeastneeded").innerHTML = "";
    document.querySelector(".sugarneeded").innerHTML = "";
    document.querySelector(".saltneeded").innerHTML = "";
    document.querySelector(".oilneeded").innerHTML = "";
    document.querySelector(".crushedtomatoes").innerHTML = "";
    document.querySelector(".basil").innerHTML = "";
    document.querySelector(".oliveoil").innerHTML = "";
    document.querySelector(".salt").innerHTML = "";
    pizzaStyle = "New-York";
}

function showIngredients(){
    if(pizzaStyle == "New-York"){
        pizzas = parseInt(document.getElementById("numberofpizzas").value);
        flour = 130 * pizzas;
        document.querySelector(".flourneeded").innerHTML = flour + "g";
        water = 80 * pizzas;
        document.querySelector(".waterneeded").innerHTML = water + "g";
        yeast = 1.5 * pizzas;
        document.querySelector(".yeastneeded").innerHTML = yeast + "g";
        sugar = 2 * pizzas;
        document.querySelector(".sugarneeded").innerHTML = sugar + "g";
        salt = 1.5 * pizzas;
        document.querySelector(".saltneeded").innerHTML = salt + "g";
        oil = 4 * pizzas;
        document.querySelector(".oilneeded").innerHTML = oil + "g";
    }
    if(pizzaStyle == "napoletana") {
        pizzas = parseInt(document.getElementById("numberofpizzas").value);
        flour = 280 * pizzas;
        document.querySelector(".flourneeded").innerHTML = flour + "g";
        water = 183 * pizzas;
        document.querySelector(".waterneeded").innerHTML = water + "g";
        yeasty = 0.3 * pizzas;
        yeast = yeasty.toFixed(1);
        document.querySelector(".yeastneeded").innerHTML = yeast + "g";
        salt = 8 * pizzas;
        document.querySelector(".saltneeded").innerHTML = salt + "g";
        oil = 4 * pizzas;
        document.querySelector(".oilneeded").innerHTML = oil + "g";
    }
}

function sauceIngredients(){
    if(pizzaStyle == "New-York"){
        crushedtomatoes = 1;
        document.querySelector(".crushedtomatoes").innerHTML = crushedtomatoes + " can";
        tomatopaste = 1;
        document.querySelector(".tomatopaste").innerHTML = tomatopaste + " package";
        oliveoil = 1;
        document.querySelector(".oliveoil").innerHTML = oliveoil + " tablespoon";
        salt = 1;
        document.querySelector(".salt").innerHTML = salt + " teaspoon";
        onionpowder = 1;
        document.querySelector(".onionpowder").innerHTML = onionpowder + " teaspoon";
        oregano = 1;
        document.querySelector(".oregano").innerHTML = oregano + " package";
    }
    if(pizzaStyle == "napoletana") {
        pizzas = parseInt(document.getElementById("numberofpizzas").value);
        crushedtomatoes = 1;
        document.querySelector(".crushedtomatoes").innerHTML = crushedtomatoes + " can";
        salt = 1;
        document.querySelector(".salt").innerHTML = salt + " package";
        oliveoil = 1;
        document.querySelector(".oliveoil").innerHTML = oliveoil + " tablespoon";
        basil = 4;
        document.querySelector(".basil").innerHTML = basil + " leaf";

    }
}

sdbutton.onclick = function(){
    if(mixOrRepice == "mix"){
        if(sauceOrDough == "dough") {
            mixingSauce();
        } else {
            mixingDough();
        }
        mixOrRepice == "recipe";
    } else {
        if(sauceOrDough == "dough") {
            recipeSauce();
        } else {
            recipeDough();
        }
    }
}

document.getElementById('doughmixing').addEventListener('click', function(){
    if(sauceOrDough == "dough") {
        if(mixOrRepice == "recipe") {
            mixingDough();
        } else {
            recipeDough();
        }
    } else {
        if(mixOrRepice == "recipe") {
            mixingSauce();
        } else {
            recipeSauce();
        }
    }
});


function dropDownLauncher() {
    var e = document.getElementById("pizzadropdown");
    pizzaStyle = e.options[e.selectedIndex].value;
    if(pizzaStyle == "napoletana")
        napoletanaCheck();
    else {
        newyorkCheck();
    }
}

function mixingDough() {
    document.getElementById("container").style.borderColor = "rgb(153, 153, 255)";
    document.getElementById("pizzasauce").style.borderColor = "rgb(153, 153, 255)";
    document.getElementById("middleline").style.borderColor = "rgb(153, 153, 255)";
    document.getElementById("doughmixing").style.borderColor = "rgb(153, 153, 255)";
    document.getElementById("language").style.borderColor = "rgb(153, 153, 255)";
    document.getElementById("numberofpizzas").style.display = "none";
    document.getElementById("numberofpizzas2").style.display = "none";
    document.getElementById("ingredientsButton").style.display = "none";
    document.getElementById("requiredcontainer").style.display = "none";
    document.getElementById("selectionContainer").style.display = "none";
    document.getElementById("middleline").style.display = "none";
    document.getElementById("mixingContainerSauce").style.display = "none";
    document.getElementById("instructionsContainerSauce").style.display = "none";
    document.getElementById("mixingContainer").style.display = "inline";
    document.getElementById("instructionsContainer").style.display = "inline";
    document.getElementById("doughmixing").innerHTML = "Dough recipe";
    mixOrRepice = "mix";
    sauceOrDough = "dough";
    if(language == "finnish"){
        document.getElementById("doughmixing").innerHTML = "Taikinan resepti";
        document.getElementById("pizzasauce").innerHTML = "Pizzakastike";
    } else {
        document.getElementById("doughmixing").innerHTML = "Dough recipe";
        document.getElementById("pizzasauce").innerHTML = "Pizza sauce";
    }

}

function recipeDough() {
    document.getElementById("container").style.borderColor = "rgb(179, 217, 255)";
    document.getElementById("pizzasauce").style.borderColor = "rgb(179, 217, 255)";
    document.getElementById("middleline").style.borderColor = "rgb(179, 217, 255)";
    document.getElementById("doughmixing").style.borderColor = "rgb(179, 217, 255)";
    document.getElementById("language").style.borderColor = "rgb(179, 217, 255)";
    document.getElementById("instructionsContainer").style.display = "none";
    document.getElementById("mixingContainer").style.display = "none";
    document.getElementById("ingredientsButtonSauce").style.display = "none";
    document.getElementById("requiredcontainer2").style.display = "none";
    document.getElementById("middleline").style.display = "block";
    document.getElementById("numberofpizzas").style.display = "inline";
    document.getElementById("numberofpizzas2").style.display = "inline";
    document.getElementById("ingredientsButton").style.display = "inline";
    document.getElementById("selectionContainer").style.display = "inline";
    document.getElementById("requiredcontainer").style.display = "block";
    document.getElementById("doughmixing").innerHTML = "Dough preparing";
    mixOrRepice = "recipe";
    sauceOrDough = "dough";

    if(language == "finnish"){
        document.getElementById("doughmixing").innerHTML = "Taikinan valmistus";
        document.getElementById("pizzasauce").innerHTML = "Pizzakastike";
    } else {
        document.getElementById("doughmixing").innerHTML = "Dough preparing";
        document.getElementById("pizzasauce").innerHTML = "Pizza sauce";
    }

}



function mixingSauce() {
    document.getElementById("container").style.borderColor = "rgb(210, 143, 121)";
    document.getElementById("pizzasauce").style.borderColor = "rgb(210, 143, 121)";
    document.getElementById("middleline").style.borderColor = "rgb(210, 143, 121)";
    document.getElementById("doughmixing").style.borderColor = "rgb(210, 143, 121)";
    document.getElementById("language").style.borderColor = "rgb(210, 143, 121)";
    document.getElementById("numberofpizzas").style.display = "none";
    document.getElementById("numberofpizzas2").style.display = "none";
    document.getElementById("ingredientsButtonSauce").style.display = "none";
    document.getElementById("selectionContainer").style.display = "none";
    document.getElementById("requiredcontainer2").style.display = "none";
    document.getElementById("middleline").style.display = "none";
    document.getElementById("mixingContainer").style.display = "none";
    document.getElementById("instructionsContainer").style.display = "none";
    document.getElementById("mixingContainerSauce").style.display = "inline";
    document.getElementById("instructionsContainerSauce").style.display = "inline";
    document.getElementById("doughmixing").innerHTML = "Sauce recipe";
    mixOrRepice = "mix";
    sauceOrDough = "sauce";
    if(language == "finnish"){
        document.getElementById("doughmixing").innerHTML = "Kastikkeen resepti";
        document.getElementById("pizzasauce").innerHTML = "Pizzataikina";
    } else {
        document.getElementById("doughmixing").innerHTML = "Sauce recipe";
        document.getElementById("pizzasauce").innerHTML = "Pizza dough";
    }

}

function recipeSauce() {
    document.getElementById("container").style.borderColor = "rgb(209, 97, 97)";
    document.getElementById("pizzasauce").style.borderColor = "rgb(209, 97, 97)";
    document.getElementById("middleline").style.borderColor = "rgb(209, 97, 97)";
    document.getElementById("doughmixing").style.borderColor = "rgb(209, 97, 97)";
    document.getElementById("language").style.borderColor = "rgb(209, 97, 97)";
    document.getElementById("numberofpizzas").style.display = "none";
    document.getElementById("numberofpizzas2").style.display = "none";
    document.getElementById("mixingContainerSauce").style.display = "none";
    document.getElementById("instructionsContainerSauce").style.display = "none";
    document.getElementById("ingredientsButton").style.display = "none";
    document.getElementById("requiredcontainer").style.display = "none";
    document.getElementById("ingredientsButtonSauce").style.display = "inline";
    document.getElementById("selectionContainer").style.display = "inline";
    document.getElementById("requiredcontainer2").style.display = "block";
    document.getElementById("middleline").style.display = "block";
    document.getElementById("doughmixing").innerHTML = "Sauce mixing";
    mixOrRepice = "recipe";
    sauceOrDough = "sauce";
    if(language == "finnish"){
        document.getElementById("doughmixing").innerHTML = "Kastikkeen sekoitus";
        document.getElementById("pizzasauce").innerHTML = "Pizzataikina";
    } else {
        document.getElementById("doughmixing").innerHTML = "Sauce mixing";
        document.getElementById("pizzasauce").innerHTML = "Pizza dough";
    }

}



function languageSwitch() {
    if(language == "finnish"){
        document.getElementById("language").innerHTML = "Suomi";
        document.getElementById("intro").innerHTML = "Use this app to create the dough & sauce for your pizza";
        document.getElementById("doughmixing").innerHTML = "Dough preparing";
        document.getElementById("pizzastyle").innerHTML = "Pizza style:";
        document.getElementById("numberofpizzas2").innerHTML = "# of pizzas:";
        document.getElementById("ingredientsButton").innerHTML = "Show ingredients";
        document.getElementById("ingredientsButtonSauce").innerHTML = "Show ingredients";
        document.getElementById("requiredingredients").innerHTML = "Required ingredients:";
        document.getElementById("requiredingredients2").innerHTML = "Required ingredients:";
        document.getElementById("flourneed").innerHTML = "Flour:";
        document.getElementById("waterneed").innerHTML = "Water:";
        document.getElementById("yeastneed").innerHTML = "Yeast:";
        document.getElementById("saltneed").innerHTML = "Salt:";
        document.getElementById("oilneed").innerHTML = "Olive oil:";
        document.getElementById("sugarneed").innerHTML = "Sugar:";
        document.getElementById("tomatoneed").innerHTML = "Crushed tomatoes:";
        document.getElementById("paste").innerHTML = "Tomato paste:";
        document.getElementById("bas").innerHTML = "Basil:";
        document.getElementById("oilneedsauce").innerHTML = "Olive oil:";
        document.getElementById("saltneedsauce").innerHTML = "Salt:";
        document.getElementById("onion").innerHTML = "Onion powder:";
        document.getElementById("ore").innerHTML = "Oregano:";
        if (sauceOrDough == "dough") {
            document.getElementById("pizzasauce").innerHTML = "Pizza sauce";
        } else {
            document.getElementById("pizzasauce").innerHTML = "Pizza dough";
        }
        language = "english";
    } else {
        document.getElementById("language").innerHTML = "English";
        document.getElementById("intro").innerHTML = "Sovellus Pizzataikinan sekä kastikkeen tekoa varten";
        document.getElementById("doughmixing").innerHTML = "Taikinan valmistus";
        document.getElementById("pizzasauce").innerHTML = "Pizzakastike";
        document.getElementById("pizzastyle").innerHTML = "Pizzatyyli:";
        document.getElementById("numberofpizzas2").innerHTML = "pizzojen lukumäärä:";
        document.getElementById("ingredientsButton").innerHTML = "Näytä ainekset";
        document.getElementById("ingredientsButtonSauce").innerHTML = "Näytä ainekset";
        document.getElementById("requiredingredients").innerHTML = "Tarvittavat ainekset:";
        document.getElementById("requiredingredients2").innerHTML = "Tarvittavat ainekset:";
        document.getElementById("flourneed").innerHTML = "Vehnäjauho:";
        document.getElementById("waterneed").innerHTML = "Vesi:";
        document.getElementById("yeastneed").innerHTML = "Hiiva:";
        document.getElementById("saltneed").innerHTML = "Suola:";
        document.getElementById("oilneed").innerHTML = "Oliiviöljy:";
        document.getElementById("sugarneed").innerHTML = "Sokeri:";
        document.getElementById("tomatoneed").innerHTML = "Tomaattimurska:";
        document.getElementById("paste").innerHTML = "Tomaattipyre:";
        document.getElementById("bas").innerHTML = "Basilika:";
        document.getElementById("oilneedsauce").innerHTML = "Oliiviöljy:";
        document.getElementById("saltneedsauce").innerHTML = "Suola:";
        document.getElementById("onion").innerHTML = "Valkosipulijauhe:";
        document.getElementById("ore").innerHTML = "Oregano:";
        if (sauceOrDough == "dough") {
            document.getElementById("pizzasauce").innerHTML = "Pizzakastike";
        } else {
            document.getElementById("pizzasauce").innerHTML = "Pizzataikina";
        }
        language = "finnish";
    }
}
