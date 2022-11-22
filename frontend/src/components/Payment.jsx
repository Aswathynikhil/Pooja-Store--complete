// // import React, { useEffect } from 'react'
// // import { useSelector, useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios"
// // import {
// //     CardNumberElement,
// //     CardCvcElement,
// //     CardExpiryElement,
// //     useStripe,
// //     useElements,
// // } from "@stripe/react-stripe-js";
// // import { useRef } from "react";
// // import { craeteOrder, clearErrors } from "../redux/actions/orderAction";
// // import Footer from '../components/Footer'

// // const PaymentPage = () => {
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();
// //     // const alert = useAlert();
// //     const payBtn = useRef(null);
// //     // const elements = useElements();
// //     // const stripe =useStripe();

// //     const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
// //     console.log('orderinfo', orderInfo)
// //     const { user } = useSelector((state) => state.user);
// //     const { cartItems } = useSelector((state) => state.mycart);
// //     const { shippingInfo } = useSelector((state) => state.shippingDetails);
// //     const { error } = useSelector((state) => state.newOrder);
// //     //const { error } = useSelector((state) => state.newOrder);



// //     function returnLastElement(shippingInfo) {
// //         return shippingInfo && shippingInfo.at(-1);
// //     }

// //     const value = returnLastElement(shippingInfo);
// //     //   console.log(value && value,"======= Value");
// //     //   console.log(orderInfo.totalPrice,"======= orderInfo.totalprice");

// //     const paymentData = {
// //         amount: Math.round(orderInfo && orderInfo.totalPrice * 100)
// //     }


// //     const order = {
// //         shippingInfo: value && value,
// //         orderItems: cartItems && cartItems,
// //         itemPrice: orderInfo && orderInfo.subtotal,
// //         taxPrice: orderInfo && orderInfo.tax,
// //         shippingPrice: orderInfo && orderInfo.shippingCharges,
// //         totalPrice: orderInfo && orderInfo.totalPrice,



// //     }


// //     const initPayment = (resData) => {
// //         const options = {
// //             key: "rzp_test_QNfRnyTDRNLcvf",
// //             amount: resData.amount,
// //             currency: "INR",
// //             name: "Pooja Store",
// //             description: "Test Transaction",
// //             image: "\image\logo.png",
// //             order_id: resData.id,
// //             handler: async (response) => {
// //                 console.log(response);
// //                 try {
// //                     // const { resdata } =
// //                     const verifyUrl = "http://localhost:4000/api/v1/payment/razorpay/verify";

// //                     const { data } = await axios.post(verifyUrl, response)
// //                     // .then(res=>{
// //                     // console.log('razorpay verify',data);
// //                     //   if (res) {

// //                     order.paymentInfo = {
// //                         id: resData.id,
// //                         status: resData.status,

// //                     }
// //                     dispatch(craeteOrder(order))

// //                     navigate('/order_completed')
// //                     //   }
// //                     // })
// //                     console.log('razorpay verify', data)
// //                 } catch (error) {
// //                     console.log(error);
// //                 }
// //             },
// //             theme: {
// //                 color: "#3399cc",
// //             },
// //         };
// //         const rzp1 = new window.Razorpay(options);
// //         rzp1.open();
// //     };

// //     //Razorpay Payment//
// //     const handlePayment = async (e) => {
// //         e.preventDefault();

// //         // payBtn.current.disabled = true;
// //         try {
// //             const config = {
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //             };
// //             //   const dayRent =data.carId.dayRent
// //             // const dayRent = paymentData
// //             const orderUrl = "http://localhost:4000/api/v1/payment/razorpay/process";

// //             const { data } = await axios.post(orderUrl, { amount: order.totalPrice }, config)
// //             // .then(res=>{
// //             console.log('handlePayment', data);
// //             initPayment(data.data);
// //             // })
// //             // if(data.error)
// //         } catch (error) {
// //             // console.log(error)
// //             console.log(error.response, "======== error.response.");

// //             // payBtn.current.disabled = false;

// //         }
// //     }




// //     useEffect(() => {
// //         if (error) {
// //             // alert.error(error.message);
// //             dispatch(clearErrors())
// //         }
// //     }, [dispatch, error, alert])
// //     return (
// //         <>
// //             {/* <NavBar /> */}

