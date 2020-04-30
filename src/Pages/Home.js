import React from 'react'
import {Link } from 'react-router-dom'
import Form from '../Components/Form'
export default function Home() {
    return (
        <div>
            <div className="w-100 homecontainer h-100v">
                <div className="row w-100">
                    <div className="col-sm-6 h-100 d-flex flex-column text text-left px-5 ml-5 mt-5 hero-box"  >
                        <div className="font-primary">
                            <h1 className="display-5">Welcome to Your Edunomics Ecosystem</h1>
                        </div>
                        <div className="d-flex flex-row justify-content-start my-2">
                            <button className="btn btn-success mr-5 px-4 py-2">Learning</button>
                            <button className="btn btn-success ml-5 px-4 py-2">Career</button>
                        </div>
                        <Form />
                    </div>
                </div>

       
            </div>
        </div>
    )
}
