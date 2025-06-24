export const checkValidation = ( email, password) =>{

    // const isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);
    
    const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const isPassowrdValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);


    // if(!isNameValid) return "Name is invalid!";
    if(!isEmailValid) return "Email is not valid!";
    if(!isPassowrdValid) return "Password is not valid!";

    return null;
}