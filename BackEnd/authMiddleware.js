const { verify } = require('./jwt/jwt');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const decodedToken = verify(token);

  if (!!decodedToken && !!decodedToken.UserId) {
    req.UserId = decodedToken.UserId;
    next();

  } else {
    res.status(401).send("Unauthorized");
  };
}