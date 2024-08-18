

function sayHEllo (req,res,next){
    console.log("Hello Bhai From Middleware");
    
    next();
}

module.exports = sayHEllo;