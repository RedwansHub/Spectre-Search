import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { urlFor, client } from '../../client';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';
import Jobfindbox from './../Element/Jobfindbox';
import Accordsidebar from './../Element/Accordsidebar';

var bnr = require('./../../images/banner/bnr1.jpg');

const jobBlog = [
	{
		title : 'Digital Marketing Executive',
	},
	{
		title : 'Digital Marketing Executive',
	},
	{
		title : 'Digital Marketing Executive',
	},
	{
		title : 'Digital Marketing Executive',
	},
	{
		title : 'Digital Marketing Executive',
	},
	{
		title : 'Digital Marketing Executive',
	},
]

function Browsejobfiltergrid(){

	const [jobInfo, setJobInfo] = useState([]);

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
			<div style={{height: '70px'}}></div>
				<Jobfindbox />
				<div className="content-block">
					<div className="section-full browse-job p-b50">
						<div className="container">
							<div className="row">
								<Accordsidebar />
								<div className="col-xl-9 col-lg-8 col-md-7">
									<div className="job-bx-title clearfix">
										<h5 className="font-weight-700 pull-left text-uppercase">2269 Jobs Found</h5>
										<div className="float-right">
											<span className="select-title">Sort by freshness</span>
											<select className="custom-btn">
												<option>Last 2 Months</option>
												<option>Last Months</option>
												<option>Last Weeks</option>
												<option>Last 3 Days</option>
											</select>
											<div className="float-right p-tb5 p-r10">
												<Link to={"/browse-job-filter-list"} className="p-lr5"><i className="fa fa-th-list"></i></Link>
												<Link to={"/browse-job-filter-grid"} className="p-lr5"><i className="fa fa-th"></i></Link>
											</div>
										</div>
									</div>
									<ul className="post-job-bx browse-job-grid row">
										{jobInfo.map((item,index) => (
											<li className="col-lg-6 col-md-12" key={index} >
												<div className="post-bx ">
														<div className='m-auto' >	
															<h5><Link to={"/job-detail"}>{item.title}</Link></h5>
														</div>
													<div className="d-flex m-b20 p-t50">
														<div className="job-post-info">
															<ul>
																<li><i className="fa fa-map-marker"></i>{item.location}</li>
																<li><i className="fa fa-bookmark-o"></i> {item.jobType}</li>
																<br />
																<li><i className="fa fa-eur"></i> {item.salary}</li>
															</ul>
														</div>
													</div>
													<div className="d-flex">
														<div className="detailsbtn2">
															<Link to={"#"}>
																<img src={urlFor(item.image).width(65).url()} alt="" />
															</Link>
															<Link to={'#'} className="name">{item.recruiter}</Link>
															<Link to={'/job-detail'} className="site-button">See details</Link>
														</div>
														<div className="">
														</div>
													</div>
													
												</div>
											</li>
										))}	
										
									</ul>
									<div className="pagination-bx float-right m-t30">
										<ul className="pagination">
											<li className="previous"><Link to={''}><i className="ti-arrow-left"></i> Prev</Link></li>
											<li className="active"><Link to={''}>1</Link></li>
											<li><Link to={''}>2</Link></li>
											<li><Link to={''}>3</Link></li>
											<li className="next"><Link to={''}>Next <i className="ti-arrow-right"></i></Link></li>
										</ul>
									</div>
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
export default Browsejobfiltergrid;