// //             <div className=" p-2 pt-16 mb-16  mobile:flex-col mobile:items-start grid grid-cols-1 ">
// //                 <form action="" onSubmit={(e) => handlePayment(e)}>

// //                     <div className="flex-1 flex justify-center flex-wrap p-2">
// //                         {/* <TiTick className='  w-10 h-10 rounded-full bg-yellow-500/90 fill-white'/> */}
// //                     </div>
// //                     <div className="flex flex-row  justify-center">
// //                         <h3 className='uppercase '>Total Amount</h3>


// //                     </div>

// //                     <div><hr className="flex justify-items-center absolute mb-5 h-px w-10px  bg-white" /></div>






// //                     {/* <div>
// //                 <p className=" text-gray-500 flex justify-center">Thank you for your order! order being processed and will be completed when 3-6 hours. You will recieve on email conformation when your order is completed.</p>
// //             </div> */}
// //                     <div className='flex justify-center'>
// //                         {/* <Link to='/'> */}
// //                         {/* <button className='button-primary mt-2 uppercase'>continue shopping</button> */}
// //                         <input type="submit"
// //                             value={`pay - ₹${orderInfo && orderInfo.totalPrice}`}
// //                             ref={payBtn}
// //                             className="button-primary mt-2 bg-orange-300  w-[300px] border rounded-md"

// //                         />
// //                         {/* </Link> */}

// //                     </div>
// //                 </form>

// //             </div>
// //             <div className='pb-16 mb-16'></div>
// //             <div className=' pt-16 mb-16'></div>
// //             <div className='  pt-7'></div>






// //             <Footer />
// //         </>)
// // }

// // export default PaymentPage

// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"
// import {
//     CardNumberElement,
//     CardCvcElement,
//     CardExpiryElement,
//     useStripe,
//     useElements,
// } from "@stripe/react-stripe-js";
// import { useRef } from "react";
// import { craeteOrder, clearErrors } from "../redux/actions/orderAction";
// // import NavBar from '../components/Navbarnew';
// import Footer from '../components/Footer';

// const PaymentPage = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     // const alert = useAlert();
//     const payBtn = useRef(null);
//     // const elements = useElements();
//     // const stripe =useStripe();

//     const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
//     console.log('orderinfo', orderInfo)
//     const { user } = useSelector((state) => state.user);
//     const { cartItems } = useSelector((state) => state.mycart);
//     const { shippingInfo } = useSelector((state) => state.shippingDetails);
//     const { error } = useSelector((state) => state.newOrder);
//     //const { error } = useSelector((state) => state.newOrder);



//     function returnLastElement(shippingInfo) {
//         return shippingInfo && shippingInfo.at(-1);
//     }

//     const value = returnLastElement(shippingInfo);
//     //   console.log(value && value,"======= Value");
//     //   console.log(orderInfo.totalPrice,"======= orderInfo.totalprice");

//     const paymentData = {
//         amount: Math.round(orderInfo && orderInfo.totalPrice * 100)
//     }


//     const order = {
//         shippingInfo: value && value,
//         orderItems: cartItems && cartItems,
//         itemPrice: orderInfo && orderInfo.subtotal,
//         taxPrice: orderInfo && orderInfo.tax,
//         shippingPrice: orderInfo && orderInfo.shippingCharges,
//         totalPrice: orderInfo && orderInfo.totalPrice,



//     }


//     const initPayment = (resData) => {
//         const options = {
//             key: "rzp_test_QNfRnyTDRNLcvf",
//             amount: resData.amount,
//             currency: "INR",
//             name: "Pooja Store",
//             description: "Test Transaction",
//             image: "",
//             order_id: resData.id,
//             handler: async (response) => {
//                 console.log(response);
//                 try {
//                     // const { resdata } =
//                     const verifyUrl = "http://localhost:4000/api/v1/payment/razorpay/verify";

//                     const { data } = await axios.post(verifyUrl, response)
//                     // .then(res=>{
//                     // console.log('razorpay verify',data);
//                     //   if (res) {

//                     order.paymentInfo = {
//                         id: resData.id,
//                         status: resData.status,

//                     }
//                     dispatch(craeteOrder(order))

