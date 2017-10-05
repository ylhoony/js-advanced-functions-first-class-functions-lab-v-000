// Code your solution in this file!

const returnFirstTwoDrivers = (collection) => {
  return collection.slice(0, 2);
}

const returnLastTwoDrivers = (collection) => {
  return collection.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
  return (fare) => { return num * fare; };
}

const fareDoubler = () => {
  
} 
