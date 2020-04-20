exports.getSignUpPage= (req,res,next)=>{
    res.render('register/register');
};

exports.renderVerifyPage= (req,res,next)=>{
    console.log(req.body);
    res.render('register/verifyEmail');
};