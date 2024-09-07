const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const User  = require("./models/user")
const methodOverride = require('method-override');



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')); 
const port = 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017/crudmongo";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}


app.get("/users",async(req,res)=>{
    // User.insertMany([
    //   { name: "John Doe", email: "johndoe@example.com", age: 25 },
    //   { name: "Jane Smith", email: "janesmith@example.com", age: 30 },
    //   { name: "Robert Brown", email: "robertbrown@example.com", age: 22 },
    //   { name: "Emily Davis", email: "emilydavis@example.com", age: 28 },
    //   { name: "Michael Johnson", email: "michaeljohnson@example.com", age: 35 },
    //   { name: "Alice Green", email: "alicegreen@example.com", age: 24 },
    //   { name: "David Wilson", email: "davidwilson@example.com", age: 29 },
    //   { name: "Sophia Lee", email: "sophialee@example.com", age: 32 },
    //   { name: "Daniel Garcia", email: "danielgarcia@example.com", age: 27 },
    //   { name: "Olivia Martinez", email: "oliviamartinez@example.com", age: 31 }
    // ])
    const users = await User.find();
    res.render("index.ejs",{users})
    
})
 app.get("/users/new",(req,res)=>{
    res.render("new.ejs")
 })

 app.post("/users/new", async (req, res) => {
    const {name,email,age}=req.body;
    await User.create({ name, email, age });
    res.redirect('/users');
});


app.get('/users/:id/edit', async (req, res) => {
    
   let {id} = req.params;
   let user = await User.findById(id);
   res.render("edit.ejs",{user});
});

app.put("/users/:id",async(req,res)=>{
  let  {id} = req.params;
  let {name:Newname,age:Newage} = req.body;
  //console.log(Newname,Newage)
  let updatedUser = await User.findByIdAndUpdate(id,
     {name:Newname,age:Newage},
     {runValidators:true,new:true});
    //  console.log(updatedUser)
    res.redirect("/users");
  
})

app.delete("/users/:id",async(req,res)=>{
  let  {id} = req.params;
  await User.findByIdAndDelete(id);
  console.log("user deleted")
  res.redirect("/users");
  
  

})












app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/users`);
});