let catAverageAgeArray = [];
let catAverageAge;
let catAverageWeightArray = [];
let catAverageWeight;

let catBreedTotal;

let catpic;
await fetch("https://api.thecatapi.com/v1/breeds")
  .then((response) => response.json())
  .then((data) => {
    const catData = data;
    catData.forEach((item) => {
      catAverageAgeArray.push(averageCatLifespan(item.life_span));
      catAverageWeightArray.push(averageCatLifespan(item.weight.metric));

      catBreedTotal = data.length;
    });
  });
await fetch("https://api.thecatapi.com/v1/images/search?breed_id=abys")
  .then((response) => response.json())
  .then((data) => {
    const catData = data;
    catpic = catData[0].url;
  });

catAverageAge = calculateAverage(catAverageAgeArray).toFixed(2);
catAverageWeight = calculateAverage(catAverageWeightArray).toFixed(2);

function calculateAverage(array) {
  let total = 0,
    count = 0;
  array.forEach((item) => {
    total += item;
    count++;
  });
  return total / count;
}
function averageCatLifespan(catstats) {
  let catArray = catstats.match(/\d+/g).map(Number);
  return calculateAverage(catArray);
}

export default function FetchCat() {
  return (
    <>
      <h1>There are {catBreedTotal} cat breeds</h1>
      <h2>
        On average a cat can weight about {catAverageWeight} and live{" "}
        {catAverageAge} years
      </h2>
      <img src={catpic} alt="" />
    </>
  );
}

//consult the whiteboard for what to do next
