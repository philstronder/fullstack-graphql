const user = require('./user')
const profile = require('./profile')
const brand = require('./brand')

 module.exports = {
    ...user,
    ...profile,
    ...brand
 }