const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

let usersScheme = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});
const users = mongoose.model('user', usersScheme)
module.exports = users;

// const user1 =new users({
//     username: 'admin',
//     password: 'admin'
// })

// user1.save((err)=>{
//     if(err) throw err
//     else
//     {
//         console.log("Error saving data!")
//     }
    
// })