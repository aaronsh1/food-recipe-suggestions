const fs   = require('fs');
const jwt   = require('jsonwebtoken');

var privateKEY  = fs.readFileSync(__dirname + '/keys/private.key', 'utf8');
var publicKEY  = fs.readFileSync(__dirname + '/keys/public.key', 'utf8');
module.exports = {
 sign: (payload, $Options) => {

  // Token signing options
  var signOptions = {
      issuer:  $Options.issuer,
      subject:  $Options.subject,
      audience:  $Options.audience,
      expiresIn:  "30d",    // 30 days validity
      algorithm:  "RS256"
  };
  return jwt.sign(payload, privateKEY, signOptions);
},
verify: (token, $Option) => {

  var verifyOptions = {
      issuer:  $Option.issuer,
      subject:  $Option.subject,
      audience:  $Option.audience,
      expiresIn:  "30d",
      algorithm:  ["RS256"]
  };
   try{
     return jwt.verify(token, publicKEY, verifyOptions);
   }catch (err){
     return false;
   }
}
}