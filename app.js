const express = require('express');
const ExpressError = require('./expressError')
const { findMode, findMean, findMedian } = require('./operation');

const app = express();

app.use(express.json());

app.get("/", function(request, response){
    response.send("Welcome to HomePage!")
})

let nums = [1,3,5,7]





///mean// 
app.get("/mean/",(request, response, next)=> {
    
    let numsMean = {
    Response: {
        "operation": "mean",
        "value": findMean(nums)
        }
    }
    
    try{
     response.send(numsMean)   
    }
    catch{
        for(let num of nums){
            if (num === NaN){
                return next(ExpressError("There is an invalid number", 400))
            }
            else if(num == []){
                return next(ExpressError("There need to be number for the opernation to work", 400))
            }
        }
        
    }

})

/////Mode/////
app.get("/mode/",(request, response, next)=> {

    let numsmode = {
    Response: {
        "operation": "mode",
        "value": findMode(nums)
        }
    }

    try{
     response.send(numsmode)   
    }
    catch{
        for(let num of nums){
            if (num === NaN){
                return next(ExpressError("There is an invalid number", 400))
            }
            else if(num == []){
                return next(ExpressError("There need to be number for the opernation to work", 400))
            }
        }
        
    }

})

//Median///

app.get("/median/",(request, response, next)=> {

    let numsMedian = {
    Response: {
        "operation": "mode",
        "value": findMedian(nums)
        }
    }

    try{
     return response.send(numsMedian)   
    }
    catch{
        for(let num of nums){
            if (num === NaN){
                return next(ExpressError("There is an invalid number", 400))
            }
            else if(num == []){
                return next(ExpressError("There need to be number for the opernation to work", 400))
            }
        }
        
    }

})




app.listen(3000, () => {
  console.log("Server running on port 3000")
});

