const express = require('express')
const serveStatic = require('serve-static')
const cors = require('cors')
const router = express.Router()

const path = require('path')

const app = express()

//using cors
var allowedOrigins = ['http://localhost:3003', 'http://localhost:3001', 'https://bankui.vercel.app', 'https://app.schnelle-bank.com', 'https://schnelle.vercel.app'];

app.use(cors(

  {
    origin: function(origin, callback){    // allow requests with no origin 
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);    if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }    return callback(null, true);
    }
  }
))


//configuring body parser middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const request = require('request');



const token = "9a150221a37ea54bb4b7ed2b5304c7af37fee894ab61311e984f190e06a13ca7";

const options = {
  method: 'GET',
  url: 'https://api.webflow.com/collections/633c136d866ccfc55c8064e1/items',
  headers: {Authorization:`Bearer ${token}`}
};




app.get("/transactions", (req, res)=>{
    request({
        method: 'GET',
        url: 'https://api.webflow.com/collections/633c136d866ccfc55c8064e1/items',
        headers: {Authorization:`Bearer ${token}`}
      }, (error, response, body)=>{
        if (error) throw new Error(error);
        res.send(JSON.parse(body));
        
      })
})



app.get("/userinfo", (req, res)=>{
    request({
        method: 'GET',
        url: 'https://api.webflow.com/collections/6345a5288200dd4eb4c7d224/items',
        headers: {Authorization:`Bearer ${token}`}
      }, (error, response, body)=>{
        if (error) throw new Error(error);
        res.send(JSON.parse(body));
        
      })
})



//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 3003;

app.listen(port, ()=> {
    console.log(`App is running on ${port}`);
})