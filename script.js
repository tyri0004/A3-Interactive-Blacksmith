// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.
    // FUNCTION makeSword() 
    /* IF heat is greater than or equal to 30 THEN 
         subtract 30 from heat 
         add 1 to swords
         display a success message 

        ELSE 
            display a message saying more heat is needed
        END IF 

        update forge display 

        END FUCTION
    
    */
// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

const $forge = document.getElementById("forge")
const $heatValue = document.getElementById("heat-value")
const $swordCount = document.getElementById("sword-count")
const $forgeStatus = document.getElementById("forge-status")
const $forgeImage = document.getElementById("forge-image")
const $actionMessage = document.getElementById("action-message")

// assignment 3 selectors
const $heatInput = document.getElementById("heat-input");
const $addHeatButton = document.getElementById("add-heat");
const $makeSwordButton = document.getElementById("make-sword");
const $resetButton = document.getElementById("reset-forge");
// 2. Create the two state variables: heat and swords made.
let heat = 20 
let swords = 0 
// 3. Write getForgeStatus(heatValue). Return the correct status string.
function getForgeStatus(heatValue){
    if(heatValue < 30){
        return "Too Cold."
    }
    else if(heatValue < 70){
        return "Ready to forge!"
    }
    else{
        return "Roaring fire!"
    }
}
// 4. Write updateForge(). Update text and apply one status class.
function updateForge(){
    $heatValue.textContent = heat; 
    $swordCount.textContent = swords; 

    const status = getForgeStatus(heat);
    $forgeStatus.textContent = status;

    $forge.classList.remove("is-cold", "is-ready", "is-roaring");

    if (heat < 30){
        $forge.classList.add("is-cold");
        $forgeImage.src = "assets/forge-cold.svg";
        $forgeImage.alt = "A stone forge with no flames"
    }
    else if(heat < 70){
        $forge.classList.add("is-ready");
        $forgeImage.src = "assets/forge-ready.svg";
        $forgeImage.alt = "A stone forge with a small fire"
    }
    else{
        $forge.classList.add("is-roaring"); 
        $forgeImage.src = "assets/forge-roaring.svg";
        $forgeImage.alt = "A stone forget with  a roaring fire"
    }
}
//    Change the supplied forge image src and alt to match the heat.

//    Keep the most recent action message visible.

// 5. Write resetForge(). Restore the state, message, and display.
function resetForge(){
    heat = 20;
    swords = 0; 

    $heatInput.value = "";
    $actionMessage.textContent = "";


    updateForge();

}
// 6. Write heatForge(amount). Add heat, cap it, and update the page.
function heatForge(amount){

    heat += amount; 

    if(heat > 100){
        heat = 100
    };

    $actionMessage.textContent = "The forge has been heated.";

    updateForge()
}

// 7. Write makeSword(). Handle both success and insufficient heat.

function makeSword(){
    if (heat >= 30){
        heat -= 30; 
        swords += 1; 
        $actionMessage.textContent = "Sword successfully forged!"
    }
    else{
        $actionMessage.textContent = "More heat is needed to forge a sword."
    }

    updateForge();
}
// 8. Call resetForge() once to start the game.
resetForge()
// Use the tests in ASSIGNMENT.md to check your work.
// Completed testing, and everything seems to be working as intended!!!!!!! :))))

// Assignment 3: Interactive Blacksmith start

// Plan: 
// Select the input and buttons
// Listen for clicks on the Add heat button
// Read the input and convert it into a number
// Check that the input is a valid positive whole number
// If valid, call heatForge(amount)
// Listen for clicks on Make sword and call makeSword()
// Listen for clicks on Reset forge and call resetForge()

// Add heat event listener

$addHeatButton.addEventListener("click", function(){

    const amount = Number($heatInput.value);

    if (
        $heatInput.value.trim() === "" ||
        !Number.isFinite(amount) ||
        !Number.isInteger(amount) ||
        amount <= 0
    ){
        $actionMessage.textContent = "Please enter a positive whole number.";
    }
    else{
        heatForge(amount);
    }

});

// Make sword event listener

$makeSwordButton.addEventListener("click", function(){

    makeSword();

});

// Reset forge event listener

$resetButton.addEventListener("click", function(){

    resetForge();

});

// Initialize the forge
resetForge();