export const validationUserData=(user)=>{

    let error ={};
    if(user.name.trim() ==""){
        error.name ="user is required";
    }else if(UserActivation.name.trim().length <3){
        error.name="username must be at least 3 char";
    }if(user.email.trim() ==""){
        error.email ="email is required";
    }else if(UserActivation.name.trim().length <3){
        error.email="email must be at least 3 char";
    }if(user.password.trim() ==""){
        error.password ="password is required";
    }else if(UserActivation.name.trim().length <3){
        error.password="password must be at least 3 char";
    }
    return error;
}