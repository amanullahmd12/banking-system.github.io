/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from "../logo.svg"

const First = () => {
  return (
    <section  className='first'>
        <div className='container-fluid'>
            <div className="row">
            <div className='col-md-6'>
                <div className="text">
                {/* <h1>Welcome to Spark Bank of India</h1> */}
                <h1>Pay, invest, save your cash with a single bank. </h1>
                </div>
            </div>
            <div className='col-md-6 '>
                <img className="Image" src={logo} ></img>
            </div>
        </div>
        </div>
        </section>
  )
}

export default First;