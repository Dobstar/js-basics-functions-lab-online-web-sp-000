// Code your solution in this file!
const distanceFromHqInBlocks = (blockNo) => {
    if (blockNo > 42){
        return blockNo - 42;
    } else {
        return 42 - blockNo;
    }
};

const distanceFromHqInFeet = (blockNo) => {
    return distanceFromHqInBlocks(blockNo) * 264;
};

const distanceTravelledInFeet = (beginning, destination) => {
    if (beginning < destination){
        return (destination - beginning) * 264;
    } else {
        return (beginning - destination) * 264;
    }
};

const calculatesFarePrice = (start, destination) => {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
};