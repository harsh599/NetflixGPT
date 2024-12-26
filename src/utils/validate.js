export const checkValidateData = (email, password, fullName) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    const isFullNameValid = /^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/.test(fullName);;
    if(!isEmailValid) return "Email ID is Not Valid";
    if(!isPasswordValid) return "Password is Not Valid";
    // if(!isFullNameValid) return "Full Name is Not Valid";
    return null;
}