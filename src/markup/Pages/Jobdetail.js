import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';
import { client } from '../../client';
import {AiOutlineLinkedin} from 'react-icons/ai';
import 'bootstrap-icons/font/bootstrap-icons.css';
//import {PortableText} from '@portabletext/react'
//import BlockContent from '@sanity/block-content-to-react';

var bnr =require('./../../images/banner/bnr1.jpg');

function Jobdetail(job, jobs){

	const { title, location, salary, jobType, desc, requirement, image } = job;
	const [index, setIndex] = useState(0);

	const [jobInfo, setJobInfo] = useState([]);
	const [teamData, setTeam] = useState([]);

	useEffect(() => {
		const query = '*[_type == "jobs"]';
		const teamQuery = '*[_type == "team"]';

		client.fetch(query)
		.then((jobInfo)  => setJobInfo(jobInfo))
		.catch(console.error)

		client.fetch(teamQuery)
		.then((data2) => setTeam(data2))
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
														<li><i className="ti-money"></i><strong className="font-weight-700 text-black">Salary</strong> £50,000-60,000</li>
														<li><i className="ti-shield"></i><strong className="font-weight-700 text-black">Job Type</strong>Full-Time</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
									<div className="col-lg-8">
								{jobInfo.map((data, index) => (
									<div className="job-info-box">
											<h3 className="m-t0 m-b10 font-weight-700 title-head">
												<Link to={"#"} className="text-secondry m-r30">{data.title}</Link>
											</h3>
											<div className='p-t20'></div>
											<h5 className="font-weight-600">Job Description</h5>
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											<p className="p-t5">{data.desc}</p>
											<h5 className="font-weight-600">Job Role</h5>
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											<p>{data.requirement}</p>
											<h5 className="font-weight-600">Job Requirements</h5>
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											{/* <BlockContent blocks={item.body}  /> */}
											<ul className="no-round">
												{/* Hard coded the requirement, dont woryy about this */}
												
												<li>Full website development.</li>
												<li>Design client-side and server-side architecture.</li>
												<li>Build the front-end of applications through appealing visual design</li>
												<li>Develop and manage well-functioning databases and applications.</li>
												<li>Write effective APIs.</li>
												<li>Test software to ensure responsiveness and efficiency.</li>
												<li>Troubleshoot, debug and upgrade software.</li>
												<li>Create security and data protection settings.</li>
												<li>Write effective APIs.</li>
											</ul >
											<div className='d-flex justify-content-between apply-btn' style={{display: 'flex'}}>
												<Link to={"/jobs-applied-job"} className="site-button ">Apply Now</Link>
												<Link to={"#"} className="site-button " style={{background: 'red'}}>Quick-Apply</Link>
												<Link to={"#"} className="site-button " style={{background: 'gray'}}>Apply With Linkedin <i class="bi bi-linkedin"></i></Link>
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

export const getStaticPaths = async () => {
	const query = `*[_type == "jobs"]`
}
export default Jobdetail;


{/*
				<div className="section-full content-inner">
						<div className="container">
							<div className="row">
								{blogGrid.map((item,index)=>(
									<div className="col-xl-3 col-lg-6 col-md-6" key={index}>
										<div className="m-b30 blog-grid">
											<div className="dez-post-media dez-img-effect "> <Link to={"/blog-details"}><img src={item.image} alt="" /></Link> </div>
											<div className="dez-info p-a20 border-1">
												<div className="dez-post-title ">
													<h5 className="post-title"><Link to={"/blog-details"}>Title of blog post</Link></h5>
												</div>
												<div className="dez-post-meta ">
													<ul>
														<li className="post-date"> <i className="ti-location-pin"></i> London </li>
														<li className="post-author"><i className="ti-user"></i>By <Link to={"#"}>Jone</Link> </li>
													</ul>
												</div>
												<div className="dez-post-text">
													 <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
												</div>
											    <div className="dez-post-readmore"> 
													<Link to={"/blog-details"} title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></Link>
												</div>
											</div>
										</div>
									</div>
								))}	
							</div>
						</div>
					</div>
*/}