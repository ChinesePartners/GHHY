var express = require('express');
var router = express.Router();

router.get('/admindoctor', function (req, res, next) {
  res.render('admin/admindoctor', { layout: 'adminlayout' });
});


module.exports = router;
