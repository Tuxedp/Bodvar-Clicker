// # of bodvars (points)
const bodvarCounterText = document.getElementById("bodvar-count");
let bodvarCounter = 0;

// Total # of clicks
const numOfClicksText = document.getElementById("click-count");
let numOfClicks = 0;

// Items from the store

// Helpers
const helpersText = document.getElementById("helper-text");
const helperPriceText = document.getElementById("helper-price");
let numOfHelpers = 0;
let helperPrice = 15;
let helperRate = numOfHelpers;

//Swords
const swordsText = document.getElementById("swords-text");
const swordPriceText = document.getElementById("sword-price");
let numOfSwords = 0;
let swordPrice = 150;
let swordIncrease = numOfSwords;

//Hammers
const hammersText = document.getElementById("hammers-text");
const hammerPriceText = document.getElementById("hammer-price");
let numOfHammers = 0;
let hammerPrice = 500;
let hammerIncrease = numOfHammers;

//Pogage points
const pogpointsText = document.getElementById("pogage-text");
const PPPriceText = document.getElementById("pp-price");
let numOfPPs = 0;
let PPPrice = 1225;
let PPRate = numOfPPs;

//Bodvars bears
const bearsText = document.getElementById("bear-text");
const bearPriceText = document.getElementById("bear-price");
let numOfBears = 0;
let bearPrice = 15000;
let bearRate = numOfBears;

//Script...

//Run every second...
window.setInterval(HelperEffects, 125);
window.setInterval(BearEffects, 125);

function ClicksCounter(){
    numOfClicks++;
    numOfClicksText.innerText = "Total clicks: " + numOfClicks;
}
function BodvarsManager(type){
    if(type == 1){
        bodvarCounter = bodvarCounter + 1 + swordIncrease + hammerIncrease + PPRate;
        bodvarCounterText.innerText = "Bodvars: " + bodvarCounter;
    }
    if(type == 2){
        bodvarCounter += helperRate + bearRate;
        bodvarCounterText.innerText = "Bodvars: " + bodvarCounter;
    }
    else if(type == -1){
        bodvarCounter -= helperPrice;
        bodvarCounterText.innerText = "Bodvars: " + bodvarCounter;
    }
    else if(type == -2){
        bodvarCounter -= swordPrice;
        bodvarCounterText.innerText = "Bodvars: " + bodvarCounter;
    }
    else if(type == -3){
        bodvarCounter -= hammerPrice;
        bodvarCounterText.innerText = "Bodvars: " + bodvarCounter;
    }
    else if (type == -4){
        bodvarCounter -= PPPrice;
        bodvarCounterText.innerText = "Bodvars: " + bodvarCounter;
    }
    else if (type == -5){
        bodvarCounter -= bearPrice;
        bodvarCounterText.innerText = "Bodvars: " + bodvarCounter;
    }
}
function Shop(buyType){
    if(buyType == 1){
        if(bodvarCounter >= helperPrice){
            numOfHelpers++;
            helpersText.innerText = "Helper Legends: " + numOfHelpers;
            BodvarsManager(-1);
            helperPrice = (Math.floor(helperPrice * 1.87));
            helperPriceText.innerText = "Price: " + helperPrice;
        }
        else{
            helperPriceText.innerText = "You can't buy that bud... Price: " + helperPrice;
        }
    }
    else if(buyType == 2){
        if(bodvarCounter >= swordPrice){
            numOfSwords++;
            swordsText.innerText = "Swords: " + numOfSwords;
            BodvarsManager(-2);
            swordPrice = (Math.floor(swordPrice * 1.5));
            swordPriceText.innerText = "Price: " + swordPrice;
            SwordEffects();
           
        }
        else{
            swordPriceText.innerText = "Bro ur not Zoro... Price: " + swordPrice;
        }        
    } 
    else if(buyType == 3){
        if(bodvarCounter >= hammerPrice){
            numOfHammers++;
            hammersText.innerText = "Hammers: " + numOfHammers;
            BodvarsManager(-3);
            hammerPrice = Math.floor(hammerPrice * 1.75);
            hammerPriceText.innerText = "Price: " + hammerPrice;
            HammerEffects();
           
        }
        else{
            hammerPriceText.innerText = "Bro is not Bob the builder... Price: " + hammerPrice;
        }
    } 
    else if(buyType == 4){
        if(bodvarCounter >= PPPrice){
            numOfPPs++;
            pogpointsText.innerText = "Pog points: " + numOfPPs;
            BodvarsManager(-4);
            PPPrice = Math.floor(PPPrice * 2);
            PPPriceText.innerText = "Price: " + PPPrice;
            PPEffects();
            
        }
        else{
            PPPriceText.innerText = "No PP points for u... Price: " + PPPrice;
        }
    }
    else if(buyType == 5){
        if(bodvarCounter >= bearPrice){
            numOfBears++;
            bearsText.innerText = "Bodvars Bears: " + numOfBears;
            BodvarsManager(-5);
            bearPrice = Math.floor(bearPrice * 2.15);
            bearPriceText.innerText = "Price: " + bearPrice;
          
        }
        else{
            bearPriceText.innerText = "Roar or whatever a bear says... Price: " + bearPrice;
        }
    }
}
function HelperEffects(){
    helperRate = Math.floor(numOfHelpers * 1.05);
    BodvarsManager(2);
}
function SwordEffects(){
    swordIncrease = Math.floor(numOfSwords * 1.25);
}
function HammerEffects(){
    hammerIncrease = Math.floor(numOfHammers * 1.75);
}
function PPEffects(){
    PPRate = numOfPPs * 50;
}
function BearEffects(){
    bearRate = numOfBears * 5;
    BodvarsManager(2);
}
