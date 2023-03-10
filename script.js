console.log('i am mongoose')
const User = require("./User")

const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

mongoose.connect('mongodb+srv://Mongoose1:tripplex@cluster0.d0n5cza.mongodb.net/?retryWrites=true&w=majority', ()=>{
    console.log('connected')
},
e => console.error(e)
)
//  const user = new User(
//     {
//         name: "kenny", age: 40
//     }
//  )

//  user.save().then(() => console.log("user saved"))
run()
async function run(){
    const user = new User({name:"kenny", age: 40,
     email: olu@gmail.com, 
});
    console.log(user)
}