//                     navigate('/order_completed')
//                     //   }
//                     // })
//                     console.log('razorpay verify', data)
//                 } catch (error) {
//                     console.log(error);
//                 }
//             },
//             theme: {
//                 color: "#3399cc",
//             },
//         };
//         const rzp1 = new window.Razorpay(options);
//         rzp1.open();
//     };

//     //Razorpay Payment//
//     const handlePayment = async (e) => {
//         e.preventDefault();

//         // payBtn.current.disabled = true;
//         try {
//             const config = {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             };
//             //   const dayRent =data.carId.dayRent
//             // const dayRent = paymentData
//             const orderUrl = "http://localhost:4000/api/v1/payment/razorpay/process";

//             const { data } = await axios.post(orderUrl, { amount: order.totalPrice }, config)
//             // .then(res=>{
//             console.log('handlePayment', data);
//             initPayment(data.data);
//             // })
//             // if(data.error)
//         } catch (error) {
//             // console.log(error)
//             console.log(error.response, "======== error.response.");

//             // payBtn.current.disabled = false;

//         }
//     }




//     useEffect(() => {
//         if (error) {
//             // alert.error(error.message);
//             dispatch(clearErrors())
//         }
//     }, [dispatch, error, alert])
//     return (
//         <>
//             {/* <NavBar /> */}

//             <div className=" p-2 pt-16 mb-16  mobile:flex-col mobile:items-start grid grid-cols-1 ">
//                 <form action="" onSubmit={(e) => handlePayment(e)}>

//                     <div className="flex-1 flex justify-center flex-wrap p-2">
//                         {/* <TiTick className='  w-10 h-10 rounded-full bg-yellow-500/90 fill-white'/> */}
//                     </div>
//                     <div className="flex flex-row  justify-center">
//                         <h3 className='uppercase '>Total Amount</h3>


//                     </div>

//                     <div><hr className="flex justify-items-center absolute mb-5 h-px w-10px  bg-white" /></div>






//                     {/* <div>
//                 <p className=" text-gray-500 flex justify-center">Thank you for your order! order being processed and will be completed when 3-6 hours. You will recieve on email conformation when your order is completed.</p>
//             </div> */}
//                     <div className='flex justify-center'>
//                         {/* <Link to='/'> */}
//                         {/* <button className='button-primary mt-2 uppercase'>continue shopping</button> */}
//                         <input type="submit"
//                             value={`pay - ₹${orderInfo && orderInfo.totalPrice}`}
//                             ref={payBtn}
//                             className="button-primary mt-2 bg-orange-300  w-[300px] border rounded-md"

//                         />
//                         {/* </Link> */}

//                     </div>
//                 </form>

//             </div>
//             <div className='pb-16 mb-16'></div>
//             <div className=' pt-16 mb-16'></div>
//             <div className='  pt-7'></div>






//             <Footer />
//         </>)
// }

// export default PaymentPage


// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"
// import {
//     CardNumberElement,
//     CardCvcElement,
//     CardExpiryElement,
//     useStripe,
//     useElements,
// } from "@stripe/react-stripe-js";
// import { useRef } from "react";
// import { craeteOrder, clearErrors } from "../redux/actions/orderAction";
// import Footer from '../components/Footer'

// const PaymentPage = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     // const alert = useAlert();
//     const payBtn = useRef(null);
//     // const elements = useElements();
//     // const stripe =useStripe();

//     const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
//     console.log('orderinfo', orderInfo)
//     const { user } = useSelector((state) => state.user);
//     const { cartItems } = useSelector((state) => state.mycart);
//     const { shippingInfo } = useSelector((state) => state.shippingDetails);
//     const { error } = useSelector((state) => state.newOrder);
//     //const { error } = useSelector((state) => state.newOrder);



//     function returnLastElement(shippingInfo) {
//         return shippingInfo && shippingInfo.at(-1);
//     }

//     const value = returnLastElement(shippingInfo);
//     //   console.log(value && value,"======= Value");
//     //   console.log(orderInfo.totalPrice,"======= orderInfo.totalprice");

//     const paymentData = {
//         amount: Math.round(orderInfo && orderInfo.totalPrice * 100)
//     }


