import { toast } from "react-hot-toast";

export function handleSignup(e, signupData, setSignupData, defaultData) {
    e.preventDefault();
    if (signupData.uname === "") toast.error("Username Cannot be empty");
    else if (signupData.password === "" || signupData.confiPassword === "") toast.error("Password Cannot be empty");
    else if (signupData.confiPassword !== signupData.password) toast.error("Passwords do not match");
    else if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(signupData.email)) {
        console.log("emailfie");
        setSignupData(defaultData);
        toast.success('Signup Successful');
        const creds = JSON.stringify(signupData);
        localStorage.setItem('credentials', creds);
    }
    else toast.error("Please enter a valid email")
}