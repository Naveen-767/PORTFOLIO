import './Navbar.css';
import { FaHome ,FaUserAlt,FaBriefcase,FaFileImage,FaAddressCard } from "react-icons/fa";
// import { BsFacebook, BsWhatsapp, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";



function Navbar() {
    return (
      <div className="Navbarcontainer">
        <div className="sidebar">
		<div className="logo">
			<h1>N</h1>
			<div className="menu">
				<br /><br />
				<ul>
				
					<li className="active" id="home">
						<i className="fa fa-home"><FaHome/></i>
						<Link to="/"> Home</Link>
					</li>
					<li id="about">
						<i className="fa fa-user-o"><FaUserAlt/></i>
						<Link to="/About">About</Link>
					</li>
					<li id="service">
						<i className="fa fa-briefcase"><FaBriefcase/></i>
						<Link to="/Services">Services</Link>
					</li>
					<li id="portfolio">
						<i className="fa fa-file-image-o"><FaFileImage/></i>
						<Link to="/Portfolio">Portfolio</Link>
					</li>
					<li id="contact">
						<i className="fa fa-address-card-o"><FaAddressCard/></i>
						<Link to="/Contact">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	</div>
      
      </div>
    );
  }
  
  export default Navbar;
  