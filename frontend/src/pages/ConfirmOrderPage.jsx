import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getShippingInfo } from "../redux/actions/cartAction";
import Footer from '../components/Footer';




const ConfirmOrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const { cartItems, loading } = useSelector((state) => state.mycart);
  const { shippingInfo } = useSelector((state) => state.shippingDetails);

  function returnLastElement(shippingInfo) {
    return shippingInfo && shippingInfo.at(-1);
  }

  const value = returnLastElement(shippingInfo);



  const subtotal = cartItems && cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${value && value.address},${value && value.city},${value && value.state},${value && value.pincode},${value && value.country}`



  useEffect(() => {
    dispatch(getShippingInfo());
  }, [dispatch]);

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice
    }
    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    navigate('/payment')
  }
  return (
    <>
      {/* <NavBar /> */}
      <div className="container gap-6 grid grid-cols-12 items-start pb-16 pt-4">
        {/* <form action="" onSubmit={shippingSubmit}> */}

        <div className="col-span-8 border border-[#eab308] p-4 rounded">
          <h3 className="text-lg font-medium capitalize mb-4">Shipping Details</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className='flex gap-1'>
                {/* <label className="text-gray-600 mb-2 block">
                  First Name
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                  value={name} onChange={(e)=> setName(e.target.value)}
                /> */}
                <p>Name: </p>
                <span>{user && user.name}</span>
              </div>
              {/* <div>
                <label className="text-gray-600 mb-2 block">
                  Last Name
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                />
              </div> */}

              {/* <div class="flex">
                <div class="flex items-center mr-4">
                  <input
                    id="yellow-radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 "
                  />
                  <label
                    for="inline-radio"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Home
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="yellow-radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 "
                  />
                  <label
                    for="inline-2-radio"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Office
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="yellow-radio"
                    type="radio"
                    value=""
                    name="colored-radio"
                    className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 "
                  />
                  <label
                    for="inline-checked-radio"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Others
                  </label>
                </div>
              </div> */}
              <div className='flex gap-1'>
                <p>Phone: </p>
                <span>{user && user.phone}</span>
              </div>

            </div>
            <div className='flex gap-1'>
              {/* <label className="text-gray-600 mb-2 block">
                House/Office Name
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                value={address} onChange={(e)=> setAddress(e.target.value)}
              /> */}
              <p>Address: </p>
              <span>{address}</span>
            </div>
            {/* <div> */}
            {/* <label className="text-gray-600 mb-2 block">
                Phone number
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                value={phonenumber} onChange={(e)=> setPhonenumber(e.target.value)}
              /> */}
            {cartItems &&
              cartItems.map((item) => (
                <div key={item.product}>
                  <img  className='h-20 w-20' src={item.image} alt="Product-images" />
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                  <span>
                    {item.quantity} X ₹{item.price} ={" "}
                    <b>₹{item.price * item.quantity}</b>
                  </span>
                </div>
              ))}
          </div>
          <div className='flex gap-1'>
            {/* <label className="text-gray-600 mb-2 block">
                Email
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                value={email} onChange={(e)=> setEmail(e.target.value)}
              /> */}
            <p>Subtotal:</p>
            <span>₹{subtotal}</span>
          </div>
          <div className='flex gap-1'>
            {/* <label className="text-gray-600 mb-2 block">
                Pincode
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                value={pincode} onChange={(e)=> setPincode(e.target.value)}
             /> */}
            <p>Shipping Charges:</p>
            <span>₹{shippingCharges}</span>
          </div>
          <div className='flex gap-1'>
            {/* <label className="text-gray-600 mb-2 block">
                Area
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                value={area} onChange={(e)=> setArea(e.target.value)}
              /> */}
            <p>GST:</p>
            <span>₹{tax}</span>
          </div>
          <div className='flex gap-1'>
            {/* <label className="text-gray-600 mb-2 block">
                City
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                value={city} onChange={(e)=> setCity(e.target.value)}
              /> */}
            <p>
              <b>Total:</b>
            </p>
            <span>₹{totalPrice}</span>
          </div>
          <div>
            {/* <label className="text-gray-600 mb-2 block">
                State_Region
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                value={stateregion} onChange={(e)=> setStateRegion(e.target.value)}
             /> */}
            <button className="w-full block button-primary mt-3 bg-orange-300" onClick={proceedToPayment}>Proceed To Payment</button>

          </div>
          <div>
            {/* <label className="text-gray-600 mb-2 block">
                Country
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                value={country} onChange={(e)=> setCountry(e.target.value)}
              /> */}
          </div>
        </div>

      </div>

      {/* <div className="col-span-4 border border-gray-200 p-4 rounded ">
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            Order Summary
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <h5 className="text-gray-800 font-medium">Product Name</h5>
                <p className="text-sm text-gray-800">Ouantity: 2</p>
              </div>
              <p className="text-gray-800">x2</p>
              <p className="text-gray-800 font-medium">₹200</p>
            </div>
          </div>
          <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
            <p>Subtotal</p>
            <p>₹200</p>
          </div>
          <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between border-gray-200 text-gray-800 font-medium py-3 uppercase">
            <p className="font-semibold">Total</p>
            <p>₹200</p>
          </div>
          {/* <div className="flex items-center mb-4 mt-2">

    </div> *
          <Link to="/success">
            <button className="w-full block button-primary">Place Order</button>
          </Link>
        </div> */}
      {/* </form> */}

      {/* </div> */}
      <Footer />
    </>
  )
}

export default ConfirmOrderPage