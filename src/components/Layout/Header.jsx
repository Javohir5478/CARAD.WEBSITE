import { Link } from "react-router-dom"
import "./Header.scss";

const Header = () => {
  return (
    <div className="header_container">

            <div className="header_header">

<img src="/caraduz.png" alt="" />
                 <ul>
                  <Link to="/" > <li className="button-27" role="button">Home</li></Link>
                  
                  <Link to="/service" > <li className="button-27" role="button">Service</li></Link>
                   <Link to="/cars"> <li>CARS</li></Link>
                    <Link to="/about"> <li>About</li></Link>
                  <Link to="/login">  <button className="button-64"  role="button"><span className="text">Login</span></button></Link>
                 </ul>

            </div>

            <div className="header_body">

            </div>

    </div>
  )
}

export default Header