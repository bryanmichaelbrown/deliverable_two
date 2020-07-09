var vacationType= window.prompt("What kind of trip would you like to on: Musical, Tropical, or Adventerous");
var groupSize= window.prompt("What is the total group size?");


let travelDestination = vacationType;
let travelSuggestion = groupSize;

if (vacationType === "musical"){
    travelDestination= "New Orleans";
}else if (vacationType === "tropical"){
    travelDestination= "a beach vacation in Mexico";
}else if (vacationType === "adventerous"){
    travelDestination= "the Grand Canyon for whitewater rafting";
}else{
    travelDestination="somewhere"
}

if (groupSize <=2){
    travelSuggestion="first class flight";
}else if (groupSize >=3 && groupSize <6){
    travelSuggestion="helicopter";
}else if (groupSize >=6){
    travelSuggestion="charter flight";
}else{
    travelSuggestion="trip"
}

console.log('Since you want a ' + vacationType + ' trip for the ' + groupSize + ' of you, you should take a ' + travelSuggestion + ' to ' + travelDestination);