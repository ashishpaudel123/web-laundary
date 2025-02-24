"use client"
import About from '@/app/about/page'
import Pricing from '@/app/pricing/page'
import Services from '@/app/services/page'
import { TiTick } from "react-icons/ti";

import React from 'react'

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
document.getElementById("navbar").classList.add('fixed-top');

  } else {
    document.getElementById("navbar").classList.remove('fixed-top');
  }
}

function page() {
  window.onscroll = function() {scrollFunction()};
  return (
    <>
    {/* Landing page start */}
      <section className="bg-blue-gra pb-5">
        <div className="container">
          <div className="row home">
            <div className="col-lg-6 mt-3">
              <span className="fs-5 text-uppercase bg-light rounded px-3 py-2 fw-bold text-blue">Welcome to Laundary</span>
              <p className="fw-bold text-light h pt-4">Where Freshness Meets Care</p>
              <p className="white-50">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nemo, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
              <div className="my-3 d-flex gap-3">
                <button className="btn btn-info border-0 p-3 rounded fw-bold">Pick Up Now</button>
                <button className=" btn btn-warning border-0 p-3 rounded fw-bold">Discover More</button>
              </div>
            </div>
            <div className="col-lg-6 ">
              <img className="img-fluid rounded mt-4" src="https://mlcvmo0gntjk.i.optimole.com/cb:ICH-.67306/w:1600/h:1066/q:87/f:best/ig:avif/https://www.ecos.com/wp-content/uploads/2022/05/laundry.jpeg" alt="image" />
            </div>
          </div>
        </div>
      </section>
    {/* Landing page end */}

    {/* <!-- 2ndsec start --> */}
      <section>
        <div className="container">
          <div className="row m-20">
            <div className="col-lg-4 m20w text-center">
              <div className="shadow s2c bg-light rounded px-4 py-3">
                <img width={100} className='rounded' src="https://img.freepik.com/free-vector/award-ribbon-check-mark-with-stars_78370-1097.jpg?ga=GA1.1.1596576863.1740284934&semt=ais_hybrid" alt="image" />
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cumque.</p>
              </div>
            </div>
            <div className="col-lg-4 m20w text-center">
              <div className="shadow s2c bg-light rounded px-4 py-3">
                <img width={145} className='rounded' src="https://img.freepik.com/free-photo/blue-alarm-clock-white-background_1112-483.jpg?ga=GA1.1.1596576863.1740284934&semt=ais_hybrid" alt="image" />
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cumque.</p>
              </div>
            </div>
            <div className="col-lg-4 m20w text-center">
              <div className="shadow s2c bg-light rounded px-4 py-3">
                <img width={120} className='rounded' src="https://img.freepik.com/free-photo/man-with-thumb-up-white-background_1368-11957.jpg?ga=GA1.1.1596576863.1740284934&semt=ais_hybrid" alt="image" />
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cumque.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* <!-- 2ndsec end --> */}

    <About/>

    {/* Clean clothes esay life start */}
    <section className="bg-blue-gra py-3 text-center">
      <div className="container">
        <marquee className="fw-bold fs-1">" <span className="text-warning">Clean</span> <span className="text-danger">Clothes</span>  <span className="text-light">Easy Life</span>" </marquee>
      </div>
    </section>
    {/* Clean clothes esay life end */}

    {/* form start */}
    <section className=" my-2">
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-6">
            <h2 className="fw-bold text-blue mt-3">Schedule Your Pick-Up or Delivery, We'll Take Care of the Rest!</h2>
            <div className="bg-light-blue shadow rounded">
              <form action className="p-4 d-flex flex-row gap-2 flex-wrap justify-content-between">
                <label className="my-2 w-40" htmlFor><input className="form-control" type="text" name="name" id placeholder="Name" /></label>
                <label className="my-2 w-40" htmlFor><input className="form-control" type="text" name="name" id placeholder="Email" /></label>
                <label className="my-2 w-40" htmlFor><input className="form-control" type="text" name="name" id placeholder="Phone" /></label>
                <label className="my-2 w-40" htmlFor><input className="form-control" type="text" name="name" id placeholder="Date" /></label>
                <label className="my-2 timepickup" htmlFor><input className="form-control" type="text" name="name" id placeholder="Time Pickup" /></label>
                <br />
                <button className="btn mt-3 bg-blue-gra text-light border-0 p-2 px-4 rounded fw-bold pickuphover"><i className="fa-solid fa-van-shuttle" /> Pickup Now</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid rounded" src="./img/beauty.jpg" alt="image" />
          </div>
        </div>
      </div>
    </section>
    {/* form end */}

    <Services/>

    {/* Quality Assurance start */}
    <section>
      <div className="container">
        <div className="row">
        <div className="col-lg-6 mt-3">
            <div className="position-relative expimg">
            <img className="w-100" src="./img/quality assu girl.avif" alt="img" />
            <div>
                <div className="rounded position-absolute exp p-3 bg-blue-gra w-50 text-light">
                <p className="pt-1"><span className="fs-1 fw-bold">25+</span> Year of Experience</p>
                <p className>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="btn mt-3 bg-warning text-light border-0 p-2 px-4 rounded fw-bold"> View More</button>
                </div>
            </div>
            </div>
        </div>
          <div className="col-lg-5 offset-lg-1 my-5">
            <span className="bg-blue p-2 fw-bold text-light rounded">Quality Assurance</span>
            <h1 className="text-uppercase  fw-bold text-blue mt-4">Your Satisfaction is our Commitment.</h1>
            <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, praesentium consequuntur. Praesentium </p>
            <div className="fw-bold">  
              <p><TiTick style={{color: '#0b61f4'}}  /> Eco-conscious Cleaning</p>
              <p><TiTick style={{color: '#0b61f4'}}  /> Specialty Fabric Care</p>
              <p><TiTick style={{color: '#0b61f4'}}  /> Non-Toxic Stain Removal</p>
              <p><TiTick style={{color: '#0b61f4'}}  /> Carbon-Neutral Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Quality Assurance end */}

    <Pricing/>


    </>
  )
}

export default page