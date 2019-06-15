const   express = require('express'),
        bodyParser = require('body-parser'),
        session = require('express-session'),
        morgan = require('morgan');

let app = express();


app.set('view-engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.send("hey this is a trial");
})
module.exports = app;