//     const order = {
//         shippingInfo: value && value,
//         orderItems: cartItems && cartItems,
//         itemPrice: orderInfo && orderInfo.subtotal,
//         taxPrice: orderInfo && orderInfo.tax,
//         shippingPrice: orderInfo && orderInfo.shippingCharges,
//         totalPrice: orderInfo && orderInfo.totalPrice,



//     }


//     const initPayment = (resData) => {
//         const options = {
//             key: "rzp_test_QNfRnyTDRNLcvf",
//             amount: resData.amount,
//             currency: "INR",
//             name: "Pooja Store",
//             description: "Test Transaction",
//             image: "\image\logo.png",
//             order_id: resData.id,
//             handler: async (response) => {
//                 console.log(response);
//                 try {
//                     // const { resdata } =
//                     const verifyUrl = "http://localhost:4000/api/v1/payment/razorpay/verify";

//                     const { data } = await axios.post(verifyUrl, response)
//                     // .then(res=>{
//                     // console.log('razorpay verify',data);
//                     //   if (res) {

//                     order.paymentInfo = {
//                         id: resData.id,
//                         status: resData.status,

//                     }
//                     dispatch(craeteOrder(order))

//                     navigate('/order_completed')
//                     //   }
//                     // })
//                     console.log('razorpay verify', data)
//                 } catch (error) {
//                     console.log(error);
//                 }
//             },
//             theme: {
//                 color: "#3399cc",
//             },
//         };
//         const rzp1 = new window.Razorpay(options);
//         rzp1.open();
//     };

//     //Razorpay Payment//
//     const handlePayment = async (e) => {
//         e.preventDefault();

//         // payBtn.current.disabled = true;
//         try {
//             const config = {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             };
//             //   const dayRent =data.carId.dayRent
//             // const dayRent = paymentData
//             const orderUrl = "http://localhost:4000/api/v1/payment/razorpay/process";

//             const { data } = await axios.post(orderUrl, { amount: order.totalPrice }, config)
//             // .then(res=>{
//             console.log('handlePayment', data);
//             initPayment(data.data);
//             // })
//             // if(data.error)
//         } catch (error) {
//             // console.log(error)
//             console.log(error.response, "======== error.response.");

//             // payBtn.current.disabled = false;

//         }
//     }




//     useEffect(() => {
//         if (error) {
//             // alert.error(error.message);
//             dispatch(clearErrors())
//         }
//     }, [dispatch, error, alert])
//     return (
//         <>
//             {/* <NavBar /> */}

//             <div className=" p-2 pt-16 mb-16  mobile:flex-col mobile:items-start grid grid-cols-1 ">
//                 <form action="" onSubmit={(e) => handlePayment(e)}>

//                     <div className="flex-1 flex justify-center flex-wrap p-2">
//                         {/* <TiTick className='  w-10 h-10 rounded-full bg-yellow-500/90 fill-white'/> */}
//                     </div>
//                     <div className="flex flex-row  justify-center">
//                         <h3 className='uppercase '>Total Amount</h3>


//                     </div>

//                     <div><hr className="flex justify-items-center absolute mb-5 h-px w-10px  bg-white" /></div>






//                     {/* <div>
//                 <p className=" text-gray-500 flex justify-center">Thank you for your order! order being processed and will be completed when 3-6 hours. You will recieve on email conformation when your order is completed.</p>
//             </div> */}
//                     <div className='flex justify-center'>
//                         {/* <Link to='/'> */}
//                         {/* <button className='button-primary mt-2 uppercase'>continue shopping</button> */}
//                         <input type="submit"
//                             value={`pay - ₹${orderInfo && orderInfo.totalPrice}`}
//                             ref={payBtn}
//                             className="button-primary mt-2 bg-orange-300  w-[300px] border rounded-md"

//                         />
//                         {/* </Link> */}

//                     </div>
//                 </form>

//             </div>
//             <div className='pb-16 mb-16'></div>
//             <div className=' pt-16 mb-16'></div>
//             <div className='  pt-7'></div>






//             <Footer />
//         </>)
// }

// export default PaymentPage

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { useRef } from "react";
import { craeteOrder, clearErrors } from "../redux/actions/orderAction";
// import NavBar from '../components/Navbarnew';
import Footer from '../components/Footer';

