var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/adminlogin', function (req, res, next) {
  res.render('admin/adminlogin', { layout: 'adminlayout' });
});

router.get('/admindoctor',function (req,res,next) {
    res.render('admin/admindoctor', { layout: 'adminlayout' });
});

router.get('/home', function (req, res, next) {
  res.render('admin/home', { layout: 'adminlayout' });
});

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
