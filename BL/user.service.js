require('dotenv').config()
require('../DL/db').connect()

const userDL = require('../DL/user.controller')

async function createNewUser(data) {
    // validation fields
    if (!data.fullName || !data.email || !data.password) throw "missing data"
    
    // if user is exist
    let user = await userDL.read({email:data.email})
    if(user[0]) throw 'user is exist'

    console.log(await userDL.create(data))
}

let newUser = {
    fullName: 'liron haim',
    // email: 'Avi@Levi.com',
    email: 'liron@gmail.com',
    password: '98372jhxz',

}

createNewUser(newUser)