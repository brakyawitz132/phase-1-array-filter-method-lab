// Code your solution here
function findMatching(names,string) {
    const listOfMatch = names.filter(index => index.toLowerCase()===string.toLowerCase())
    return listOfMatch
}

function fuzzyMatch(names,string) {
    const listOfFuzz = names.filter(index => index[0]===string[0])
    return listOfFuzz
}

function matchName(array,string) {
    const nameMatch = array.filter(obj => obj.name===string)
    return nameMatch
}

// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ]

// console.log(matchName(drivers,'Bobby'))
