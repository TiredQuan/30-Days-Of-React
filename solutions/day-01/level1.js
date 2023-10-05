// let bbaby = Array()
// let five = [1,2,3,4,5]
// console.log(five.length)
// console.log(five[0])
// console.log(five[2])
// console.log(five[4])
let mixedDataTypes = [[1,2,3],'bruh',5,5,5]
let itCompanies = ['Google', 'Facebook', 'Apple']

console.log(itCompanies)
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies.length)
itCompanies.forEach(i => {
    console.log(i)
});
// itCompanies.forEach(i => {
//     console.log(i.toUpperCase())
// });
itCompanies.forEach(i=> {
    i = i.toUpperCase()
    console.log(i)
})
console.log(`${itCompanies[0]}, ${itCompanies[1]} and ${itCompanies[2]} are STUPID`)
itCompanies.forEach(i => {
    i == 'Facebook' ? console.log("yep it's there") : console.log("No it's not there")
})
// itCompanies.shift()
// console.log(itCompanies)
console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0,1))
console.log(itCompanies.slice(1,2))
console.log(itCompanies.slice(2))
