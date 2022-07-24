import React, { Component, useState } from 'react';
import { Modal } from 'react-bootstrap';
//import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import {Form} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Logout from './Logout';
// import CvModal from './CvModal';

import logo2 from './../../images/spectre.png';
var bnr3 = require('./../../images/background/bg3.jpg');


class Header extends Component{
	
	validate = {
		validated: false,
	}; 

	handleSubmit = (event) => {
	  const form = event.currentTarget;
	  if (form.checkValidity() === false) {
		event.preventDefault();
		event.stopPropagation();
	  }
  
	  this.setValidated({ validated: true });
	};

	state = {
		// initial state
		show: false,
	}
	
	handleClose = () => {
		this.setState({ show: false });
	};
	handleShow = () => {
		this.setState({ show: true });
	};	
	componentDidMount() {
        // sidebar open/close
		
        var Navicon = document.querySelector('.navicon');
        var sidebarmenu = document.querySelector('.myNavbar ');

        function toggleFunc() {
            sidebarmenu.classList.toggle('show');
         //   Navicon.classList.toggle('open');
        }
        Navicon.addEventListener('click', toggleFunc);

        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li > a, .sub-menu > li > a'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
		
        function checkLi(current) {
            current.parentElement.parentElement.querySelectorAll( "li" ).forEach( el =>
				(current.parentElement !== el) ? el.classList.remove('open') : ''
			);
			setTimeout(() => {
				current.parentElement.classList.toggle('open');
			}, 100);			
        }
	}	
	render(){	
		return(
			<>
				<header className="site-header mo-left header fullwidth">
					<div className="sticky-header main-bar-wraper navbar-expand-lg">
						<div className="main-bar clearfix">
							<div className="container clearfix">
								
								<div className="logo-header mostion">
									<Link to={"/"}><img src={logo2} className="logo" alt="img" /></Link>
								</div>
								
								 <button className="navbar-toggler collapsed navicon  justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button> 
								{/* <div className="extra-nav">
									<div className="extra-cell"> */}
										
										{/* <ul className="sub-menu">
												<li><Link to={"/jobs-profile"} className="dez-page">My Profile</Link></li>
												<li><Link to={"/jobs-my-resume"} className="dez-page">My Resume </Link></li>
												<li><Link to={"/jobs-applied-job"} className="dez-page">Applied Job </Link></li>
											</ul> */}
										{/* <Link to={"/register"} className="site-button"><i className="fa fa-user"></i> Sign Up</Link> */}
										
											{/* <Link to ={'#'} title="READ MORE" onClick={this.handleShow}  className="site-button"><i className="fa fa-lock"></i> login </Link> */}
										{/* <Logout /> */}
									 {/* </div>
								</div> */}
								  
								<div className="header-nav navbar-collapse collapse myNavbar justify-content-start" id="navbarNavDropdown"> 
									<div className="logo-header mostion d-md-block d-lg-none">
										<Link to={'/'} className="dez-page"><img src={logo2} alt="" /></Link>
									</div>
									<ul className="nav navbar-nav">
										<li><Link to={"/about-us"}>About Us</Link></li>
										<li >
											
											<Link to={'#'} >For Candidates</Link>
											<ul className="sub-menu">
												<li><Link to={"/browse-job"} className="dez-page">Browse Job </Link></li>
												<li><Link to={"#"}  className="dez-page"><span onClick={this.handleShow}>Quick Upload CV</span></Link></li>
											</ul>
										</li>
										<li >
											<Link to={'#'} >For Employers</Link>
											<ul className="sub-menu">
												<li><Link to={"/company-post-jobs"} className="dez-page">Post A Jobs </Link></li>
												<li><Link to={"/company-manage-job"} className="dez-page">Manage jobs </Link></li>
												<li><Link to={"/browse-candidates"}  className="dez-page">Browse Candidates</Link></li>
											</ul>
										</li>
										
										<li><Link to={"/contact"}>Contact Us</Link></li>
										{/* <li><Link to={"/login"} className="site-button">Login / Register</Link></li> */}
										<li><Link to={'/Login'}  style={{width: '160px' }}> Sign In/Register </Link>
											<ul className="sub-menu">
											<li><Link to={"/jobs-profile"} className="dez-page">My Profile</Link></li>
												<li><Link to={"/jobs-my-resume"} className="dez-page">My Resume </Link></li>
												<li><Link to={"/jobs-applied-job"} className="dez-page">Applied Job </Link></li>
												<li><Link to={"/jobs-alerts"} className="dez-page">Jobs Alerts </Link></li>
												<li><Link to={"/jobs-saved-jobs"} className="dez-page">Saved Job </Link></li>
											</ul>
										</li>
										
									</ul>			
								</div>
							</div>
						</div>
					</div>
				</header>
				
				{/*  Model Start */}
				 <Modal  className=" lead-form-modal"  show={this.state.show} onHide={this.handleClose} centered >
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<button type="button" className="close" onClick={this.handleClose}>
								<span aria-hidden="true">&times;</span>
							</button>
							<div className="modal-body row m-a0 clearfix">
								{/* <div className="col-lg-6 col-md-6 overlay-primary-dark d-flex p-a0">
									<div className="form-info text-white align-self-center">
										<h3 className="m-b15">Send Us Your CV</h3>
										
									</div>
								</div> */}
								<div className="col-lg-12 col-md-6 p-a0">
									<div className="lead-form browse-job text-left">
											<h3 className="m-t0">Send Us Your CV</h3>
										<Form >
											<Row className="mb-2">
												<Form.Group  as={Col} md="6" >
													<Form.Label>First Name</Form.Label>
													<Form.Control type= "name" placeholder='First Name '/>
												</Form.Group>
												<Form.Group  as={Col} md="6" >
													<Form.Label>Last Name</Form.Label>
													<Form.Control type= "surname" placeholder='Last Name '/>
												</Form.Group>
											</Row>
											<Row className="mb-2">
												<Form.Group  as={Col} md="6" >
													<Form.Label>Email Address</Form.Label>
													<Form.Control type= "email" placeholder='Enter your Email '/>
												</Form.Group>
												<Form.Group  as={Col} md="6" >
													<Form.Label>Mobile Number</Form.Label>
													<Form.Control type= "nmber" placeholder='Mobile Number '/>
												</Form.Group>
											</Row>
											<Row className="mb-2">
												<Form.Group  as={Col} md="6" >
													<Form.Label>Location</Form.Label>
													<Form.Control type= "location" placeholder='Location '/>
												</Form.Group>
												<Form.Group  as={Col} md="6" >
													<Form.Label>Profession</Form.Label>
													<Form.Control as="select" 
														custom className="select-btn"
														style={{height: '50px'}}>
														<option>Choose Profession</option>
														<option>Construction</option>
														<option>Corodinator</option>
														<option>Employer</option>
														<option>Financial Career</option>
														<option>Information Technology</option>
														<option>Marketing</option>
														<option>Quality check</option>
														<option>Real Estate</option>
														<option>Sales</option>
														<option>Supporting</option>
														<option>Teaching</option> 
													</Form.Control>
													
												</Form.Group>
											</Row>
											
											
											{/* Add Upload CV */}
											<Form.Group controlId="formFile" className="mb-3">
												<Form.Label>Upload CV</Form.Label>
												<Form.Control type="file" />
											</Form.Group>

											{/* Add Combo Butoon for policy&Terms and Consent */}
											<div className='form-group'>
												<Form.Check 
													type="switch"
													id="custom-switch"
													label="I agree to the Terms and conditions."
												/>
											</div>

											<div className="clearfix" style={{width: '45%'}}>
												<button type="button" className="btn-primary site-button btn-block">Submit </button>
											</div>
												
										</Form>
										
									</div>
								</div>
							</div>	
						</div>
					</div>				
				</Modal>
				{/*  Model END */}
			</>
		)
	}
}
export default Header;

