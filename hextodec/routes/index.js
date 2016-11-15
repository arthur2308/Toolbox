var express = require('express');
var router = express.Router();
var Rx = require('rx');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/hex', function (req, res, next) {
  res.send("Received");
  Rx.Observable.from(req.body)
      .tap(hexContent => console.log(hexContent))
      .map(hexContent => {
        var dec = hexContent.toString(10);
      })
      .tap(decContent => console.log(decContent))
      .subscribe(
          onNext => console.log(onNext),
          onError => console.log("Error " + onError),
          onComplete => console.log("Complete!")
      );
});
module.exports = router;
