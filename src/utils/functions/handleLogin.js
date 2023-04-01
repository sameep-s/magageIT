import { toast } from "react-hot-toast";

export function handleLogin(e, loginData, setLoginData, defaultData) {
    e.preventDefault();
    if (loginData.uname === "") toast.error("Username Cannot be empty");
    let creds = localStorage.getItem('credentials');
    if (!creds) {
        toast.error('User Does not exist');
        return;
    }
    creds = JSON.parse(creds);
    if (creds.uname !== loginData.uname) {
        toast.error("Invalid Username");
        return;
    }
    else if (creds.password !== loginData.password) {
        toast.error("Invalid Password");
        return;
    } else {
        toast.success('Login Successful');
        localStorage.setItem("user", true);
        setLoginData(defaultData);
    }
}