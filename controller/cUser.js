const User = require('../model/User');

let addUser = function(req,res) {
  let data = req.body;
  let newUser = User({
    username : data.username,
    userId : data.userId,
    profile_pitcure : data.profile_pitcure
  });
  
  
  newUser.save(function(err) {
    if (err) {
      res.status(501).send(`something wrong with your connection ${err}`)
    } else {
      res.send("1 Document Added")
    }
  })
}

let findUser = function(req,res){
  User.find({}, function(err,users) {
    if (err) {
      res.status(501).send(`something wrong with your connection ${err}`);
    } else {
      res.send(users);
    }
  })
}


module.exports = {
  addUser,
  findUser
};