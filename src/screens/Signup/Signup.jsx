import { useState } from "react";
import { Navbar } from "../../components";
import { Eye, EyeOff } from "react-feather";
import { Link } from "react-router-dom";
import "./signup.css";
import { handleSignup } from "../../utils/functions";

const defaultData = {
    uname: "",
    password: "",
    email: "",
    confiPassword: ""
}

export function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [signupData, setSignupData] = useState(defaultData);


    return (
        <>
            <Navbar />
            <div className="wrapper__main__signup">
                <div className="container__main__signup">
                    <div className="container__inner">
                        <form onSubmit={(e) => handleSignup(e, signupData, setSignupData, defaultData)}>
                            <div className="form__title">Signup</div>
                            <div className="">
                                <input
                                    value={signupData.uname}
                                    type="text"
                                    onChange={(e) => setSignupData({ ...signupData, uname: e.target.value })}
                                    placeholder="Enter Username"
                                />
                            </div>
                            <div className="">
                                <input
                                    value={signupData.email}
                                    type="text"
                                    placeholder="Enter Your Email"
                                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                                />
                            </div>
                            <div className="password">
                                <input
                                    value={signupData.password}
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter password"
                                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                                />
                                <span className="passwordToggle" onClick={() => setPasswordVisible(prev => !prev)}>{!passwordVisible ? <EyeOff /> : <Eye />}</span>
                            </div>
                            <div className="password">
                                <input
                                    value={signupData.confiPassword}
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Confirm password"
                                    onChange={(e) => setSignupData({ ...signupData, confiPassword: e.target.value })}
                                />
                                <span className="passwordToggle" onClick={() => setPasswordVisible(prev => !prev)}>{!passwordVisible ? <EyeOff /> : <Eye />}</span>
                            </div>
                            <div className="action">
                                <button type="submit">Signup</button>
                            </div>
                            <div className="classEndPara">Already a user? <Link to={'/login'}><span>Login</span></Link></div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}