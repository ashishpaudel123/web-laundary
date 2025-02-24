"use client"
import Link from 'next/link';
import React, { useEffect } from 'react'

function Footer() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
  return (
    <>
<footer className="bg-blue-gra py-4 text-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <li className="fw-bold fs-5 text-gradient">" Clean Clothes, Easy Life! "</li>
          <p className='white-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quo! Alias, minus. offici Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias natus eligendi? Libero, est ad.</p>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 col-6">
        <ul>
          <li className='fw-bold fs-5'>Quick Links</li>
          <li><Link className='white-50' href="/about">About Us</Link></li>
          <li><Link className='white-50' href="/services">Services</Link></li>
          <li className='white-50'>Test Monials</li>
          <li className='white-50'>FAQS</li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 col-6">
        <ul>
          <li className="fw-bold fs-5">Our Services</li>
          <li className='white-50'>Dry Cleaning</li>
          <li className='white-50'>Laundary Services</li>
          <li className='white-50'>Wet Cleaning</li>
          <li className='white-50'>Weeding Gowns</li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<div className="copyright bg-light-blue">
  <div className="shadow py-3">
  <div className="container">
    <div className="d-flex justify-content-between">
      <p>Copyright @2025. All Rights Reserved</p>
      <p>Designed and developed by Ashish Paudel.</p>
    </div>
  </div>
  </div>
</div>
    </>
  )
}

export default Footer