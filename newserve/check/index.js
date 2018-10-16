module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    console.log(req.session.user)
    if (!req.session.user) {
      res.send({
        data:false,
        msg:'没有登录,请登录'
      })
      return;
    }
    next()
  },

  checkNotLogin: function checkNotLogin(req, res, next) {
    if (req.session.user) {
      return res.redirect('back')
    }
    next()
  }
}
