import React from 'react'
import {Link } from 'react-router-dom'
import Form from '../Components/Form'
export default function Home() {
    return (
        <div>
            <div className="w-100 homecontainer h-100v">
                <div className="row w-100">
                    <div className="col-sm-6 h-100 d-flex flex-column bg-white text-left px-5 ml-5 mt-5"  >
                        <div className="text-lead font-primary">
                            <h1>Welcome to Your Edunomics Ecosystem</h1>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                            <button className="btn btn-success">Learning</button>
                            <button className="btn btn-success">Career</button>
                        </div>
                        <Form />
                    </div>
                </div>
       
            </div>
        </div>
    )
}
