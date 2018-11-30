// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// Have your developer tools open. When you click the button, the following element...

/*====================Variables=====================*/
let activateFlight = document.querySelector('#activate-flight');
let activateMindReading = document.querySelector('#activate-mindreading');
let activateXray = document.querySelector('#activate-xray');
let activateAllPowers = document.querySelector('#activate-all');
let disableAllPowers = document.querySelector('#deactivate-all');

/*==============================Event Listeners====================================*/

/*=================================Flight===========================*/
activateFlight.addEventListener("click", function flightHandlerFunction(){
    document.getElementById('flight').classList.remove('disabled')
    document.getElementById('flight').classList.add('enabled')
})

/*=================================Mindreading===========================*/
activateMindReading.addEventListener("click", function mindReadingHandlerFunction(){
    document.getElementById('mindreading').classList.remove('disabled')
    document.getElementById('mindreading').classList.add('enabled')
})

/*=================================Xray===========================*/
activateXray.addEventListener("click", function xRayHandlerFunction(){
    document.getElementById('xray').classList.remove('disabled')
    document.getElementById('xray').classList.add('enabled')
})
/*======================================activate all powers function=================================*/
activateAllPowers.addEventListener("click", function activateAll(){
        let activateAll = document.querySelectorAll("section");
        for (let i = 0; i < activateAll.length; i++) {
            activateAll[i].classList.remove('disabled')
            activateAll[i].classList.add('enabled')
    }
})
// /*======================================Disable all powers function=================================*/
disableAllPowers.addEventListener("click", function disableAllPowerFunction(){
    let disableAll = document.querySelectorAll('section');
    for(let i = 0; i < disableAll.length; i++){
        disableAll[i].classList.remove('enabled')
        disableAll[i].classList.add('disabled')
    }
})






