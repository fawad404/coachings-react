import React from 'react'

const Card = () => {
  return (
    <div className='bg-white w-[100%] h-96 border-4 border-white flex gap-4'>
        <div className='w-[470px] h-80 border-2 border-black rounded '>
            <h1 className='text-white  bg-blue-500 h-14 flex items-center justify-center font-bold'>News You Can Trust</h1>
            <h1 className='mt-8 font-bold'>Start UpTo Date</h1>
            <h1 className='mt-4'>Subscribe to oue new seller to the latest news to your inbox</h1>
            <input type="text" placeholder='Gmail' className='w-48 mt-4 bg-slate-300 h-8 text-center rounded-xl'/>
            <h1 className='mt-2 bg-blue-500 text-white font-bold w-48 h-8 ml-36  rounded-xl'>Subscribe</h1>
            <h1 className='mt-2'>We value Our Privacy</h1>
        </div>
        <div className='w-[50%] h-80 border-2 border-black rounded '>
            <h1 className='text-white  bg-blue-500 h-14 flex items-center justify-center font-bold'>News You Can Trust</h1>
            <h1 className='mt-8 font-bold'>Start UpTo Date</h1>
            <h1 className='mt-4'>Subscribe to oue new seller to the latest news to your inbox</h1>
            <input type="text" placeholder='Gmail' className='w-48 mt-4 bg-slate-300 h-8 text-center rounded-xl'/>
            <h1 className='mt-2 bg-blue-500 text-white font-bold w-48 h-8 ml-52  rounded-xl '>Subscribe</h1>
            <h1 className='mt-2'>We value Our Privacy</h1>
        </div>
    </div>
  )
}

export default Card