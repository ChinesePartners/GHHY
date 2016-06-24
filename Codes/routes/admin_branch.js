var express = require('express');
var router = express.Router();

router.get('/adminbranch', function (req, res, next) {
  res.render('admin/adminbranch'', { layout: 'adminlayout' });
});


module.exports = router;