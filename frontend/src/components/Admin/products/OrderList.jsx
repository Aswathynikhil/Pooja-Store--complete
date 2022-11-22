import React, { Fragment, useEffect } from "react";
import Sidebar from '../../Admin/Dashboard/Sidebar'
import { useDispatch, useSelector } from "react-redux";
import {
    getAllOrders,
    clearErrors,
    deleteOrder,
} from "../../../redux/actions/orderAction";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_ORDER_RESET } from "../../../constants/orderConstants";


function OrderList() {
    const dispatch = useDispatch();
    //const alert = useAlert();
    const navigate = useNavigate()
    const { error, orders, loading } = useSelector((state) => state.allOrders);
    const { error: deleteError, isDeleted } = useSelector((state) => state.order);


    const deleteOrderHandler = (id) => {
        dispatch(deleteOrder(id));
    }

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
            //alert.success("Order Deleted Successfully");
            navigate(`/orders`);
            dispatch({ type: DELETE_ORDER_RESET });


        }

        dispatch(getAllOrders())
    }, [dispatch, error, alert, deleteError, isDeleted, navigate])

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
                                    Order ID
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Status
                                </th>
                                <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                                    Item Qty
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Amount
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders &&
                                orders.map((order) => (
                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                        <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                            {order?._id}
                                        </td>
                                        <td class="py-4 px-6">
                                            {/* {order?.orderStatus} */}

                                            <div class="p-10">

                                                <div class="dropdown inline-block relative">
                                                    <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                                                        <span class="mr-1">Ordered</span>
                                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                                    </button>
                                                    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                                                        <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Shipped</a></li>
                                                        <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Delivered</a></li>
                                                       
                                                    </ul>
                                                </div>

                                            </div>
                                        </td>
                                        <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                                            {order?.orderItems?.length}
                                        </td>
                                        <td class="py-4 px-6">
                                           {order?.totalPrice}
                                        </td>
                                        <td>
                                            <button className='m-5'>Actiom</button>
                                   
                                        </td>
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

export default OrderList