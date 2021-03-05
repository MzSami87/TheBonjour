const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

app.use(express.urlencoded({ extended: true}));

mongoose.connect('mongodb+srv://admin:admin@cluster0.czvrs.mongodb.net/Contact_Form?retryWrites=true&w=majority', { useNewUrlParser: true}, {useUnifiedTopology:true});

//create a data schema
const usersSchema = {
    name: String,
    email: String,
    phone: String,
    comment: String
}

const User = mongoose.model('User', usersSchema);

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/contact.html');
})

//app post
app.post('/', function(req,res) {
    let newUser = new User ({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        comment: req.body.comment

    });
    newUser.save();
    res.redirect('/');
})

app.listen(5000, function() {
    console.log('Server is running');
})
