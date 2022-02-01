// Code your solution in this file!
let HQ = 42

function distanceFromHqInBlocks(street) {
    if (street >= 42){
        return (street - HQ);
    } else {
        return (HQ - street);
    }

}


function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}


function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264; 
    } else if (destination > start) {
        return (destination - start) * 264;
    }
    
}


function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400) {
               return 0;

    } else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) *.02;
    
    } else if (distanceTravelledInFeet(start, destination) >= 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;

    } else {
        return "cannot travel that far"
    }

}


console.log(calculatesFarePrice(34, 28));