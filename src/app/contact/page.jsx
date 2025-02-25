"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"

function page() {
   useEffect(()=>{
            AOS.init();
        },[])
  return (
    <>
    <section className="my-2">
    <div className="container">
        <div className="row mt-4">
        <div className="col-lg-6">
            <h2 className="fw-bold text-blue mt-3" data-aos="fade-up" data-aos-duration="3000">CONTACT US</h2>
            <div className="bg-light-blue shadow rounded" data-aos="fade-up" data-aos-duration="3000">
            <form action className="p-4 d-flex flex-row gap-2 flex-wrap justify-content-between">
                <label className="my-2 w-40" htmlFor><input className="form-control" type="text" name="name" id placeholder="Name" /></label>
                <label className="my-2 w-40" htmlFor><input className="form-control" type="text" name="name" id placeholder="Email" /></label>
                <label className="my-2 w-40" htmlFor><input className="form-control" type="text" name="name" id placeholder="Phone" /></label>
                <label className="my-2 w-40" htmlFor><input className="form-control" type="text" name="name" id placeholder="Date" /></label>
                <label className="my-2 timepickup" htmlFor><input className="form-control" type="text" name="name" id placeholder="Time Pickup" /></label>
                <br />
                <button className="btn mt-3 bg-blue-gra text-light border-0 p-2 px-4 rounded fw-bold"><i className="fa-solid fa-van-shuttle" /> Pickup Now</button>
              </form>
            </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-duration="3000">
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
        </div>
    </div></section>
    </>
  )
}

export default page