//* overall protection code to check for Authorization

module.exports = function (req, res, next) {

  if (!req.user) return res.status(401).json('Unauthorized');
  next();

};