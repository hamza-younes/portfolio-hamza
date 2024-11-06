import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
           {CONTACT.email}
        </a>
        <div className="my-4">
          <a 
            href="/Hamza-younes-cv-1original (1).pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border-b hover:text-blue-700"
            download
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
