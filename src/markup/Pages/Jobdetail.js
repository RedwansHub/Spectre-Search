import React, { useEffect, useState } from 'react';
import {Link , useParams} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import { client } from '../../client';
import {AiOutlineLinkedin} from 'react-icons/ai';
import 'bootstrap-icons/font/bootstrap-icons.css';
//import {PortableText} from '@portabletext/react'
import BlockContent from '@sanity/block-content-to-react';


function Jobdetail(props){

	let { singleJob } = useParams();
	// singleJob = 'Software Engineer'

	const [jobInfo, setJobInfo] = useState([]);
	
	decodeURI(props);
	useEffect(() => {
		const query = '*[_type == "jobs"]';

		client.fetch(query)
		.then((jobInfo)  => setJobInfo(jobInfo))
		.catch(console.error)

	})
	return(
		<>
			<Header />	
			<div className="page-content bg-white">
				
				<div className="content-block">
					<div className="section-full content-inner-1">
						<div className="container">
							<div className="row">
								
								<div className="col-lg-4">
									<div className="sticky-top">
										<div className="row">
											<div className="col-lg-12 col-md-6">
												<div className="m-b30">
													<img src={require("./../../images/blog/grid/pic1.jpg")} alt="" />
												</div>
											</div>
											<div className="col-lg-12 col-md-6">
												<div className="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
													<h4 className="text-black font-weight-700 p-t10 m-b15">Job Details</h4>
													<ul>
														<li><i className="ti-location-pin"></i><strong className="font-weight-700 text-black">Location</strong><span className="text-black-light"> Glasgow </span></li>
														<li><i className="ti-money"></i><strong className="font-weight-700 text-black">Salary</strong> 50,000-60,000</li>
														<li><i className="ti-shield"></i><strong className="font-weight-700 text-black">Job Type</strong>Full-Time</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
									<div className="col-lg-8">
								{/*                   ' jobs.title === singleJob ' returns nothing  */}
								<p>I have no clue why this isn't working. The Job info is suppose appear here</p>
								{jobInfo.filter(jobs => jobs.title === 'Software Engineer').map((data, index) => (
									<div className="job-info-box" key={index}>
											
											<h3 className="m-t0 m-b10 font-weight-700 title-head">
												<Link to={"#"} className="text-secondry m-r30">{data.title}</Link>
											</h3>
											<div className='p-t20'></div>
											<h5 className="font-weight-600">Job Description</h5>
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											{/* <p className="p-t5">{data.desc}</p> */}
											<h5 className="font-weight-600">Job Role</h5>
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											<p>{data.requirement}</p>
											<h5 className="font-weight-600">Job Requirements</h5>
											{/* <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											<BlockContent 
												blocks={data.desc}  
												serializers={serializers}
												projectId="tzkhk12b"
												dataset="production"
											/> */}
											

											<div className='d-flex justify-content-between apply-btn' style={{display: 'flex'}}>
												<Link to={"/jobs-applied-job"} className="site-button ">Apply Now</Link>
												<Link to={"#"} className="site-button " style={{background: 'red'}}>Quick-Apply</Link>
												<Link to={"#"} className="site-button " style={{background: 'gray'}}>Apply With Linkedin <AiOutlineLinkedin /></Link>
												<Link to={"#"} className="site-button " style={{background: 'gray'}}>Save </Link>
												<Link to={"#"} className="site-button " style={{background: 'gray'}}>Share </Link>
											</div>
										</div>
								 ))} 
									</div>
								
							</div>
						</div>
					</div>
					
				</div>
			</div>		
			<Footer />
		</>		
	)
}

export default Jobdetail;

