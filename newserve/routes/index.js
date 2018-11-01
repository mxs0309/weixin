var express = require('express');
var router = express.Router();
var md5 = require("md5");
var send = require('../email/email');
var User = require('../modals/index');
// var Check = require('../check/index').checkLogin;
/* GET home page. */

router.post('/register', function(req, res, next) {
     const user = new User({
     	phone:req.body.phone,
     	password:req.body.password,
     	nickname:req.body.nickname,
   
     });
     console.log(user.phone)
     var jiamimima = md5(user.password);
     // console.log(jiamimima)
      User.findOne({ phone: req.body.phone }, function(err, doc) {
        if (err) {
            res.send({
                msg: "系统错误"
            });
        } else if (doc) {
            res.send({
                msg: "您已注册，请直接登录"
            });
        } else {
               User.create({
                        phone: user.phone,
                        password: jiamimima,
                        nickname: user.nickname
                    }, function(err, doc) {
                        if (err) {
                            res.send({
                                msg: "系统错误"
                            });
                            return;

                        } else { 
                        	req.session.user=user;
                            res.send({
                                data: true,
                                msg: "注册成功"
                            });
                          

                        }
                 });
        }
    });
});

// 登录接口
router.post('/login',function(req, res, next) {
    const user = new User({
        password: req.body.password,
        phone: req.body.phone
    });
    console.log(user.phone);

    User.findOne({ phone: user.phone }, function(err, doc) {
        console.log(doc);
        if (err) {
            res.send({
                data: false,
                msg: "系统错误"
            });
        } else if (!doc) {
            res.send({
                data: false,
                msg: "用户不存在"
            });
        } else {
            var jiamimima = md5(user.password);
            if (jiamimima != doc.password) {
                res.send({
                    data: false,
                    msg: "密码错误"
                });
            } else {
            	req.session.user=user;
            	console.log(req.session.user)
                res.send({
                    data: true,
                    msg: "登录成功",
                    nickname:doc.nickname
                });

            }
        }
    });
});

//搜索好友接口
router.post('/search', function(req, res, next) {
     let user = new User({
        phone: req.body.phone,
    });

      User.findOne({ phone: user.phone }, function(err, doc) {
        // console.log(doc);
        console.log(user.phone);
        if (err) {
            res.send({
                data: false,
                msg: "系统错误"
            });
        } else if (!doc) {
            res.send({
                data: false,
                msg: "该用户不存在"
            });
        } else {
           res.send({
                data: true,
                msg: "搜索成功"
            });

        }
    });
    
    });
//获取个人信息
router.get('/infolist', function(req, res, next) {
      console.log(req.query.weixinnum)
      User.findOne({ phone: req.query.weixinnum }, function(err, doc) {
        console.log(doc);
        if (err) {
            res.send({
                data: false,
                msg: "系统错误"
            });
        } else {
           res.send({
                data: true,
                msg: "查询成功",
                xinxi:doc
            });

        }
    });
    
 });
//修改昵称接口
router.post('/nick', function(req, res, next) {
     let user = new User({
        nickname: req.body.nickname,
        phone:req.body.phone
     });
     console.log(user)
     console.log(user.phone)
         User.update({phone:user.phone},{ nickname: user.nickname }, function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    msg: "昵称修改成功",
                })
            }
        })
    
    });
//修改性别接口
router.post('/sex', function(req, res, next) {
     let user = new User({
        sex: req.body.sex,
        phone:req.body.phone
     });
     console.log(user)
         User.update({phone:user.phone},{ sex: user.sex }, function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    msg: "昵称修改成功",
                })
            }
        })
    
    });

//获取个人信息
router.get('/gerenxinxi', function(req, res, next) {
      console.log(req.query.phone)
      User.findOne({ phone: req.query.phone }, function(err, doc) {
        console.log(doc);
        if (err) {
            res.send({
                data: false,
                msg: "系统错误"
            });
        } else {
           res.send({
                data: true,
                msg: "查询成功",
                xinxi:doc
            });

        }
    });
    
 });
//修改个性签名接口
router.post('/sign', function(req, res, next) {
     let user = new User({
        signature:req.body.sign,
        phone:req.body.phone
     });
     console.log(user.signature)
      console.log(user.phone)
         User.update({phone:user.phone},{ signature: user.signature }, function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    msg: "个性签名修改成功"
                })
            }
        })
    
    });
//修改邮箱接口
router.post('/email', function(req, res, next) {
     let user = new User({
        email:req.body.email,
        phone:req.body.phone
     });
     console.log(user.signature)
      console.log(user.phone)
      User.findOne({email:user.email},function(err,doc){
             if(err){
                res.send({
                    states:false,
                    msg:"查询失败"
                })
             }else if(doc){
                 res.send({
                    states:false,
                    msg:"该邮箱已被使用"
                })
             }else{
                  User.update({phone:user.phone},{ email: user.email }, function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    states:true,
                    msg: "个人邮箱添加成功，修改密码可用"
                })
            }
        })
             }
      })
    });

