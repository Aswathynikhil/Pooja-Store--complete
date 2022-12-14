import React, { Fragment, useEffect, useState } from "react";
import "./UpdateProfile.css";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import FaceIcon from "@mui/icons-material/Face";
// import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import Loader from "../../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
    clearErrors,
    loadUser,
    updateProfile,
} from ".././../redux/actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
// import MetaData from "../../layout/MetaData";
function UpdateProfile() {
    const dispatch = useDispatch();
    //const alert = useAlert();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.user);
    const { error, isUpdated, loading } = useSelector((state) => state.profile);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    const updateProfileSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("phone", phone);
        myForm.set("avatar", avatar);

        dispatch(updateProfile(myForm));
    };

    const updateProfileDataChange = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
        if (user) {
            setName(user?.name);
            setEmail(user?.email);
            setPhone(user?.phone);
            setAvatarPreview(user?.avatar?.url);
        }

        if (error) {
          //  alert.error(error.message);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            //alert.success("Profile Updated Successfully");
            navigate("/account");
            dispatch(loadUser());
            dispatch({
                type: UPDATE_PROFILE_RESET,
            });
        }
    }, [dispatch, error, alert, navigate, user, isUpdated]);

    return (
        // <Fragment>
        //     {loading ? (
        //         <Loader />
        //     ) : (
                <Fragment>
                    {/* <MetaData title="Update Profile" /> */}
                    <div className="updateProfileContainer">
                        <div className="updateProfileBox mt-100">
                            <h2 className="updateProfileHeading">Update Profile</h2>
                            <form
                                action=""
                                className="updateProfileForm"
                                encType="multipart/form-data"
                                onSubmit={updateProfileSubmit}
                            >
                                <div className="updateProfileName">
                                    {/* <FaceIcon /> */}
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="updateProfileEmail">
                                    {/* <MailOutlineIcon /> */}
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="updateProfilePhone">
                                    {/* <PhoneIphoneIcon /> */}
                                    <input
                                        type="number"
                                        placeholder="Mobile Number"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                <div id="updateProfileImage">
                                    <img src={avatarPreview} alt="Avatar Priview" />
                                    <input
                                        type="file"
                                        name="avatar"
                                        accept="image/*"
                                        onChange={updateProfileDataChange}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="Save"
                                    className="updateProfileBtn"
                                />
                                {/* //disabled = {loading ? true : false} */}
                            </form>
                        </div>
                    </div>
                </Fragment>
        //     )}
        // </Fragment>
    );
}

export default UpdateProfile;
