import React from 'react'
import { TiTick } from "react-icons/ti";

function Pricing() {
  return (
    <>
    
        {/* Price Packages start */}
        <section className='pricing'>
        <div className="container">
            <div className="row mt-5">
            <p className="text-uppercase text-center fw-bold text-blue">What we offer</p>
            <h1 className="text-uppercase fw-bold mt-3 text-center text-blue">Price Packages</h1>
            </div>
            <div className="row">
            <div className="col-lg-4 my-4">
                <div className="shadow rounded  ">
                <div className=" bg-blue-gra br p-2 text-white">
                    <p className="text-uppercase px-4 fw-bold">Dry Cleaning</p>
                    <p><span className="text-warning fs-1 px-3 fw-bold">Rs.50</span>per clothes</p>
                </div>
                <ul className="mt-3">
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 Clothes Every Month
                    </li>
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 Cleaning good for clothes
                    </li>
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 30 Clothes Dryclean
                    </li>
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 10 Clothes iron
                    </li>
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 40 Only 1 Bed Sheet Set
                    </li>
                </ul>
                <button className="btn w-100 mt-3 bg-blue-gra text-light border-0 p-2 px-4 rounded fw-bold pickuphover"><i className="fa-solid fa-van-shuttle" /> PURCHASE NOW</button>
                </div>
            </div>
            <div className="col-lg-4 my-4">
                <div className="shadow rounded  ">
                <div className=" bg-blue-gra br p-2 text-white">
                    <p className="text-uppercase px-4 fw-bold">Dry Clean / Laundery</p>
                    <p><span className="text-warning fs-1 px-3 fw-bold ">Rs.60</span>per clothes</p>
                </div>
                <ul className="mt-3">
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 Clothes Every Month
                    </li>
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 Cleaning good for clothes
                    </li>
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 30 Clothes Dryclean
                    </li>
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 10 Clothes iron
                    </li>
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 Only 1 Bed Sheet Set
                    </li>
                </ul>
                <button className="btn w-100 mt-3 bg-blue-gra text-light border-0 p-2 px-4 rounded fw-bold pickuphover"><i className="fa-solid fa-van-shuttle" /> PURCHASE NOW</button>
                </div>
            </div>
            <div className="col-lg-4 my-4">
                <div className="shadow rounded">
                <div className=" bg-blue-gra br p-2 text-white">
                    <p className="text-uppercase px-4 fw-bold">Dry Cleaning</p>
                    <p><span className="text-warning fs-1 px-3 fw-bold">Rs.90</span>Dry Clean / Iron / Fold</p>
                </div>
                <ul className="mt-3">
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 Clothes Every Month
                    </li>
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 Cleaning good for clothes
                    </li>
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 30 Clothes Dryclean
                    </li>
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 10 Clothes iron
                    </li>
                    <li>
                    <TiTick style={{color: '#0b61f4'}}  /> 50 Only 1 Bed Sheet Set
                    </li>
                </ul>
                <button className="btn w-100 mt-3 bg-blue-gra text-light border-0 p-2 px-4 rounded fw-bold pickuphover"><i className="fa-solid fa-van-shuttle" /> PURCHASE NOW</button>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* Price Packages end */}

    </>
  )
}

export default Pricing