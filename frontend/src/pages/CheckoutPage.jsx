import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// import NavBar from "../components/Navbarnew";
import { useSelector, useDispatch } from "react-redux";
// import CheckoutStep from "../../Product/Cart/CheckoutStep.js"
import { savaShippingInfo } from "../redux/actions/cartAction";
import { useNavigate } from "react-router-dom";




const Checkout = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate()

  const { shippingInfo } = useSelector((state) => state.shippingDetails);

  function returnLastElement(shippingInfo) {
    return shippingInfo && shippingInfo.at(-1);
  }

  const value = returnLastElement(shippingInfo);

  //   const [name,setName] = useState(value && value.name)
  //   const [addresstype,setAddressType] = useState(value && value.addresstype)
  // const [address, setAddress] = useState(value &&  value.address)
  // const [phonenumber,setPhonenumber] = useState(value && value.phonenumber)
  // const [email,setEmail] = useState(value && value.email)
  // const [pincode,setPincode] = useState(value && value.pincode)
  // const [area,setArea] = useState(value && value.area)
  // const [city, setCity] = useState(value && value.city)
  // const [stateregion, setStateRegion] = useState(value && value.stateregion)
  // const [country, setCountry] = useState(value && value.country)
  const [address, setAddress] = useState(value && value.address)
  const [city, setCity] = useState(value && value.city)
  const [state, setState] = useState(value && value.state)
  const [country, setCountry] = useState(value && value.country)
  const [pincode, setPincode] = useState(value && value.pincode)
  const shippingSubmit = (e) => {
    e.preventDefault();
    // dispatch(savaShippingInfo({name,addresstype,address,phonenumber,email,pincode,area,city,stateregion,country}))
    dispatch(savaShippingInfo({ address, city, state, country, pincode }))

    naviagte('/confirm_order')
  }

  return (
    <>
      {/* <NavBar /> */}
      <div className="container gap-6 grid grid-cols-12 items-start pb-8 pl-16 pt-4">
        <form action="" onSubmit={shippingSubmit}>

          <div className="col-span-8 border border-[#eab308] p-16 w-[43rem] rounded">
            <h3 className="text-lg font-medium capitalize mb-4">Shipping Details</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  {/* <label className="text-gray-600 mb-2 block">
                  First Name
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                  value={name} onChange={(e)=> setName(e.target.value)}
                /> */}
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
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  House/Office Name
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600  text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                  value={address} onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              {/* <div>
              <label className="text-gray-600 mb-2 block">
                Phone number
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                value={phonenumber} onChange={(e)=> setPhonenumber(e.target.value)}
              />
            </div> */}
              {/* <div>
              <label className="text-gray-600 mb-2 block">
                Email
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                value={email} onChange={(e)=> setEmail(e.target.value)}
              />
            </div> */}
              <div>
                <label className="text-gray-600 mb-2 block">
                  Pincode
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600  text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                  value={pincode} onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              {/* <div>
              <label className="text-gray-600 mb-2 block">
                Area
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-gray-600 text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                value={area} onChange={(e)=> setArea(e.target.value)}
              />
            </div> */}
              <div>
                <label className="text-gray-600 mb-2 block">
                  City
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600  text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                  value={city} onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  State_Region
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600  text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                  value={state} onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Country
                  <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600  text-sm rounded placeholder-gray-400 focus-border-primary focus:ring-0"
                  value={country} onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>

          </div>

          <div className="col-span-4 border w-[43rem] rounded flex align-middle">
            {/* <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            Order Summary
          </h4> */}
            {/* <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <h5 className="text-gray-800 font-medium">Product Name</h5>
                <p className="text-sm text-gray-800">Ouantity: 2</p>
              </div>
              <p className="text-gray-800">x2</p>
              <p className="text-gray-800 font-medium">₹200</p>
            </div>
          </div> */}
            {/* <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
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
          </div> */}
            {/* <div className="flex items-center mb-4 mt-2">

    </div> */}
            {/* <Link to="/success"> */}
            {/* <input type="submit" value="Continue" className="w-full block button-primary"  disabled={state ? false : true}/> */}

            <button className="w-70 h-full bg-orange-300  button-primary flex  mt-5 border rounded-md" type="submit">Place Order</button>
            {/* </Link> */}
          </div>
        </form>

      </div>
      <Footer />
    </>
  );
};

export default Checkout;