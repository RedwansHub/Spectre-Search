import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import CountUp from 'react-countup';
import IndexBanner from './../Element/IndexBanner';
import Jobcategories from './../Element/Jobcategories';
import Featureblog from './../Element/Featureblog';
import Jobsection from './../Element/Jobsection';
import Owltestimonial from './../Element/Owlblog1';

//Images
var bnr2 = require('./../../images/background/bg4.jpg');
var bnr3 = require('./../../images/lines.png');

function Homepage(){
	return(
		<div className="page-wraper">
			<Header />
			<div className="page-content">
				<IndexBanner />
				<div className="section-full job-categories content-inner-2 bg-white">
					<div className="container">
						<div className="section-head d-flex head-counter clearfix">
							<div className="mr-auto">
								<h2 className="m-b5">Browse our Jobs by Categories</h2>
							</div>
						</div>
						<Jobcategories />
					</div>
				</div>		
				<Jobsection />
				<div className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix" style={{backgroundImage: "url(" + bnr2 + ")"}}>
					<div className="container">
						<div className="section-head text-center text-white">
							<h2 className="m-b5">Testimonials</h2>
							<h5 className="fw4">Few words from candidates</h5>
						</div>
						<Owltestimonial />
					</div>
				</div>	
				
			</div>	
			<Footer />
		</div>		
	)
}
export default Homepage;