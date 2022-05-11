import whisky from "../src/images/whiskey.jpg";
import hazel from "../src/images/hazel.jpg";
import tubby from "../src/images/tubby.jpg";

const dogs = [
  {
    name: "hazel",
    age: 4,
    image: hazel,
    hobby: "bring the newspaper",
  },
  {
    name: "whiskey",
    age: 6,
    image: whisky,
    hobby: "catching balls",
  },
  {
    name: "tubby",
    age: 2,
    image: tubby,
    hobby: "bringing shoes",
  },
];

const getDogs = () => {
  return dogs;
};

const getDog = (name) => {
  return dogs.find((dog) => dog.name === name);
};

export { getDog, getDogs };