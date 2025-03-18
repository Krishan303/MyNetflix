export const handleValidation = (name, email, password) => {

    const nameRegex = /([a-zA-Z0-9_\s]+)/.test(name)
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!nameRegex) return "Name is not valid"
    if(!emailRegex) return "Email Id is not valid";
    if(!passwordRegex) return "Password is not valid";

    return null;
}