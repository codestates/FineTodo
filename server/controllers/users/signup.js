const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.

  try{
    const {user_id, password, user_name, user_age} = req.body;
    if(!user_id || !password || !user_name || !user_age){
      return res.status(422).send("insufficient parameters supplied");
    } else {
       user.findOrCreate({
        where : {user_id : user_id},
        defaults : {
          user_name: user_name,
          password: password,
          user_age: user_age
        }
      }).then(([result, isCreated])=> {
          if(!isCreated){
            return res.status(409).send("id exists")
          } else {
            return res.status(201).cookie("jwt",sendAccessToken).json({message : "ok"})
          }
      })
    }
  } 
  catch(err){
      return ;
  }
   

  


  //res.status(409).send();
};
