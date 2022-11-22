import React, { Fragment,useEffect } from "react";
import Sidebar from '../../components/Admin/Dashboard/Sidebar'
import { useDispatch, useSelector } from "react-redux";
import {

    clearErrors, deleteUser, getAllUsers,
} from "../../redux/actions/userAction";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_USER_RESET } from "../../constants/userConstants";


function UserList() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { loading, error, users } = useSelector((state) => state.allUsers);
    const { error: deleteError, isDeleted, message } = useSelector((state) => state.profile);

    useEffect(() => {
        if (error) {
           // alert.error(error.message);
            dispatch(clearErrors())
        }
        if (deleteError) {
           // alert.error(deleteError.message);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            //alert.success(message);
            navigate(`/users`);
            dispatch({ type: DELETE_USER_RESET });


        }

        dispatch(getAllUsers())
    }, [dispatch, error, alert, deleteError, isDeleted, navigate, message])

    
    

    return (

        <>
            <div className="container dashboard parent md:h-screen md:grid md:grid-cols-6 border-r-0">
                <section class="sidebar md:col-span-1 "> <Sidebar /></section>

                <div class=" overflow-x-auto relative sm:rounded-lg border-l-0 sm:w-full ">
                    <h1 className='flex justify-center font-bold mt-20 text-[40px]'>All Users</h1>
                    <table class="table-auto w-full mt-20 text-sm text-left text-gray-500 dark:text-gray-400 border-l-0">
                        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                    Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Email
                                </th>
                                <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                    Phone Number
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Image
                                </th>
                                {/* <th scope="col" class="py-3 px-6">
                                    Action
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users.map((user) => (
                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                        <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                           {user?.name}
                                        </td>
                                        <td class="py-4 px-6">
                                            {user?.email}
                                        </td>
                                        <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                                          
                                            {user?.phone}
                                        </td>
                                        <td class="py-4 px-6">
                                            <img className="w-6 h-6" src={user?.avatar?.url} alt="" />
                                        </td>
                                        {/* <td>
                                            <button className='m-5'>Block & unblock</button>
                                   
                                        </td> */}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>


                <div className="  ">

                </div>
            </div>
        </>
    )
}

export default UserList