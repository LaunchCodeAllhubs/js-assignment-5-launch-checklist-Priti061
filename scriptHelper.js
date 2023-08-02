// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   
   let targets= document.getElementById("missionTarget");
   
   targets.innerHTML= `<h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${image}">`
}


function validateInput(testInput) {
    
    if (testInput === ""){
        return "Empty";
    } else if (isNaN(testInput) === true ){
        return "Not a Number";
    } else if (isNaN(testInput) === false ){
        return "Is a Number";
    } else if (testInput.includes(".")){
        return "dot";
    }
    
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  
    let launchStatus= document.getElementById('launchStatus');
    let fuelStatus= document.getElementById("fuelStatus");
    let cargoStatus= document.getElementById("cargoStatus");
    let pilotStatus= document.getElementById("pilotStatus");
    let copilotStatus= document.getElementById("copilotStatus");
    let ready= true;
    
    if (validateInput(pilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(copilot) === "Empty" || validateInput(cargoLevel)=== "Empty") {
        alert("All fields are required");
    } else if(validateInput(fuelLevel)=== "Not a Number" ||  validateInput(cargoLevel)=== "Not a Number") {
        alert("Please enter valid number.");
    } else if(validateInput(pilot) === "Is a Number" ||  validateInput(copilot) === "Is a Number" || validateInput(copilot) === "dot" && validateInput(pilot) === "."){
       
        alert("Please enter valid name.")
    
    list.style.visibility= "hidden";
    launchStatus.style.color= "black";
    launchStatus.innerHTML= "Awaiting Information Before Launch";

    } else {
        list.style.visibility= "visible";
        pilotStatus.innerHTML= String(`Pilot ${pilot} is ready for launch`) +(".") ;
        copilotStatus.innerHTML= String(`Co-pilot ${copilot} is ready for launch`) +(".") ;

    }

   if(fuelLevel < 10000) {
    ready= false;
    fuelStatus.innerHTML= "Fuel level too low for launch";
   } else {
    fuelStatus.innerHTML= "Fuel level high enough for launch";
   }

   if (cargoLevel > 10000) {
    ready= false;
    cargoStatus.innerHTML= "Cargo mass too heavy for launch";

   } else {
    cargoStatus.innerHTML= "Cargo mass low enough for launch";
   }

   

  if(ready){
    launchStatus.style.color= "rgb(65, 159, 106";
   launchStatus.innerHTML= "Shuttle is Ready for Launch";
   

   } else{
    list.style.visibility= "visible";
    launchStatus.style.color= "rgb(199, 37, 78)";
    launchStatus.innerHTML= "Shuttle Not Ready for Launch";
   }
    


    
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        
           console.log(planetsReturned)

        });
console.log(planetsReturned)
    return planetsReturned;
}

function pickPlanet(planets) {
    
    let random= Math.floor(Math.random() * planets.length);
    let target= planets[random];
    console.log(target)
    return target;
    
    }


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
