import { Link } from "gatsby"
import HeaderNav from "../nav"
import React from "react"
import Logo from "../../images/logo.png"

const Header = ({ siteTitle }) => (
  <div className="menu-container">
    <div className="container-fluid ">
      <div className="row d-flex align-items-center flex-nowrap justify-content-between">
        <div className="col-6 col-md-2">
          <div className="nav-brand d-flex justify-content-start align-items-center">
            <Link to="/">
              <img className="img-fluid" src={Logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="col-6 col-md-10 p-0 d-flex justify-content-end align-items-center text-center">
          <div className="top-info">
            <ul className="list-unstyled d-flex my-0 ml-0 ">
              <li className="mx-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mx-2">
                <Link to="/">About Us</Link>
              </li>
              <li className="mx-2">
                <Link to="/">Contact Info</Link>
              </li>
            </ul>
          </div>
          <HeaderNav />
        </div>
      </div>
    </div>
  </div>
)

export default Header
