import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarBootstrap from 'react-bootstrap/Navbar'
import NavBootstrap from 'react-bootstrap/Nav'
import logo from '../../assets/img/review.png'
import {Link} from 'react-router-dom'
import '../../styles/Home.css'
import { useHistory } from 'react-router-dom';

const Navbar = ({ token, setToken, deleteToken, deleteUserId }) => {
  const history = useHistory()

  const handleLogout = async e => {
    e.preventDefault();
    setToken('');
    deleteToken();
    deleteUserId();
    history.push('/')
  }
  
  if(!token) {
      return (
        <NavbarBootstrap collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Link to="/">
            <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
          </Link>
        <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBootstrap.Collapse id="responsive-navbar-nav">
          <NavBootstrap className="mr-auto">
            <Link to="/booking">Booking</Link>
            <Link to="/hostel">Hostel</Link>
          </NavBootstrap>
          <div className="navbar-nav ms-lg-4">
              <Link className="nav-item nav-link" to="/login">Sign in</Link>
            </div>
            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
              <Link to="/register" className="btn btn-sm btn-primary w-full w-lg-auto">
                Register
              </Link>
            </div>
        </NavbarBootstrap.Collapse>
    </NavbarBootstrap>
      )
    }
    return (
        <NavbarBootstrap collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Link to="/">
            <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
          </Link>
        <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
      <NavbarBootstrap.Collapse id="responsive-navbar-nav">
        <NavBootstrap className="mr-auto">
          <Link to="/booking">Booking</Link>
          <Link to="/hostel">Hostel</Link>
        </NavBootstrap>
        <div className="navbar-nav ms-lg-4">
          <Link className="nav-item nav-link" to="/" onClick={handleLogout}>Sign Out</Link>
        </div>
      </NavbarBootstrap.Collapse>
    </NavbarBootstrap>

    )
}
export default Navbar