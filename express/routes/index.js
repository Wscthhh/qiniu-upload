var express = require('express');
var router = express.Router();
let qiniu = require('qiniu')
var accessKey = 'hMPK57sNnLvC6YX4bTww496uGHyFzuwDu4cz8a2s';
var secretKey = 'F6SZdgQnpwHVH8946konkR3AXrfyOYn_8RA2s6p7';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gettoken', function(req, res, next) {
  var options = {
    scope: 'wscthhh',
  };
  var putPolicy = new qiniu.rs.PutPolicy(options);
  var token=putPolicy.uploadToken(mac);
  res.json({token})
});
module.exports = router;
