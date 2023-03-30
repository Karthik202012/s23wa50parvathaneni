var express = require('express');
var router = express.Router();
/* Interesting fact about me */
router.get('/', function(req, res, next) {
    var x;
    var rand = Math.random();
    console.log(req.query.x);
    num = req.query.x;
//   res.render('mydata', { title: 'Karthik Parvathaneni' });
x =2
//  req.params()
if(x == undefined){
    x=rand;
}

let cos = Math.fround(x);
let log = Math.random(x);
let tab = Math.round(x);

res.render('computation',{
    title:'computation',
    values:'Math.fround() applied to '+x+' is '+cos,
    value1:'Math.random() applied to '+x+' is '+log,
    value2:'Math.round() applied to '+x+' is '+tab, 
  
});
});
module.exports = router;