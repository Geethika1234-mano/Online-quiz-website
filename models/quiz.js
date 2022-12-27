const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

let quizScheme = new Schema({
    id:
    {
        type: String
    },
    questionNo:{
        type: Number
    },
    question:{
        type: String
    }
});
const quiz = mongoose.model('quize', quizScheme)
module.exports = quiz;

// const quiz1 =new quiz({
//     id: 1,
//     questionNo: 1,
//     question:"What is the color of the sky?"
// })

// quiz1.save((err)=>{
//     if(err) throw err
//     else
//     {
//         console.log("Error saving data!")
//     }
    
// })