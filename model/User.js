const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username : {type:String},
  userId : {type:String},
  profile_pitcure : {type:String}
})

let User = mongoose.model('user',userSchema);

module.exports = User;