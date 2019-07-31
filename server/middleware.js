module.exports = {
  customMiddleware: (req, res, next) => {
    if(!req.session.username){
      req.session.username = "Michael Scott"
    }
    console.log(req.session)
    next()
  },
  authenticate: (req,res, next) => {
    let {username} = req.session
    if (username === 'Michael Scott') {
      next()
    } else {
      res.status(401).send({message: 'you shall not pass'})
    }
  }
}