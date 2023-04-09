// import animals, {useAnimals} from "./data";

// //Destructuring Arrays
// // console.log(animals);
// const [cat, dog] = animals;
// // console.log(cat);

// const [animal, makeSound] = useAnimals(cat);  
// console.log(animal);
// makeSound();

// // const { name, sound} = cat;

// // const {name: catName, sound: catSound } = cat;

// // const {name = "Fluffy", sound = "Purr"} = cat;

// // const {feedingRequirements: {food, water} } = cat;

// console.log(food);


import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

console.log(cars);

const [honda, tesla] = cars;

const {
    speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
    speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {colorByPopularity: [hondaTopColor] } = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColor}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColor}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
