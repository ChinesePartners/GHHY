var express = require('express');
var router = express.Router();
var querystring=require('querystring');
router.use(function (req,res,next) {
   var url=req.url;
    console.log(url);
    if(url.substring(0,6)=='/admin'){
        if(url=='/admin/adminLogin'||url=='/admin/login'){
            next();
        }else{//后台管理的请求需要验证session
            var cookie=req.headers.cookie;
            var items=cookie.split('=');
            if(items.length==2&&items[0]=='adminLogin'){
                var id=items[1];
                if(global.session&&global.session[id]){
                    next();
                }else{
                    res.redirect('/admin/adminLogin');
                }
            }else{
                res.redirect('/admin/adminLogin');
            }
        }
    }else{
        next();
    }
});

router.get('/', function (req, res, next) {
    res.render('tooth');
});
router.post('/getData', function (req, res, next) {
    console.log('getData');
    console.dir(req.body);
    var params = req.body;
    var service = params.serviceUrl;
    var func = params.funcName;
    var data = params.params;
    data=querystring.parse(data);
    var Bean = require('../service/' + service);
    data.doneService = function (result) {
        res.header(200);
        res.json(result);
    };
    try {
        var bean=new Bean();
        bean[func](data);
    } catch (e) {
        console.log(e)
        res.header(500);
    }
});
router.get('/tooth', function (req, res, next) {
    res.render('tooth');
});

router.get('/guide', function (req, res, next) {
    res.render('guide');
});

router.get('/order', function (req, res, next) {
    res.render('order');
});

router.get('/medical', function (req, res, next) {
    res.render('medical');
});

router.get('/doctor', function (req, res, next) {
    res.render('doctor');
});

router.get('/hospital', function (req, res, next) {
    res.render('hospital');
});

router.get('/setting', function (req, res, next) {
    res.render('setting');
});

router.get('/branch', function (req, res, next) {
    res.render('branch');
});

router.get('/skill', function (req, res, next) {
    res.render('skill');
});

// router.get('admin/adminlogin', function (req, res, next) {
//     res.render('admin/adminlogin',{ layout: null });
// });



// router.get('/*.*', function (req, res, next) {
//   console.log(req.url);
//   next();
// });

module.exports = router;