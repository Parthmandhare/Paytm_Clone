const {z} = require("zod");

const schema = z.object({
    FirstName: z.string(),
    LastName: z.string(),
    Email: z.string(),
    Password: z.string()
});

function validateUser(req,res,next){
    const r = schema.safeParse({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: req.body.Password,
    });
    
    if(r.success){
        next();
    }
    else{
        res.status(403).json({msg: "Invaild Inputs"})
    }
    
}

module.exports = validateUser;