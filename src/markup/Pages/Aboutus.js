import React, { useEffect, useState } from 'react';
import { urlFor, client } from './../../client';
//import blockContent from '@sanity/block-content-to-react';
//import {Link} from 'react-router-dom';

// import { urlFor } from '../lib/client'

import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

import Client1 from '../../images/clients/client1.png';
import Client2 from '../../images/clients/client2.png';
import Client3 from '../../images/clients/client3.png';
import Client4 from '../../images/clients/client4.png';
import Client5 from '../../images/clients/client5.png';
import Client6 from '../../images/clients/client6.png';


function Aboutus(){

  const [aboutData, setAbout] = useState([]);
  const [teamData, setTeam] = useState([]);


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
				<div className="dez-bnr-inr overlay-black-middle">
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

				{/* Start Clients Area */}
							<div className='team'>
								<h2 className="m-b25">Our Clients</h2>
							</div>
								<div className="client-logo-section">
									<div className="container">
										<div className="client-logo-wrapper col-lg-12 col-md-12 col-sm-12">
											<div className="client-logo-carousel d-flex align-items-center justify-content-between">
												<div className="client-logo">
													<img src={Client1} alt="#"/>
												</div>
												<div className="client-logo">
													<img src={Client2} alt="#"/>
												</div>
												<div className="client-logo">
													<img src={Client3} alt="#"/>
												</div>
												<div className="client-logo">
													<img src={Client4} alt="#"/>
												</div>
												<div className="client-logo">
													<img src={Client5} alt="#"/>
												</div>
												<div className="client-logo">
													<img src={Client6} alt="#"/>
												</div>
												
											</div>
										</div>
									</div>
								</div>
					
					{/* End Clients Area */}				
					
						</div>
					</div>						
				</div>
			</div>
			<Footer />
		</div>	
	)
	
}
export default Aboutus;
