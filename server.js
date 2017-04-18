//packages
var path = require('path')
var fs = require('fs')
var express = require('express')

//create app
var app = express()

//view engine
app.set('view engine', 'html')
app.engine('html', function(path, optins, callbacks){
    fs.readFile(path, 'utf-8', callback)
})

//middleware
app.use(express.static(__dirname))

//routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

//error handler
app.use(function (err, req, res, next){
    res.status(err.status || 500)
})

//serve app
var port = 8000
app.listen(port, function (){
    console.log('running at localhost:' + port)
})

