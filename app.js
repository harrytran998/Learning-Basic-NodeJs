const express = require('express')
const bodyParser = require('body-parser')
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
const _404_Not_Found = require('./routes/404-Not-Found')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/admin', adminRouter)
app.use('/shop', shopRouter)
app.use(_404_Not_Found)

app.listen(3000)

// console.log(toArray(1, 2, 3, 4))
// // console.log(copyArray3)
// // console.log(copyArray2)
// // console.log(copyArray)


// const hobbies = ['Swimming', 'Fucking', 'Eating', 'Travelling', 'Hunting Girl', 'Slepping']

// const copyArray = hobbies.slice(2,4) // to copy an array  
// const copyArray2 = [hobbies] // copy hobbies array to one element in copyArray2
// const copyArray3 = [...hobbies] //Spread Operator

// const toArray = (...args) => { //to merge multiple arguments into an array
//   return args   // have flexibility
// }
 