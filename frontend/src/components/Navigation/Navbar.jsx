import React from "react";
import { useSelector } from "react-redux";
// import AdminSidebar from "../Admin/AdminSidebar";
import AdminNavbar from "../Navigation/AdminNavbar";
// import AccountVerificationAlertWarning from "./Alerts/AccountVerificationAlertWarning";
// import AccountVerificationSuccessAlert from "./Alerts/AccountVerificationSuccessAlert";
import UserNavbar from "../Navigation/UserNavbar";
import Navbarnew from "../Navigation/Navbarnew";

const Navbar = () => {
    //-----get user from store--------
    const state = useSelector((state) => state.user);
    console.log(state, "state");
    const { role, isAuthenticated } = state.user;
    console.log(role , "role");
    
    // {role=="admin" ? isAdmin : isUser}
    const isAdmin = role=="admin"
    // const isUser = role?.user;
    // const account = useSelector((state) => state?.isAuthenticated);
    // const { loading, appErr, serverErr, token } = account;
    return (
        <>
      
            { isAdmin ? (
                <>
                    <AdminNavbar />
               
                </>
            ) : (
                <UserNavbar />
            ) }
         
            
            {/* display alert */}
            {/* {userAuth?.isVerified || isAdmin || !userAuth ? null : (
                <AccountVerificationAlertWarning />
            )} */}
            {/* display success msg */}
            {/* {loading && <h2 className="text-center">Loading please wait</h2>}
            {token && <AccountVerificationSuccessAlert />}
            {appErr || serverErr ? (
                <h2 className="text-center text-red-500">
                    {serverErr} {appErr}
                </h2>
            ) : null} */}
        </>
    );
};

export default Navbar;
