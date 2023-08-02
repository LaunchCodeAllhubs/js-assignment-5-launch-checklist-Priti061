// Write your JavaScript code here!

//const { pickPlanet } = require("./scriptHelper");



window.addEventListener("load", function() {
    let form = document.getElementById("launchForm");
    
    //console.log(form)
    form.addEventListener("submit", function(event) {
    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel= document.querySelector("input[name= fuelLevel]").value;
    let cargoLevel= document.querySelector("input[name= cargoMass]").value;
    let list= document.getElementById("faultyItems");
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault(); 
    })

   let listedPlanets;
   
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       
   let randomPlanet= pickPlanet(listedPlanets)
   console.log(randomPlanet)
   addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)
 
})
          
});