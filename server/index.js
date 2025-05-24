const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://imalkadilakshan99:VyPFY6xzpt7QLbuC@cluster0.lfwonkp.mongodb.net/CRUD")
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Failed to connect to MongoDB',err);
})


//Create User
app.post('/createUser',(req,res)=>{
    UserModel.create(req.body)
    .then((data)=>{
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    })
});

//All users
app.get('/', (req,res) => {
    UserModel.find()
    .then(Users => res.json(Users))
    .catch(err => res.json(err));
});

//update one select user
app.get('/getUser/:id', (req,res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(Users => res.json(Users))
    .catch(err => res.json(err));
});

//update
app.put('/updateUser/:id',(req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(Users => res.json(Users))
    .catch(err => res.json(err));
});

//delete user
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(Users => res.json(Users))
    .catch(err => res.json(err));
})











app.listen(5000 , ()=>{
    console.log("Server is running on port 5000")
})