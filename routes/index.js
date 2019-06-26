var express = require('express');
var unirest = require('unirest');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/video', function(req, res, next) {

  var url = req.body.url;

  unirest.get("https://getvideo.p.rapidapi.com/?url="+url+"")
  .header("X-RapidAPI-Host", "getvideo.p.rapidapi.com")
  .header("X-RapidAPI-Key", "00025741b4msh2a289cb83cdb600p18c981jsn65b375d64322")
  .end(function (result) {
    var obj = JSON.parse(result.body);
    console.log(obj);
    res.render('video', {title: obj.title , img: obj.thumbnail , streams : obj.streams});
  });
});


module.exports = router;
