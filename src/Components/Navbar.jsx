import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const handleClick=(ans)=>{
        // console.log(ans)
        props.transferData(ans)
    }
  return (
    <div>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li onClick={()=>handleClick('india')} className="nav-item">
          <Link className="nav-link" href="#">cricket</Link>
        </li>
        <li onClick={()=>handleClick('sports')} className="nav-item">
          <Link className="nav-link" href="#">Sports</Link>
        </li>
        <li onClick={()=>handleClick('entertainment')} className="nav-item">
          <Link className="nav-link" href="#">Entertainment</Link>
        </li>
        <li onClick={()=>handleClick('politics')} className="nav-item">
          <Link className="nav-link" href="#">Politics</Link>
        </li>
        
     
      </ul>
    
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
