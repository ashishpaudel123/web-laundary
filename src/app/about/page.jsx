import Link from 'next/link';
import React from 'react'
import { TiTick } from "react-icons/ti";

function About() {
  return (
    <>
        {/* <!-- About us start --> */}
<section>
  <div className="container my-5">
    <div className="row">
      <div className="col-lg-6 mt-3">
        <img className="img-fluid rounded" src="https://img.freepik.com/free-photo/women-selecting-clothes_1098-13848.jpg?ga=GA1.1.1596576863.1740284934&semt=ais_hybrid" alt="image" />
      </div>
      <div className="col-lg-6 mt-3">
        <span className="bg-blue p-2 fw-bold text-light rounded">About Us</span>
        <br />
        <br />
        <p className="fw-bold m text-blue">Your Trusted Partner in Laundry Care.</p>
        <p className='text-dark l4'>Lorem ipsum doorndis impedit iusto pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, est? sit amet consectetur adipisicing elit. Iste voluptas fuga eaque culpa facere molestiae.</p>
        <div className='d-flex flex-column gap-g'>  
          <li className='fw-bold'><TiTick style={{color: '#0b61f4'}}  /> Passionate Expertise</li>
          <li className='fw-bold'><TiTick style={{color: '#0b61f4'}}  /> Cutting-Edge Technology</li>
          <li className='fw-bold'><TiTick style={{color: '#0b61f4'}}  /> Customer-Centric Approach</li>
          <li className='fw-bold'><TiTick style={{color: '#0b61f4'}}  /> Passionate Expertise</li>
          <Link href={'/about'} className="rounded link-underline-primary p-2 fw-bold">View More...</Link>
        </div>

        </div>
    </div>
  </div>
</section>

                {/* <!-- About us end --> */}
    </>
  )
}

export default About