var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('adminlogin');
});

// router.get('admin/home', function (req, res, next) {
//   res.render('admin/home');
// });

router.post('/login', function (req, res, next) {
  var params = req.body;
  var name = params.name;
  var password = params.password;
  if (name == '123' && password == '123') {
    console.log('登录成功');
    res.write('success');
  } else {
    console.log('登录失败');
    res.write('failure');
  }
  res.status(200).end();
});

module.exports = router;
