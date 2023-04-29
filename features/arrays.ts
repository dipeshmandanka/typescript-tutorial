const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];


// const car = carMakers[0];
const myCar = carMakers.pop();

// carMakers.push(100);

carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());


const names: string[] = ["dipesh", "bhavik"];

console.log(names.map((name: string): string => {
  return name.toUpperCase()
}));
