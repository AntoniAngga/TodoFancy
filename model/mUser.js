const mongoose = require('mongoose');
const Schema = mongoose.schema;


const userSchema = new Schema({
  username : {type:String},
  profile_pitcure : {type:String}
})

let user = mongoose.model('user',userSchema);

module.exports = user;