const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

let answerScheme = new Schema({
    id:
    {
        type: String
    },
    questionNo:{
        type: Number
    },
    answerNo:{
        type: Number
    },
    answer:{
        type: String
    }
});
const answers = mongoose.model('answer', answerScheme)
module.exports = answers;

// const answer3 =new answers({
//     id: 4,
//     questionNo: 1,
//     answerNo:4,
//     answer:"Black"
// })

// answer3.save((err)=>{
//     if(err) throw err
//     else
//     {
//         console.log("Error saving data!")
//     }
    
// })