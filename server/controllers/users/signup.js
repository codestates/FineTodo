const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.

  try{
    const {user_id, password, username, age} =req.body;
    if(!username || !user_id || !password || !age){
      return res.status(422).send("insufficient parameters supplied");
    } else {

      await user.findOrCreate({
        where : {user_id : user_id},
        defaults : {
          user_name: username,
          password: password,
          user_age: age
        }
      }).then(([result,isCreated])=> {
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
