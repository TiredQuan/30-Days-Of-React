let catAverageAgeArray = [];
let catAverageAge;
let catAverageWeightArray = [];
let catAverageWeight;

await fetch("https://api.thecatapi.com/v1/breeds")
  .then((response) => response.json())
  .then((data) => {
    const catData = data;
    catData.forEach((item) => {
      catAverageAgeArray.push(averageCatLifespan(item.life_span));
      catAverageWeightArray.push(averageCatLifespan(item.weight.metric));
    });
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
      <h1>
        On average a cat can weight about {catAverageWeight} and live{" "}
        {catAverageAge} years
      </h1>
    </>
  );
}
