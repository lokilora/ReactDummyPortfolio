import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'




const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Knock here to talk with us 👇!</h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>
                {CONTACT.address}
            </p>
            <p className='my-4'>phoneNo: {CONTACT.phoneNo}</p>
            <a href='#' className='my-4 border-b'> {CONTACT.email} </a>
        </div>
    </div>
  )
}

export default Contact
