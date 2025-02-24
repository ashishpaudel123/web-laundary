import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
<header>
  <nav className="navbar navbar-expand-sm navbar-light bg-blue-gra" id="navbar">
    <div className="container">
      <Link href="/"><img width={70} src="./img/logo.jpg" alt="image" /></Link>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mx-auto gap-5 mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-light fw-bold" href="/" aria-current="page">Home
              <span className="visually-hidden">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bold" href="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bold" href="/pricing">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bold" href="/about">About us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bold" href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

    </>
  )
}

export default Header