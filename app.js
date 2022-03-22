var http = require('http');
var conversions = require('./conversions.js')

async function serverCallback(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days


    const { method, url } = req;
    const buffers = [];
  
    for await (const chunk of req) {
      buffers.push(chunk);
    }
  
    const data = Buffer.concat(buffers).toString();
  
    // console.log("HERE I AM")
    // console.log(JSON.parse(data).numeral); 
    // console.log("now i am here")
    
    var num = JSON.parse(data).numeral
    var answer = "";


    //if decimal numeral entered
    if (num >= 1 && num <= 1000){
        answer = conversions.decToRoman(num);
    //if Roman numeral is entered
    } else if ((typeof num === 'string' || num instanceof String) && 
                conversions.romanToDec(num)>= 1 && 
                conversions.romanToDec(num) <= 1000){
        answer = conversions.romanToDec(num);
    //otherwise
    } else{
        res.writeHead(400, {'Content-Type':'application/json'});
        answer = num + " is an invalid entry. \nPlease enter a decimal number or Roman numeral between 1 and 1000.\n";
        res.end(answer)
        return 
    }

    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({numeral: answer}));
}

http.createServer(serverCallback).listen(8080);