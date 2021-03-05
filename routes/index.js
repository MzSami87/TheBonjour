const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true}, {useUnifiedTopology:true});
const conn = mongoose.Collection;

const usersSchema = new mongoose.Schema ({
    name: String,
    email: String,
    phone: String,
    comment: String
});

const user = mongoose.model('User', usersSchema);
const 