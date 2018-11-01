var createError = require('http-errors');
var express = require('express');
var app = express();
var http = require('http');
var server = app.listen(4000);
var io = require('socket.io').listen(server);

var redis = require('socket.io-redis');
var hashName = new Array();
var _ = require('underscore');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials","true");

    if (req.method == 'OPTIONS') {
        res.send(200);
        /*让options请求快速返回*/
    } else {
        next();
    }
});
io.set('transports', ['websocket', 'xhr-polling', 'jsonp-polling', 'htmlfile', 'flashsocket']);
io.set('origins', '*:*');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	name:"xinxi",
	secret:"123456",
	cookie:{maxAge:6000000},
	resave:false,
	saveUninitialized:true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var psocket = {};
io.on('connection', function(socket){
    socket.on('setName',function (phone) {
          if(!( psocket[phone] in psocket)){
          socket.phone = phone;
          psocket[phone] = socket.id;
          socket.emit('user', psocket);

     }
     socket.on('other', function (from,to,talkres) {
      console.log('我是从'+from +'来，要发送到 '+to+"去，消息是"+talkres);
      if(to in psocket){
          socket.to(psocket[to]).emit('to'+to,{talkres:talkres,from:from,to:to});

        }
      });
     socket.on('private', function (from,to,msg) {
     if(to in psocket){
          socket.to(psocket[to]).emit('to'+to,{msg:msg,from:from,to:to});
        }
      });
    });
    console.log('客户端连接成功');
    socket.on('disconnect', function(){
        console.log('客户端连接失败'+socket.id);
    });
});

module.exports = app;
