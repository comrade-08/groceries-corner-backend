module.exports = {
  getProducts: (req, res, next) => {
    // console.log(req.body, 'getProducts')
    res.json({
      status: true,
      response: []
    })
  }
}