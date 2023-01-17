// Code your solution in this file!
const distanceFromHqInBlocks = (value) => value > 42 ? value - 42 : 42 - value;
const distanceFromHqInFeet = (value) => distanceFromHqInBlocks(value) * 264;
const distanceTravelledInFeet = (start, destination) => destination > start ? (destination - start) * 264 : (start - destination) * 264;
const calculatesFarePrice = (start, destination) => {
    // 400 feet free
    // 400 to 2000, 2 cents per feet, not counting the first 400 feet
    // over 2500 feet not allowed
    if (distanceTravelledInFeet(start, destination) <= 400) return 0;
    if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    }
    if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) return 25;
    if (distanceTravelledInFeet(start, destination) > 2500) return 'cannot travel that far';
}
