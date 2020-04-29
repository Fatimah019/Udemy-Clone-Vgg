const Validator=require('validator');
const isEmpty=require('is-empty');

/*module.exports=function validateRegisteredUsersInput(data){
    let errs={};

    data.name=!isEmpty(data.name) ? data.name:"";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";


    //check name, email and password
    //name
    if (Validator.isEmpty(data.name)) {
        errs.name = "Name field is required";
      }
    
    //email
    if (Validator.isEmpty(data.email)){
        errs.email="Email";
    }
    else if (!Validator.isEmail(data.email)) {
        errs.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errs.password = "Password field is required";
    }
    if (Validator.isEmpty(data.password2)) {
        errs.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errs.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errs.password2 = "Passwords must match";
    }
    return {
        errs,
        isValid: isEmpty(errs)
    };
};
*/