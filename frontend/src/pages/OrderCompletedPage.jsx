import React from 'react'
// import Footer from '../component/Footer'
// import NavBar from '../component/Navbar'
import { TiTick } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
// import NavBar from '../components/Navbarnew'
const OrdercompletedPage = () => {
    return (
        <>
            {/* <NavBar /> */}
            {/* <div className="flex flex-cols-3">
    <div className="grow h-14">
    <TiTick className=' ml-16 w-10 h-10 rounded-full bg-yellow-500/90 fill-white'/>

    </div>
</div> */}
            <div className=" p-2 pt-16 mb-16  mobile:flex-col mobile:items-start grid grid-cols-1 ">
                <div className="flex-1 flex justify-center flex-wrap p-2">
                    <TiTick className='  w-10 h-10 rounded-full bg-yellow-500/90 fill-white' />
                </div>
                <div className="flex flex-row  justify-center">
                    <h3 className='uppercase '>your order is completed!</h3>


                </div>

                <div><hr className="flex justify-items-center absolute mb-5 h-px w-10px  bg-white" /></div>






                <div>
                    <p className=" text-gray-500 flex justify-center">Thank you for your order! order being processed and will be completed when 3-6 hours. You will recieve on email conformation when your order is completed.</p>
                </div>
                <div className='flex justify-center'>
                    {/* <Link to='/'> */}
                    <button className='button-primary mt-2 uppercase'>continue shopping</button>

                    {/* </Link> */}

                </div>

            </div>
            <div className='pb-16 mb-16'></div>
            <div className=' pt-16 mb-9'></div>


            <Footer />
        </>
    )
}

export default OrdercompletedPage