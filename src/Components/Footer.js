import React from 'react'
import { FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {



    return (
            <footer className="bg-dark m-0 pt-5">
                <div className="d-flex w-100 justify-content-center">
                    <FaFacebook className="socialmedia mx-3" />
                    <FaLinkedinIn className="socialmedia mx-3"  />
                    <FaInstagram className="socialmedia mx-3"  />
                    <FaTwitter className="socialmedia mx-3" />
                </div>
                <div className="d-flex w-100 mt-2">

                    <ul className="w-50 mx-auto d-flex flex-row justify-content-center" >
                    <li className="border-right px-4 "><Link className="text-white">Terms of use</Link></li>
                    <li className="border-right px-4"><Link className="text-white">Privacy Policy</Link></li>
                    <li className=" px-4"><Link className="text-white">Cookie Policy</Link></li>
                    </ul>
                </div>
                <div className="w-100 bg-first text-center text-white py-2" >
                    <p>Copyright 2020 © Edunomics | All rights reserved</p>
                </div>
            </footer>
    )
}
