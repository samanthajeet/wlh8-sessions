module.exports = {
  customMiddleware: (req, res, next) => {
    console.log('aloha')
    next()
  },
  authenticate: (req,res, next) => {
    let {username} = req.body
    if (username === 'Michael Scott') {
      next()
    } else {
      res.status(401).send({message: 'you shall not pass'})
    }
  }
}