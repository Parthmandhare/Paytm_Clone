const {z} = require("zod");

const schema = z.object({
    Email: z.string(),
    Password: z.number()
});

function SignInUser(req,res,next){
    const r = schema.safeParse({
        Email: req.body.Email,
        Password: req.body.Password,
    });
    
    if(r.success){
        next();
    }
    else{
        res.send("Invalid Inputs!")
    }
    
}

module.exports = SignInUser;