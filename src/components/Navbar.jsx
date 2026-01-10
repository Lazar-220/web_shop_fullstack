// import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css';
import { FiShoppingBag } from "react-icons/fi";



import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from 'react';

import { PiTruckLight } from "react-icons/pi";

const Navbar = () => {                           //treba jos dodati kad se doda slika u korpu da se pojavi kruzic na korpi sa brojem artikala i hover da kad se predje kursorom da iskoci prozor sa ariklima 
                                                //i treba dodati efekat spustanja kad se klikne burger meni
  const cartCount = 1;   //dodaj useState(0) za broj slika u korpi i povezi sa dugmicima dodaj u korpu
  const [isOpen, setIsOpen] = useState(false);

  return (

    <>
    <div className="py-3 header">
      <div className="container-fluid">
        {/* flex-nowrap sprečava da se desni deo ikada spusti ispod levog */}
        <div className="d-flex align-items-center justify-content-between flex-nowrap">
          
          {/* LEVA STRANA: Zauzima sav preostali prostor i dopušta prelamanje teksta */}
          <div className="d-flex align-items-center">
            <PiTruckLight size={20} className="ms-2 flex-shrink-0 align-items-center" />
            <span className="ms-2 text-wrap">
              Besplatna dostava na teritoriji Srbije
            </span>
          </div>

          {/* DESNA STRANA: flex-shrink-0 sprečava skupljanje, linkovi ostaju u liniji */}
          <div className="d-flex gap-2 me-2 flex-shrink-0">
            <Link className='nav-link header-link' to='/login/'>Prijavite se</Link>
            <span className=''>|</span>
            <Link className='nav-link header-link' to='/register/'>Registrujte se</Link>
          </div>
          
        </div>
      </div>
    </div>

    <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
      <div className="container-fluid">
        <div className="row w-100 align-items-center m-0">     {/* row je nabudzeni d-flex sa dodacima za grid */}

        {/* LEVA KOLONA (Zauzima 2/12 prostora - BALANS) */}
          <div className="col-2 d-flex align-items-center">
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>

            <Link className="navbar-brand d-none d-lg-block" to="/">
            <span className="dany">Dany</span>
            <span className="art">Art</span>
            </Link>
          </div>

          {/* SREDNJA KOLONA (Zauzima 8/12 prostora - SAVRŠEN CENTAR) */}
          <div className="col-8 d-flex justify-content-center">
            {/* Logo za mobilni: Pojavljuje se u centru samo kad je ekran mali */}
            <Link className="navbar-brand d-lg-none m-0" to="/">
            <span className="dany">Dany</span>
            <span className="art">Art</span>
            </Link>

            {/* Desktop Navigacija: Prikazuje se samo na velikim ekranima */}
            <div className="collapse navbar-collapse d-none d-lg-block desk-nav">
              <ul className="navbar-nav d-flex gap-5 mx-auto">
                <li className="nav-item"><NavLink className="nav-link" to="/">Početna</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/galerija/">Galerija</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/o-nama/">O nama</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/kontakt/">Kontakt</NavLink></li>
              </ul>
            </div>
          </div>

          {/* DESNA KOLONA (Zauzima 2/12 prostora - BALANS) */}
          
          <div className="col-2 korpa-kontejner">

            <Link to="/korpa/" className="cart-fixed">
              <FiShoppingBag size={24} />
              {cartCount > 0 ? (
                <span className="cart-badge">{cartCount}</span>
              ) : <></>}
            </Link>
            {/* Prazno - služi kao teg da bi srednja kolona ostala u centru */}
          </div>

          {/* MOBILNI COLLAPSE (Ispod svega kad se klikne burger) */}
          <div className="collapse d-lg-none" id="mainNavbar">
            <ul className="navbar-nav text-center py-1">
              <li className="nav-item"><NavLink className="nav-link" to="/">Početna</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/galerija/">Galerija</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/o-nama/">O nama</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/kontakt/">Kontakt</NavLink></li>    
            </ul>
          </div>

        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar