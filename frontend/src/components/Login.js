import * as React from 'react';


export default function Login(){
    return(
        <div className='bg-white px-10 py-20'>
           <h1 className='text-5xl font-semibold'>Welcome back</h1>
           <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
           <div className='mt-8'>
            <div>
                <label className='text-lg font-medium'>Email</label>
                <input
                  className ='w-full border-2 border-gray-100 rounded-xl p-4 mt-1'
                  placeholder='Enter your email'
                />
            </div>
            <div>
                <label className ='text-lg font-medium'>Password</label>
                <input
                  className ='w-full border-2 border-gray-100 rounded-xl p-4 mt-1'
                  placeholder='Enter your Password'
                  type='Password'
                />
            </div>
            <div className='mt-8 flex justify-between items-center'>
                <input 
                  type='checkbox'
                  id = 'remember'
                />
                <label className='ml-2 font-medium text-base' for = 'remember'>Remember for 30 days</label>
            </div>
            <button className='active:scale-[.98] font-medium text-base text-violet-300'>Forgot Password</button>
           </div>
           <div className='mt-8 flex flex-col gap-y-4'>
               <button className='active:scale-[.98] py-4 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign in</button>
           </div>
        </div>
    )
}
