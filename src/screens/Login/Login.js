import { useEffect, useState } from "react";
import { Navbar } from "../../components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import './login.css';
import { handleLogin } from "../../utils/functions";

const defaultData = {
    uname: "",
    password: ""
}

export function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loginData, setLoginData] = useState(defaultData);
    const location = useLocation();
    const navigate = useNavigate();
    let user = localStorage.getItem('user') || "";


    useEffect(() => {

        if (user) {
            navigate(location?.state?.from || '/', { replace: true });
        }

    }, [user]);

    return (
        <>
            <Navbar />
            <div className="wrapper__main__login">
                <div className="container__main__login">
                    <div className="container__inner">
                        <form onSubmit={(e) => handleLogin(e, loginData, setLoginData, defaultData)}>
                            <div className="form__title">login</div>
                            <div className="">
                                <input
                                    value={loginData.uname}
                                    type="text"
                                    onChange={(e) => setLoginData({ ...loginData, uname: e.target.value })}
                                    placeholder="Enter Username"
                                />
                            </div>
                            <div className="password">
                                <input
                                    value={loginData.password}
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter password"
                                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                />
                                <span className="passwordToggle" onClick={() => setPasswordVisible(prev => !prev)}>{!passwordVisible ? <EyeOff /> : <Eye />}</span>
                            </div>
                            <div className="action">
                                <button type="submit">Login</button>
                            </div>
                            <div className="classEndPara">Create an account <Link to={'/signup'}><span>Signup</span></Link></div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}