const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('hello world')
})
  
  var a = 5;
  var b = 7;
  var c = 6;
  if(a > b) 
    if (b > c) document.write(a);
    else {if(c > a) document.write(c);}
  else if(b > c) console.log(b);
    else document.write(c);
  

 
app.listen(3000)