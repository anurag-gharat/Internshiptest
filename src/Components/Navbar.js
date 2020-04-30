import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"
import Logo from '../images/logo.png'

export default class Navbar extends Component {
    
  state={
    menus:[{
      id:1,
      name:"Initiatives",
      url:"/initiatives",
    },{
      id:1,
      name:"Digital Service",
      url:"/digitalservice",
    },
      
    ]
  }

  render() {
        return (
        <nav className="navbar navbar-expand-sm navbar-inverse fixed-top bg-white shadow-lg">
          <div className="container-fluid">
            <div className="navbar-header">

              <Link to="/" className="navbar-brand">
                  <img src={Logo} className="w-25"></img>
              </Link>
              <button type="button" className="navbar-toggler ml-5 float-right bg-dark display-1" data-toggle="collapse" data-target="#myNavbar">
                <FiMenu className="bg-dark text-white menu-icon"/>
              </button>
              
            </div>
            <div className="collapse navbar-collapse navbar-right " id="myNavbar">
              <ul className="nav navbar-nav ml-auto primarytextcolor">
              {this.state.menus.map(menu=>{
                return(
                <li className="active mr-4 capitalize my-auto" id="{menu.id}"><Link className="nav-link text-dark" to={menu.url}>{menu.name}</Link></li>
                )

              })}
                <li className="active">
                    <Link className="nav-link text-dark"><a className=" btn btn-outline-success">Try our alpha</a></Link></li>
              </ul>

            </div>
          </div>
        </nav>


        )
    }
}