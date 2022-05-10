export const navMenus = {
    about: [
        // {title: 'About ' + process.env.REACT_APP_SITE_NAME, path: '/about', cName: 'dropdown-link'},
        {title: 'Welcome Address', path: '/about/welcome-address', cName: 'dropdown-link'},
        {title: 'Parents’ Code-of-Conduct', path: '/about/parents-code-of-conduct', cName: 'dropdown-link'},
        {title: 'History of the School', path: '/about/history', cName: 'dropdown-link'},
        {title: 'Contact Us', path: '/about/contact-us', cName: 'dropdown-link'},
        {title: 'About Evergreen', path: '/about/about-evergreen', cName: 'dropdown-link'},

    ],
    admission: [
        // {
        //     title: 'Academics',
        //     description: `At ${process.env.REACT_APP_SITE_NAME}, we aim to provide an innovative learning program that promotes our values of Respect, Diversity, Sustainability and Excellence.`,
        //     path: '/academic',
        //     cName: 'dropdown-link',
        // },
        {title: 'How to Apply', path: '/admission/how_to_apply', cName: 'dropdown-link', description: '', },
        {title: 'Apply Online', path: '/admission/apply-online', cName: 'dropdown-link'},
        {title: 'International Application', path: '/admission/international-application', cName: 'dropdown-link'},
        {title: 'Tuitions & Fees', path: '/admission/tuition_&_fees', cName: 'dropdown-link'},

   
    ],
    academics: [
        // {
        //     title: 'Welcome',
        //     description: `We are delighted that you are interested in applying to ${process.env.REACT_APP_SITE_NAME}`,
        //     path: '/learn',
        //     cName: 'dropdown-link'
        // },
        {title: 'Creche', path: '/academics/creche', cName: 'dropdown-link'},
        {title: 'Higher Primary', path: '/academics/higher-primary', cName: 'dropdown-link'},
        {title: 'Junior Primary', path: '/academics/junior-primary', cName: 'dropdown-link'},
        {title: 'Secondary', path: '/academics/secondary', cName: 'dropdown-link'},

    ],
    school: [
        {title: 'Curriculum', path: '/school/curriculum', cName: 'dropdown-link'},
        {title: 'Academic Structure', path: '/school/academic-structure', cName: 'dropdown-link'},
        {title: 'Academic Probation', path: '/school/academic-probation', cName: 'dropdown-link'},
    ],
    news: [
        {title: 'school news', path: '/news/school_news', cName: 'dropdown-link'},
        {title: 'school activities', path: '/news/school_activities', cName: 'dropdown-link'},
    ],
}

export default navMenus;
