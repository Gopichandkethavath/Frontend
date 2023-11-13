import React from 'react'
import { Link } from 'react-router-dom'
import Audio from './Contactform'
function Navbar(props) {
  return (
    <>
        <nav className={` navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}  color-green`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Code for Good</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/textform">TextUtil</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  aria-current="page" to="/Audio">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        </ul>
        <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  for="flexSwitchCheckDefault">DarkMode</label>
</div>

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button type="button" class="btn btn-danger">submit</button>
      </form> */}
  <Link to="/login">
  <button className="btn btn-primary mx-3" >Login</button>
    </Link>
    <Link to="/signup">
  <button className="btn btn-primary mx-3" >Signup</button>
    </Link>
    <br />
 



    </div>
  </div>
</nav>
</>

  )
}

export default Navbar