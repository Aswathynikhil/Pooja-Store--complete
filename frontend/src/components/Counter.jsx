import React, { useEffect, useState } from 'react'

const Counter = () => {
    const data = Number(localStorage.getItem('count'))
    console.log(data)
    const [counter, setCounter] = useState(data ? data : 0)
    useEffect(() => {
        localStorage.setItem('count', counter)
    })
    return (
        <div className="flex items-center justify-center text-2xl">
            Quantity
            <div className="ml-5 shadow-md flex">
                <div className='bg-gray-500 border-gray-300 text-gray-900 w-8 flex items-center justify-center cursor-pointer rounded-l-md'
                    onClick={() => { setCounter(counter - 1) }}>
                    -
                </div>
                <div className='w-8 flex item-center justify-center border-[1px] border-gray-300'>
                    {counter < 0 ? 0 : counter}
                </div>
                <div className='bg-gray-500 border-gray-300 text-gray-900 w-8 flex items-center justify-center cursor-pointer rounded-r-md'
                    onClick={() => { setCounter(counter + 1) }}>
                    +
                </div>
            </div>
        </div>)
}

export default Counter