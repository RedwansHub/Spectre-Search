import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import searchbar from './Layout/Searchbar';



import Homepage from './Pages/Homepage1';
import InnerHomepage from './Pages/InnerHomepage';

import Jobprofile from './Pages/Jobprofile';
import Jobmyresume from './Pages/Jobmyresume';
import Jobsappliedjob from './Pages/Jobsappliedjob';
import Jobsalert from './Pages/Jobsalert';
import Jobsavedjobs from './Pages/Jobsavedjobs';
import Jobcvmanager from './Pages/Jobcvmanager';
import Changepasswordpage from './Pages/Changepasswordpage';

import Componypostjobs from './Pages/Componypostjobs';
import Companymanage from './Pages/Companymanage';
import Browsecandidates from './Pages/Browsecandidates';

import Browsejobfilterlist from './Pages/Browsejobfilterlist';
import Browsejobfiltergrid from './Pages/Browsejobfiltergrid';
import Jobdetail from './Pages/Jobdetail';

import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';
import Register from './Pages/Register1';
import Login from './Pages/Loginpage1';
import Login2 from './Pages/Loginpage2';

import ScrollToTop from './Element/ScrollToTop';
import Error404 from './Pages/Error404'

const Markup2 = () => {
  return (
    <>
        <div className='page-wrapper'>
            <Switch>
                <Route path='/' exact component={Homepage}/>
                <Route path='/LoggedIn' exact component={Homepage}/>
                {/* <Route path='/searchbar' exact component={searchbar}/> */}

            {/* ---- CANDIDATES ---  */}
                <Route path='/jobs-profile' exact component={Jobprofile} />
                <Route path='/jobs-my-resume' exact component={Jobmyresume} />
                <Route path='/jobs-applied-job' exact component={Jobsappliedjob} />
                <Route path='/jobs-alerts' exact component={Jobsalert} />
                <Route path='/jobs-saved-jobs' exact component={Jobsavedjobs} />
                <Route path='/jobs-cv-manager' exact component={Jobcvmanager} />
                <Route path='/jobs-change-password' exact component={Changepasswordpage} />

            {/* ---- EMPLOYERS ---  */}
                {/* <Route path='/company-post-jobs' exact component={Componypostjobs} />
                <Route path='/company-manage-job' exact component={Companymanage} />
                <Route path='/browse-candidates' exact component={Browsecandidates} /> */}
                <Route path='/company-post-jobs' exact component={Error404} />
                <Route path='/company-manage-job' exact component={Error404} />
                <Route path='/browse-candidates' exact component={Error404} /> 

            {/* ---- Jobs Browsing ---  */}
                <Route path='/browse-job' exact component={Browsejobfilterlist} />
				<Route path='/browse-job-filter-grid' exact component={Browsejobfiltergrid} />
				
                <Route path='/job-detail' exact component={Jobdetail} />
				
                <Route path='/about-us' exact component={Aboutus} />
                <Route path='/contact' exact component={Contact} />

                <Route path='/register' exact component={Register} />
                <Route path='/login' exact component={Login} />
                <Route path='/login2' exact component={Login2} />



            </Switch>
        </div>
     <ScrollToTop />
    </>
  )
}



export default Markup2