const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    matricule: {
        type: String
    }
},
{
    collection: 'user'
}
);

module.exports = mongoose.model('userSchema', userSchema)