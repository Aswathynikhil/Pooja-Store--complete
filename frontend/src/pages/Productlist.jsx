import React from 'react'
import Footer from '../components/Footer'
import Navbarnew from '../components/Navigation/Navbarnew'
import Product from '../components/Product'
import Sidebaruser from '../components/SidebarUser'
// import Footer from '../components/Footer'
// import NavBar from '../components/Navbar'
// import Products from '../components/Products'
// import Sidebar from '../components/Sidebar'

const Productlist = () => {
    return (
        <>
            <div className='h-screen  '>
                {/* <Navbarnew /> */}
                <div>
                    <div className='grid grid-cols-4 gap-1'>
                        <Sidebaruser />
                        {/* <div> */}
                        {/* <Product /> */}
{/* 
                        </div> */}

                    </div>
                </div>
                <Footer />
                
            </div>
            
       


        </>
    )
}

export default Productlist