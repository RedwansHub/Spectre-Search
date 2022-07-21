export default {
    name: 'jobs',
    title: 'Jobs',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Position Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 90,
            },
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'salary',
            title: 'Salary',
            type: 'string',
        },
        {
            name: 'jobType',
            title: 'Job Type',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'string',
            // of: [
            //     { 
            //         type: 'block'
            //     }
            // ]
        },
        {
            name: 'requirement',
            title: 'Requirements',
            type: 'string',
            // of: [
            //     { 
            //         type: 'block'
            //     }
            // ]
        },
        {
            name: 'company',
            title: 'Company Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Company Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }, 
        {
            name: 'recruiter',
            title: 'Recruiter Name',
            type: 'string',
        },     
    ]
}