let catAverageAgeArray = [];
let catAverageAge;
let catAverageWeightArray = [];
let catAverageWeight;
let catCountryOriginDuped = []
let catCountryOrigin
let catCountryOriginDupedCount
let catCountryOriginCountSortable = []
let catCountryOriginCountSortableAnnounce = []
let catcountryOriginValueArr
let catCountryOriginValueMax
await fetch("https://api.thecatapi.com/v1/breeds")
  .then((response) => response.json()) // one extra step
  .then((data) => {
    const catData = data;
    catData.forEach((item) => {
      catAverageAgeArray.push(averageCatLifespan(item.life_span));
      catAverageWeightArray.push(averageCatLifespan(item.weight.metric));
      catCountryOriginDuped.push(item.origin)
      catCountryOrigin = [...new Set(catCountryOriginDuped)]
    });
    catCountryOriginDupedCount = catCountryOriginDuped.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {});
    // catCountryOriginDupedCount.forEach((item)=>{
    //   catCountryOriginCountSortable.pop([item, catCountryOriginDupedCount[item]])
    // })
    for (let item in catCountryOriginDupedCount) {
      catCountryOriginCountSortable.unshift([item, catCountryOriginDupedCount[item]])    }
    catCountryOriginCountSortable.sort((a,b)=>{
      return b[1] - a[1]
    })
    catCountryOriginCountSortableAnnounce = listCatArray(catCountryOriginCountSortable)
    catcountryOriginValueArr = Object.values(catCountryOriginDupedCount)
    catCountryOriginValueMax = Math.max(...catcountryOriginValueArr)
    catAverageAge = calculateAverage(catAverageAgeArray).toFixed(2);
    catAverageWeight = calculateAverage(catAverageWeightArray).toFixed(2);
    
    console.log(catCountryOriginCountSortable)
    console.log(catcountryOriginValueArr)
    console.log(catData)
    console.log(catCountryOriginDuped)
    console.log(catCountryOriginDupedCount)
  });

function listCatArray(array){
  let elem
  array.forEach((item)=>{
    elem += item[0] + " " +item [1]
  })
  return elem
}

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
    <div>
      <h1>
        On average a cat can weight about {catAverageWeight} and live{" "}
        {catAverageAge} years
      </h1>
      <h2>Out of all the countries out there, {catCountryOrigin.length} has cats</h2>
      <h3>Country with the highest numbers of cats are {catCountryOriginValueMax} OK ItS FUCKING AMERICA STOP IT MAN</h3>
      <div>
        <p>{catCountryOriginCountSortableAnnounce}</p>
      </div>

    </div>
  );
}