//修改地址接口
router.post('/prov', function(req, res, next) {
     let user = new User({
        prov:req.body.prov,
        city:req.body.city,
        phone:req.body.phone
     });
    console.log(user.phone)
          console.log(user.prov+user.city)
         User.update({phone:user.phone},{ prov: user.prov,city:user.city },{multi:true},function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                console.log(doc)
                res.send({
                    msg: "地址修改成功",
                    list: doc
                })
            }
        })
    
    });

//邮箱验证接口
router.post('/youxiangyanzheng', function(req, res, next) {
    let user = new User({
        phone: req.body.phone,
        email: req.body.email,
        test: req.body.test
    });

    User.findOne({ email: req.body.email }, function(err, doc) {
        if (err) {
            res.send({
                data: false,
                msg: "系统错误"
            });
        } else if (!doc) {
            res.send({
                data: false,
                msg: "无法查询到该邮箱"
            });
        } else {
            User.find({ email: user.email }, { phone: user.phone}, function(err, docs) {
                if (err) {
                    res.send({
                        data: false,
                        msg: "系统错误"
                    });
                } else if (docs) {
                    console.log(docs)
                    console.log(docs[0].phone)
                    console.log(user.phone)
                    if (docs[0].phone === user.phone) {
                        res.send({
                            data: true,
                            msg: '邮箱正确,邮件已发送成功,请登录' + doc.email + '进行修改密码操作'
                        });
                        var test = md5(user.email + user.phone);
                        var mail = {
                            from: '<1353920154@qq.com>',
                            subject: '修改密码',
                            to: user.email,
                            html: '<a href="http://localhost:8080/#/yanzheng?test=' + test + '">点击进入修改密码页面</a>'
                        };
                        send(mail);
                    } else {
                        res.send({
                            data: false,
                            msg: "邮箱和手机号输入错误，请重新输入"
                        });
                    }
                } else {
                    res.send({
                        data: false,
                        msg: "用户不存在"
                    });

                }
            })

        }
    });
});
//修改密码
router.post('/xiugai', function(req, res, next) {
    let user = new User({
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        test: req.body.test
    });
    var jiami = md5(user.email + user.phone);
    console.log(user.phone)
    console.log(user.email)
    console.log(jiami)
    console.log(req.body.test)
    if (jiami != req.body.test) {
        res.send({
            msg: "您的邮箱号码和手机号码不属于同一用户"
        })
    } else {
        User.update({ email: user.email }, { password: md5(user.password) }, function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                res.send({
                    msg: "密码已经修改成功，请使用新密码进行登录"
                })
            }
        })
    }
});
//查询
router.post('/relist', function(req, res, next) {
    let user = new User({
        phone: req.body.phone,
    });
    User.findOne({ phone: req.body.phone }, function(err, doc) {
        console.log(doc);
        if (err) {
            res.send({
                data: false,
                msg: "系统错误"
            });
        } else {
           res.send({
                data: true,
                msg: "查询成功",
                xinxi:doc
            });

        }
    });
});
//存请求好友数据
router.post('/updataReqfriend', function(req, res, next) {
    let user = new User({
        phone: req.body.phone,
        newsz:JSON.parse(req.body.newsz)
    });

    User.update({ phone: req.body.phone },{requests:JSON.parse(req.body.newsz)}, function(err, doc) {
        console.log(doc);
         console.log(JSON.parse(req.body.newsz));
        if (err) {
            res.send({
                data: false,
                msg: "系统错误"
            });
        } else {
           res.send({
                data: true,
                msg: "好友请求列表更新成功",
                xinxi:doc
            });

        }
    });
});
//存好友列表数组
router.post('/updatafriendList', function(req, res, next) {
    let user = new User({
        phone: req.body.phone,
        myList:JSON.parse(req.body.myList)
    });

    User.update({ phone: req.body.phone },{friendList:JSON.parse(req.body.myList)}, function(err, doc) {
        console.log(doc);
         console.log(JSON.parse(req.body.myList));
        if (err) {
            res.send({
                data: false,
                msg: "系统错误"
            });
        } else {
           res.send({
                data: true,
                msg: "好友列表更新成功",
                xinxi:doc
            });

        }
    });
});
//存聊天记录
router.post('/talkhistory', function(req, res, next) {
    let user = new User({
        phone: req.body.phone,
        history:JSON.parse(req.body.array)
    });

    User.update({ phone: req.body.phone },{history:JSON.parse(req.body.array)}, function(err, doc) {
        console.log(doc);
         console.log(JSON.parse(req.body.array));
        if (err) {
            res.send({
                data: false,
                msg: "系统错误"
            });
        } else {
           res.send({
                data: true,
                msg: "对话更新成功",
                xinxi:doc
            });

        }
    });
});
//聊天列表
router.post('/talkList', function(req, res, next) {
    let user = new User({
        phone: req.body.phone,
        talkList:JSON.parse(req.body.talkarray)
    });

    User.update({ phone: req.body.phone },{talkList:JSON.parse(req.body.talkarray)}, function(err, doc) {
        console.log(doc);
         console.log(JSON.parse(req.body.talkarray));
        if (err) {
            res.send({
                data: false,
                msg: "系统错误"
            });
        } else {
           res.send({
                data: true,
                msg: "对话列表更新成功",
                xinxi:doc
            });

        }
    });
});


module.exports = router;
