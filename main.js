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
activateAllPowers.addEventListener("click", function activateAllPowerFunction(){
    document.getElementById('flight').classList.remove('disabled')
    document.getElementById('flight').classList.add('enabled')

    document.getElementById('mindreading').classList.remove('disabled')
    document.getElementById('mindreading').classList.add('enabled')

    document.getElementById('xray').classList.remove('disabled')
    document.getElementById('xray').classList.add('enabled')
})
/*======================================Disable all powers function=================================*/
disableAllPowers.addEventListener("click", function disableAllPowerFunction(){
    document.getElementById('flight').classList.remove('enabled')
    document.getElementById('flight').classList.add('disabled')

    document.getElementById('mindreading').classList.remove('enabled')
    document.getElementById('mindreading').classList.add('disabled')

    document.getElementById('xray').classList.remove('enabled')
    document.getElementById('xray').classList.add('disabled')
})






