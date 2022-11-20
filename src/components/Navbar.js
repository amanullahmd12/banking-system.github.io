/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <div className="col-lg-6">
    <a className="navbar-brand" to="/">The Spark Bank of India</a>
    </div>
    <div className="col-lg-6">
        <ul className="navbar-content">
            <li>
                <Link id="nav-con" to="/">Home</Link>
            </li>
            <li>
               <Link id="nav-con" to="/customers">Customers</Link>
            </li>
            <li>
               <Link id="nav-con" to="/transactions">Transactions</Link>
            </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;