const Payment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const alert = useAlert();
    const payBtn = useRef(null);
    // const elements = useElements();
    // const stripe =useStripe();

    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
    console.log('orderinfo', orderInfo)
    const { user } = useSelector((state) => state.user);
    const { cartItems } = useSelector((state) => state.mycart);
    const { shippingInfo } = useSelector((state) => state.shippingDetails);
    const { error } = useSelector((state) => state.newOrder);
    //const { error } = useSelector((state) => state.newOrder);



    function returnLastElement(shippingInfo) {
        return shippingInfo && shippingInfo.at(-1);
    }

    const value = returnLastElement(shippingInfo);
    //   console.log(value && value,"======= Value");
    //   console.log(orderInfo.totalPrice,"======= orderInfo.totalprice");

    const paymentData = {
        amount: Math.round(orderInfo && orderInfo.totalPrice * 100)
    }


    const order = {
        shippingInfo: value && value,
        orderItems: cartItems && cartItems,
        itemPrice: orderInfo && orderInfo.subtotal,
        taxPrice: orderInfo && orderInfo.tax,
        // shippingPrice: orderInfo && orderInfo.shippingCharges,
        totalPrice: orderInfo && orderInfo.totalPrice,



    }


    const initPayment = (resData) => {
        const options = {
            key: "rzp_test_QNfRnyTDRNLcvf",
            amount: resData.amount,
            currency: "INR",
            name: "Pooja Store",
            description: "Test Transaction",
            image: "",
            order_id: resData.id,
            handler: async (response) => {
                console.log(response);
                try {
                    // const { resdata } = 
                    const verifyUrl = "http://localhost:4000/api/v1/payment/razorpay/verify";

                    const { data } = await axios.post(verifyUrl, response)
                    // .then(res=>{
                    // console.log('razorpay verify',data);
                    //   if (res) {

                    order.paymentInfo = {
                        id: resData.id,
                        status: resData.status,

                    }
                    dispatch(craeteOrder(order))

                    navigate('/order_completed')
                    //   }
                    // })
                    console.log('razorpay verify', data)
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    //Razorpay Payment//
    const handlePayment = async (e) => {
        e.preventDefault();

        // payBtn.current.disabled = true;
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            //   const dayRent =data.carId.dayRent
            // const dayRent = paymentData
            const orderUrl = "http://localhost:4000/api/v1/payment/razorpay/process";

            const { data } = await axios.post(orderUrl, { amount: order.totalPrice }, config)
            // .then(res=>{
            console.log('handlePayment', data);
            initPayment(data.data);
            // }) 
            // if(data.error)   
        } catch (error) {
            // console.log(error)
            console.log(error.response, "======== error.response.");

            // payBtn.current.disabled = false;

        }
    }




    useEffect(() => {
        if (error) {
            // alert.error(error.message);
            dispatch(clearErrors())
        }
    }, [dispatch, error, alert])
    return (
        <>
            {/* <NavBar /> */}

            <div className=" p-2 pt-16 mb-16  mobile:flex-col mobile:items-start grid grid-cols-1 ">
                <form action="" onSubmit={(e) => handlePayment(e)}>

                    <div className="flex-1 flex justify-center flex-wrap p-2">
                        {/* <TiTick className='  w-10 h-10 rounded-full bg-yellow-500/90 fill-white'/> */}
                    </div>
                    <div className="flex flex-row  justify-center">
                        <h3 className='uppercase '>Total Amount</h3>


                    </div>

                    <div><hr className="flex justify-items-center absolute mb-5 h-px w-10px  bg-white" /></div>






                    {/* <div>
                <p className=" text-gray-500 flex justify-center">Thank you for your order! order being processed and will be completed when 3-6 hours. You will recieve on email conformation when your order is completed.</p>
            </div> */}
                    <div className='flex justify-center'>
                        {/* <Link to='/'> */}
                        {/* <button className='button-primary mt-2 uppercase'>continue shopping</button> */}
                        <input type="submit"
                            value={`pay - ₹${orderInfo && orderInfo.totalPrice}`}
                            ref={payBtn}
                            className="button-primary mt-2 bg-orange-300  w-[300px] border rounded-md"

                        />
                        {/* </Link> */}

                    </div>
                </form>

            </div>
            <div className='pb-16 mb-16'></div>
            <div className=' pt-16 mb-16'></div>
            <div className='  pt-7'></div>






            <Footer />
        </>)
}

export default Payment