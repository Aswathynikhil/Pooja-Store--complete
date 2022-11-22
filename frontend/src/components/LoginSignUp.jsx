import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginSignUp.css";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockOpenAlt } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import profile from '../image/Profile.png'

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import {
    clearErrors,
    login,
    register,
} from "../redux/actions/userAction"


function LoginSignup() {
    const dispatch = useDispatch();
    //const alert = useAlert();
    const navigate = useNavigate();

    const { error, loading, isAuthenticated, user: isLogin } = useSelector(
        (state) => state.user
    );
    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const { name, email, phone, password } = user;
    console.log(user, "jjjjjjjjj");
    const [avatar, setAvatar] = useState("https://res.cloudinary.com/doya08pdl/image/upload/v1661379244/avatars/eulivilfagoufudqjc9q.png")
    const [avatarPreview, setAvatarPreview] = useState(profile);

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    };
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("phone", phone);
        myForm.set("password", password);
        myForm.set("avatar", avatar);

        console.log(myForm, "kkkkkkk");
        dispatch(register(myForm));
        navigate("/user/verify/phone");
    };




    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    };


    useEffect(() => {
        if (error) {
            //alert.error(error.message);
            dispatch(clearErrors());
        }





        if (isLogin && isLogin.role === 'admin') {
            navigate('/admin/dashboard')
        } else if (isLogin && isLogin.role === 'user') {
            navigate("/product");
        }



    }, [dispatch, error, alert, navigate, isAuthenticated]);



    const switchTabs = (e, tab) => {
        if (tab === "login") {
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }

        if (tab === "register") {
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");

            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft");
        }
    };
    return (

        <>

            <div className="container LoginSignUpContainer bg-orange-50">

                <div className="LoginSignUpBox xs:mt-[50px] md:mt-0 lg:mt-0  ">
                    <div className="bg-yellow-900 text-white">
                        <div className="Login_signUp_toggle flex flex-row justify-center   ">
                            <p className="mt-5" onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                            <p className="ml-12 mt-5 " onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                        </div>
                        <button className="" ref={switcherTab}></button>
                    </div>
                    <form
                        action=""
                        className="loginForm mt-10  "
                        ref={loginTab}
                        onSubmit={loginSubmit}
                    >
                        <div className="loginEmail">
                            <HiOutlineMail />
                            <input
                                type="email"
                                placeholder="Email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                        </div>
                        <div className="loginPassword">
                            <BiLockOpenAlt />
                            <input
                                type="password"
                                placeholder="Password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center text-md text-gray-500">
                            <Link className="" to="/password/forgot">Forget Password ?</Link>
                        </div>

                        <input type="submit" value="Login" className="loginBtn " />
                    </form>
                    <form
                        action=""
                        className="signUpForm mt-3"
                        ref={registerTab}
                        encType="multipart/form-data"
                        onSubmit={registerSubmit}
                    >
                        <div className="singUpName mt-3">
                            <CiFaceSmile />
                            <input
                                type="text"
                                placeholder="Name"

                                name="name"
                                value={name}
                                onChange={registerDataChange}
                            />
                        </div>
                        <div className="signUpEmail m-2">
                            <HiOutlineMail />
                            <input
                                type="email"
                                placeholder="Email"

                                name="email"
                                value={email}
                                onChange={registerDataChange}
                            />
                        </div>
                        <div className="signUpPhone m-2">
                            <BsPhone />
                            <input
                                type="number"
                                placeholder="Mobile Number"

                                name="phone"
                                value={phone}
                                onChange={registerDataChange}
                            />
                        </div>
                        <div className="signUpPassword m-2">
                            <BiLockOpenAlt />
                            <input
                                type="password"
                                placeholder="Password"

                                name="password"
                                value={password}
                                onChange={registerDataChange}
                            />
                        </div>
                        <div id="registerImage" className="m-2">
                            <img src={avatarPreview} alt="" />
                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={registerDataChange}
                            />
                        </div>
                        <input type="submit" value="Register" className="signUpBtn " />
                        {/* disabled={loading ? true : false} /> */}
                        {/* //disabled = {loading ? true : false} */}
                    </form>

                </div>

            </div>
        </>


    );

}
export default LoginSignup