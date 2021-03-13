// Write a function "coolCities" which takes an array of city Objects like such:
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
// and returns a new array containing only those cities whose temperature is
// cooler than 70 degrees.
function coolCities(arr){
    let temps = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].temperature< 70){
            temps.push(arr[i]);
        }
    }
    return temps;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "cityNames" which takes an array of city objects like the
// above problem and returns an array of the cities names.
function cityNames(arr){
    let temps = [];
    for(let i = 0; i < arr.length; i++){   
        temps.push(arr[i].name);
    }
    return temps;
}