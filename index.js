/*

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `getName`
 * Example ✅
 * 
 * @instructions
 * Must return input object's `name` property.
 *
 * Sample data expected output: `Luke Skywalker`
*/
function getName(character) {
  // ⭐️ Example Solution Provided For First Function ⭐️
  return character.name
}

/**
 * ### Challenge `getFilmCount`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Must return the number of elements in the `films` property.
 *
 * Sample data expected output: 5
 */
function getFilmCount(character) {
  // TODO: Add your code inside the functions (others below).
  return character.films.length;
}

/**
 * ### Challenge `getSecondStarshipName`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return second starship's name from `starships` property.
 * If length is 0. Return 'none'
*/
function getSecondStarshipName(character) {
  if (character.starships[1] == undefined) {
    return `none`;
  }
  else {
    return character.starships[1].name;
  }
}

/**
 * ### Challenge `getSummary`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Combine specified field values and return them in the following string format:
 *    Template: `{name}, {height}cm, {mass}kg. Featured in {film count} films.`
 *    Result: `Luke Skywalker, 172cm, 77kg. Featured in 5 films.`
 */
function getSummary(character) {
  return `${character.name}, ${character.height}cm, ${character.mass}kg. Featured in ${character.films.length} films.`;
}

/**
 * ### Challenge `getVehiclesCostInCreditsSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the total cost in credits for all vehicles defined on the input character.
 * Sample data expected output: 8000
*/


function getVehiclesCostInCreditsSumTotal(character) {
  let sumCredits = 0;
  let intCost = 0;
  for (let i = 0; i < character.vehicles.length; i++){
    if (character.vehicles[i].cost_in_credits == null){
      intCost = 0;
    }
    else {
      intCost = parseInt(character.vehicles[i].cost_in_credits, 10);
    }
    sumCredits += intCost;

  }
  return sumCredits;
}




/**
 * ### Challenge `getStarshipPassengerAndCrewSumTotal`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Sum the number of crew and passenger spots for all starships defined on the
 * input character.
 *
 * Sample data expected output: 27
*/

function getStarshipPassengerAndCrewSumTotal(character) {
  let passengerSum = 0;
  let crewSum = 0;
  for (let i = 0; i < character.starships.length; i++) {
    passengerSum += character.starships[i].passengers;
    crewSum += character.starships[i].crew;
  }
  return passengerSum+crewSum;
}

/**
 * ### Challenge `getNthFilm`
 * MVP Challenge 🤓
 * 
 * @instructions
 * Return the Nth `films` value (in this case title).
 * Rules: filmNumber starts at 1 and refers to the *first* film, and includes only the range 1-3.
 * Any numbers outside that range should throw an error.
 * The Error must mention the name of your favorite _extra cheesy_ movie.
 *
 * Given film #1, expected output: `A New Hope`
 * Given film #7, expected error: `There are only 3 Star Wars movies. Flan fiction excluded.`
*/
function getNthFilm(character, filmNumber) {
  if (1<= filmNumber && filmNumber<=3){
    return character.films[filmNumber-1];
  }
  else {
    return `There are only 3 Star Wars movies. Grease excluded.`
  }
}

/**
 * ### Challenge `getCargoCapacityTotal`
 * Stretch Goal 💪
 * 
 * @instructions
 * Sum the total cargo capacity for *all* vehicles and starships.
 * Some objects may not have a value for their cargo capacity.
 *
 * Sample data expected output: 80124
*/
function getCargoCapacityTotal(character) {
  let vehicleCargoSum = 0;
  let starshipCargoSum = 0;
  for (let i=0; i<character.vehicles.length; i++){
    if (character.vehicles[i].cargo_capacity == null){
      vehicleCargoSum += 0;
    }
    else{
      let intCargo = parseInt(character.vehicles[i].cargo_capacity, 10);
      // console.log(intCargo);
      vehicleCargoSum += intCargo;
    }
  }
  for (let j=0; j<character.starships.length; j++){
    if (character.starships[j].cargo_capacity == null){
      starshipCargoSum += 0;
    }
    else {
      let intCargo = parseInt(character.starships[j].cargo_capacity, 10);
      // console.log(intCargo);
      starshipCargoSum += intCargo;
    }
  }
  return vehicleCargoSum+starshipCargoSum;
}


