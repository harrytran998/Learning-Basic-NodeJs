const hobbies = ['Swimming', 'Fucking', 'Eating', 'Travelling', 'Hunting Girl', 'Slepping']

const copyArray = hobbies.slice(2,4) // to copy an array  
const copyArray2 = [hobbies] // copy hobbies array to one element in copyArray2
const copyArray3 = [...hobbies] //Spread Operator



console.log(copyArray3)
console.log(copyArray2)
console.log(copyArray)

