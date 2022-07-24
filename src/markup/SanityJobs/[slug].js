import React, { useState } from 'react'

const JobDetails = ({ job, jobs}) => {
  const { title, slug, location, salary, 
          jobType, desc, requ, company, 
          image, recruiter  } = job;

  const [index, setIndex] = useState(0);
  
  return (
    <div>This is Job Slug</div>
  )}

export default slug