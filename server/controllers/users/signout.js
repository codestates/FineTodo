const session = require('express-session');
const { user } = require('../../models');

module.exports = {
  delete: (req, res) => {
    user
      .destroy({
        where: {
          id: req.session.user_id,
        },
      })
      .then(() => {
        //session 정보도 지워줘야함.
        req.session.destroy((err) => {
          if (err) {
            res.status(400).send('you are currently not logined');
          } else {
            res.status(200).send('안전하게 탈퇴처리되었습니다.');
          }
        });
      })
      .catch((err) => {
        res.status(500).send('err');
      });
    },
  };