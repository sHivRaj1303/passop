import React from 'react'

const Footer = () => {
    return (
        <div className="footer bg-slate-800 text-white  w-full justify-center text-center p-1">
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500' >&lt;</span>
                Pass
                <span className='text-green-500' >OP/&gt;</span>

            </div>
            <span className='flex justify-center items-center text-center'>Created with <img className='mx-1' width={20} src="/icons/heart.svg" alt="heart" /> by sHiv_crafts_code</span>
        </div>
    )
}

export default Footer
