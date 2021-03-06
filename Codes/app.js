var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ueditor = require("ueditor");


//tooth 是网站主页面，route 以此为基始
//Todo 这得怎么给合并一下——spy
var routes = require('./routes/tooth');
var users = require('./routes/users');
var guide = require('./routes/guide');
var order = require('./routes/order');
var medical = require('./routes/medical');
var doctor = require('./routes/doctors');
var hospital = require('./routes/hospital');
var setting = require('./routes/setting');
var branch = require('./routes/branch');
var skill = require('./routes/skill');
var admin = require('./routes/admin');
// var admin_home = require('./routes/admin_home');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
// 下面两行为了用母版页
app.engine('html', require('ejs-mate'));
app.locals._layoutFile = 'layout.html';
app.set('view engine', 'html');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/admin', admin);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      console.dir(err);
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//后台页面使用ueditor，下面是关于ueditor的相关配置
//
//
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());
// /ueditor 入口地址配置 https://github.com/netpi/ueditor/blob/master/example/public/ueditor/ueditor.config.js
// 官方例子是这样的 serverUrl: URL + "php/controller.php"
// 我们要把它改成 serverUrl: URL + 'ue'
app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function(req, res, next) {

  // ueditor 客户发起上传图片请求

  if (req.query.action === 'uploadimage') {

    // 这里你可以获得上传图片的信息
    var foo = req.ueditor;
    console.log(foo.filename); // exp.png
    console.log(foo.encoding); // 7bit
    console.log(foo.mimetype); // image/png

    // 下面填写你要把图片保存到的路径 （ 以 path.join(__dirname, 'public') 作为根路径）
    var img_url = 'yourpath';
    res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage') {
    var dir_url = 'your img_dir'; // 要展示给客户端的文件夹路径
    res.ue_list(dir_url) // 客户端会列出 dir_url 目录下的所有图片
  }
  // 客户端发起其它请求
  else {
    res.setHeader('Content-Type', 'application/json');
    // 这里填写 ueditor.config.json 这个文件的路径
    res.redirect('/ueditor/ueditor.config.json')
  }
}));



app.listen(3008);

console.log('i am running')

module.exports = app;