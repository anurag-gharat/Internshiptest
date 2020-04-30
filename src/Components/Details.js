import React from 'react'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'

export default function Details() {
    return (
        <div className="container-fluid mx-auto mt-3">
            <div className="row w-100">
                <h1 className="mx-auto font-weight-bold">Current Initiatives</h1>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="card w-50 border-0 mx-auto " width="300px">
                        <img className="card-img-top h-50" src={pic1} height="300px"></img>
                        <div className="card-body">
                            <p className="card-text">Get help on improving your business scenario right from purchase to market in</p>
                            <a href="#" className="btn btn-primary">Wenester</a>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card w-50 border-0 mx-auto " width="300px">
                        <img className="card-img-top h-50" src={pic2} height="300px"></img>
                        <div className="card-body">
                            <p className="card-text">Scouting 50 the aspiring minds, willing to achieve excellence</p>
                            <a href="#" className="btn btn-primary">Wenester</a>
                            <a href="#" className="btn btn-primary ml-5">Wenester</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
