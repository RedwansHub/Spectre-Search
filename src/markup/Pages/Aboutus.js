import React, { useEffect, useState } from 'react';
import { urlFor, client } from './../../client';
//import blockContent from '@sanity/block-content-to-react';
import {Link} from 'react-router-dom';

// import { urlFor } from '../lib/client'

import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Latestblogowl from './../Element/Owlblog2';

var bnr1 = require('./../../images/banner/bnr1.jpg');
var bnr2 = require('./../../images/background/bg4.jpg');

function Aboutus(){

  const [aboutData, setAbout] = useState([]);
  const [teamData, setTeam] = useState([]);
  const [img, setImg] = useState([false])
  
  const checkImage = (im) => {
	
  }

  useEffect(() => {
    const aboutQuery = '*[_type == "about"]'; 
	const teamQuery = '*[_type == "team"]';
    
	client.fetch(aboutQuery)
    .then((data) => setAbout(data))
    .catch(console.error)

	
	client.fetch(teamQuery)
	.then((data2) => setTeam(data2))
	.catch(console.error)

  }, []); 

	return(
		<div className="page-wraper">		
			<Header />	
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr1 + ")"}}>
					<div className="container">
						<div className="dez-bnr-inr-entry">
							<h1 className="text-white">About Us</h1>
						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full content-inner overlay-white-middle">
						<div className="container">
							<div className=''>
								{aboutData.map((data, index) => ( 
									<div className="row align-items-center m-b50">
										<div className="first-text col-md-12 col-lg-6 m-b20 " key={data.title + index}>
											<h3 className="fw4">{data.title}</h3>
											<p className="m-b15">{data.body}</p>
											
											{/* <BlockContent blocks={data.body}
															projectId="tzkhk12b"
															dataset="production"/>
											*/}
										</div>
										<div className="col-md-12 col-lg-6">
											
										 <img src={urlFor(data.image).width(500).url()} alt=""/>
											
										</div>
									</div>
								))}
							</div>
							<div className='team'>
								<h2 className="m-b5">Our Team</h2>
							</div>
							<div className="row">
								{teamData.map((data2, index) => (
								
									<div className="teamBox col-lg-3 col-md-4 col-sm-12 m-b30">
										<div className="icon-bx-wraper p-a30 center bg-gray radius-sm"  key={data2.name + index}>
											<div className='Team-image'>
												<img src={urlFor(data2.image).width(300).url()} alt='Nabil'/>
											</div>
											<div className="icon-content">
												<h5 className="dlab-tilte text-uppercase">{data2.name}</h5>
												<p>{data2.title}</p>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="row align-items-center m-b50 m-t50">
								<div className="col-md-12 col-lg-6 m-b20 ">
									<h2 className="m-b25">What makes us different</h2>
									<p className="m-b15">Our size is our strength. We’re small enough to care but big enough to make an impact. 
														Genuine passion and enthusiasm for what we do, combined with a deep understanding of our 
														sectors and our ability to respond and adapt swiftly to clients’ needs is what makes us unique.</p>
									
									<p className=''>Our success is our people. We pride ourselves on our commitment to our most important assets – our people – 
										through recognition and rewards. We take care of them so that they can take care of you.</p>
									
								</div>
								<div className="col-md-12 col-lg-6">
								<p className="m-b15 m-t10">Our core values underpin everything we do and are reflected by our people. Respect, determination, teamwork, integrity, 
													understanding and fun are central to how we work with each other and our clients and candidates. 
													Our consultants take the time to understand your needs and are dedicated to guiding and supporting you through the recruitment process.</p>
									
									
								<p className="m-b15">Our relationships set us apart. We work closely with some of the largest organisations in further 
													education, housing, social care, charity and more. Our clients trust us with exciting and often exclusive roles, 
													so you can be confident that you’ll find an opportunity that matches your skill and ambition.</p>
									
									
								</div>
							</div>					
						</div>
					</div>						
					<div className="section-full content-inner-2 call-to-action overlay-black-dark text-white text-center bg-img-fix" style={{backgroundImage:"url(" + bnr2 + ")"}}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<h2 className="m-b10">Make a Difference with Your Online Resume!</h2>
									<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									<Link to={"/register-2"} className="site-button m-t20 outline outline-2 radius-xl">Create an Account</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="section-full content-inner-2 overlay-white-middle">
						<div className="container">
							<div className="section-head text-black text-center">
								<h2 className="text-uppercase m-b0">Our Latest Blog</h2>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
							</div>
							<Latestblogowl />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>	
	)
	
}
export default Aboutus;

{/*
	<div className="teamBox col-lg-3 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
									<div className='Team-image'>
											<img src={Syam} alt='Syam'/>
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Syam</h5>
											<p>Cheif Operating Officer</p>
										</div>
									</div>
								</div>
								<div className="teamBox col-lg-3 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
									<div className='Team-image'>
											<img src={Joy} alt='Joy'/>
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Joy</h5>
											<p>Multi Country Manager</p>
										</div>
									</div>
								</div>
								<div className="teamBox col-lg-3 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
									<div className='Team-image'>
											<img src={Oliver} alt='Oliver'/>
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Oliver</h5>
											<p>Cheif Strategy Officer</p>
										</div>
									</div>
								</div>
								<div className="teamBox col-lg-3 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
									<div className='Team-image'>
											<img src={Sridevi} alt='Sridevi'/>
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Sridevi</h5>
											<p>MD - UK</p>
										</div>
									</div>
								</div>
								<div className="teamBox col-lg-3 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
									<div className='Team-image'>
											<img src={Satya} alt='Satya'/>
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Satya</h5>
											<p>CEO - India</p>
										</div>
									</div>
								</div>
								<div className="teamBox col-lg-3 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
									<div className='Team-image'>
											<img src={Martin} alt='Martin'/>
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Martin</h5>
											<p>Cheif Training & Development Officer</p>
										</div>
									</div>
								</div>

*/}