/**
 * ### Challenge `getFastestStarshipName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Find the fastest starship (by atmospheric speed.)
 * Determine the correct field to compare, and return the name of the fastest.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `X-wing`
*/
function getFastestStarshipName(character) {
  if (character.starships.length == 0) {
    return `none`;
  }
  else {
    let fastestSpeed = 0;
    let fastestName = "";
    for (let i=0; i<character.starships.length; i++){
      if (parseInt(character.starships[i].max_atmosphering_speed, 10) >= fastestSpeed) {
        fastestSpeed = character.starships[i].max_atmosphering_speed;
        fastestName = character.starships[i].name;
      }
    }
    return `${fastestName}`;
  }
}


/**
 * ### Challenge `getLargestCargoStarshipModelName`
 * Stretch Goal 💪
 * 
 * @instructions
 * Determine the starship with the largest cargo capacity.
 * Return it's **_model_** property.
 * If the character does not have any starships, then return 'none'.
 *
 * Sample data expected output: `Lambda-class T-4a shuttle`
*/
function getLargestCargoStarshipModelName(character) {
  if (character.starships.length == 0) {
    return `none`;
  }
  else {
    let largestCapacity = 0;
    let largestCapacityModel = "";
        for (let i=0; i<character.starships.length; i++){
      if (parseInt(character.starships[i].cargo_capacity, 10) >= largestCapacity) {
        largestCapacity = parseInt(character.starships[i].cargo_capacity, 10);
        largestCapacityModel = character.starships[i].model;
      }
    }
    return `${largestCapacityModel}`;
  }
}

/**
 * ### Challenge `getSlowestVehicleOrStarshipName`
 *Stretch Goal 💪
 *
 * @instructions
 * Find the slowest transport (including vehicles and starships)
 * based on `max_atmosphering_speed`, and return its name.
 * If the character does not have any starships or vehicles, then return string 'none'.
 *
*/
function getSlowestVehicleOrStarshipName(character) {
  if (character.starships.length == 0 && character.vehicles.length ==0) {
    return `none`;
  }
  else {
    let slowestSpeed = 1000000000000000000000000; // :) 
    let slowestName = "";
    for (let i=0; i<character.starships.length; i++){
      if (parseInt(character.starships[i].max_atmosphering_speed, 10) <= slowestSpeed) {
        slowestSpeed = character.starships[i].max_atmosphering_speed;
        slowestName = character.starships[i].name;
      }
    }
    for (let j=0; j<character.vehicles.length; j++){
      if (parseInt(character.vehicles[j].max_atmosphering_speed, 10) <= slowestSpeed) {
        slowestSpeed = character.vehicles[j].max_atmosphering_speed;
        slowestName = character.vehicles[j].name;
      }
    }
    return `${slowestName}`;
  }
}





/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
// DO NOT CHANGE ANYTHING BELOW THIS LINE //
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (getName) { module.exports.getName = getName }
  if (getFilmCount) { module.exports.getFilmCount = getFilmCount }
  if (getSecondStarshipName) { module.exports.getSecondStarshipName = getSecondStarshipName }
  if (getSummary) { module.exports.getSummary = getSummary }
  if (getVehiclesCostInCreditsSumTotal) { module.exports.getVehiclesCostInCreditsSumTotal = getVehiclesCostInCreditsSumTotal }
  if (getStarshipPassengerAndCrewSumTotal) { module.exports.getStarshipPassengerAndCrewSumTotal = getStarshipPassengerAndCrewSumTotal }
  if (getNthFilm) { module.exports.getNthFilm = getNthFilm }
  if (getCargoCapacityTotal) { module.exports.getCargoCapacityTotal = getCargoCapacityTotal }
  if (getFastestStarshipName) { module.exports.getFastestStarshipName = getFastestStarshipName }
  if (getLargestCargoStarshipModelName) { module.exports.getLargestCargoStarshipModelName = getLargestCargoStarshipModelName }
  if (getSlowestVehicleOrStarshipName) { module.exports.getSlowestVehicleOrStarshipName = getSlowestVehicleOrStarshipName }
}
