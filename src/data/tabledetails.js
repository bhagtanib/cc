export const workExperience = {
    header: "Work Experience",
    heading: ["workId", "companyName", "industry", "position", "startDate", "endDate", "yearsWorked", "skillsLearned", "contributionsMade" ],
    schema: {
        'workId (PK)': "int",
        companyName: "varchar",
        industry: "varchar",
        position: "varchar",
        startDate: "date",
        endDate:  "date",
        yearsWorked: "decimal",
        skillsLearned: "varchar",
        contributionsMade: "varchar",
    },
    rows: [{
        workId: "13921",
        companyName: "Treasury4",
        industry: "Fintech",
        position: "Data Analytics Engineer",
        startDate: "11/15/2021",
        endDate:  "06",
        yearsWorked: "2.5",
        skillsLearned: "SQL, ETL, Python, GIT, DevOps, Azure Cloud, Data Factory, Snowflake, Power BI, MS SQL Server, Sigma Computing, Boomi, DBT",
        Link: "https://chatgpt.com/?oai-dm=1"
    },
    {
        workId: "10876",
        companyName: "Medcurity",
        industry: "Healthcare",
        position: "Data Analyst Intern",
        startDate: "15 Nov 2021",
        endDate:  "Present",
        yearsWorked: "0.3",
        skillsLearned: "SQL, Python, AWS Cloud",
        Link: ""
    },
    {
        workId: "12643",
        companyName: "Whitworth University",
        industry: "Education",
        position: "Data Analyst",
        startDate: "15 Nov 2021",
        endDate:  "Present",
        yearsWorked: "1",
        skillsLearned: "Tableau, Python",
        Link: " "
    },
    {
        workId: "17489",
        companyName: "Whitworth University",
        industry: "Education",
        position: "Data Science Teaching Assistant",
        startDate: "15 Nov 2021",
        endDate:  "Present",
        yearsWorked: "1",
        skillsLearned: "Neural Nets",
        Link: " "
    },
    {
        workId: "11527",
        companyName: "Whitworth University",
        industry: "Education",
        position: "Career Peer Coach (Leadership)",
        startDate: "15 Nov 2021",
        endDate:  "Present",
        yearsWorked: "1",
        skillsLearned: "Leadership",
        Link: " "
    }
]
}

export const certificate = {
    header: "Certification",
    heading: ["certificationId", "certificationName", "companyName", "skillsLearned", "certificationLink" ],
    schema: {
        'certId (PK)': "int",
        companyName: "varchar",
        certificationName: "varchar",
        skillsLearned: "varchar",
        certificationLink: "varchar",

    },
    rows: [{
        certificationId: "14329",
        certificationName: "Advanced Data Modeling",
        companyName: "Meta",
        skillsLearned: "Data Modeling, ETL, Data Warehousing",
        Link: "https://www.coursera.org/account/accomplishments/verify/7HACYEXMN866"
    },
    {
        certificationId: "10257",
        certificationName: "SQL for Data Science",
        companyName: "University of California, Davis",
        skillsLearned: "SQL, Data Analysis",
        Link: "https://www.coursera.org/account/accomplishments/verify/2UNLYX6PUG6E"
    },
    {
        certificationId: "19843",
        certificationName: "The Path to Insights: Data Models and Pipelines",
        companyName: "Google",
        skillsLearned: "ETL, Data Transformation, Management, and Optimization",
        Link: "https://www.coursera.org/account/accomplishments/verify/W5S2TLEMCVKF"
    },
    {
        certificationId: "17685",
        certificationName: "Python for Data Science",
        companyName: "Dataquest.io",
        skillsLearned: "Python",
        Link: "https://app.dataquest.io/view_cert/34F37PP97D3WT7Q0Q1G7/"
    },
    {
        certificationId: "19402",
        certificationName: "Healthcare Data Models",
        companyName: "University of California, Davis",
        skillsLearned: "Data Modeling in Healthcare",
        Link: "15 Nov 2021"
    },
    {
        certificationId: "12376",
        certificationName: "Pandas and Numpy",
        companyName: "Dataquest.io",
        skillsLearned: "Python, Pandas, Numpy, Data Manipulation, Tranformation, and Analysis",
        Link: "https://app.dataquest.io/view_cert/J8F43EWL9LDJGPI70LEI/"
    },
    {
        certificationId: "18371",
        certificationName: "Introduction to Microsoft Excel",
        companyName: "Coursera",
        skillsLearned: "Excel, VLOOKUP, conditional formatting, Pivot tables",
        Link: "https://www.coursera.org/account/accomplishments/certificate/PZALXDVAKY34"
    }
]
}
export const projects = {
    header: "Project",
    heading: ["projectId", "projectName", "skillsLearned", "projectLink" ],
    schema: {
        'projectId (PK)': "int",
        projectName: "varchar",
        skillsLearned: "varchar",
        projectLink: "varchar"
    },
    rows: [{
        ProjectId: "199998",
        projectName: "",
        skillsLearned: "",
        projectLink:  ""
    },

]
}
export const factsTable = {
    header: "Analytics",
    heading: ["analyticsId", "workId", "projectId", "analyticsLink" ],  
    schema: {
        'analyticsId (PK)': "int",
        'workId (FK)': "int",
        'projectId (FK)': "int",
        analyticsLink: "varchar",

    }, 
    rows: [{
        'analyticsId (PK)': "int",
        'workId (FK)': "int",
        'projectId (FK)': "int",
        analyticsLink: "varchar",
    },
    {
        'analyticsId (PK)': "int",
        'workId (FK)': "int",
        'projectId (FK)': "int",
        analyticsLink: "varchar",
    },
    {
        'analyticsId (PK)': "int",
        'workId (FK)': "int",
        'projectId (FK)': "int",
        analyticsLink: "varchar",
    },
    {
        'analyticsId (PK)': "int",
        'workId (FK)': "int",
        'projectId (FK)': "int",
        analyticsLink: "varchar",
    },
    {
        'analyticsId (PK)': "int",
        'workId (FK)': "int",
        'projectId (FK)': "int",
        analyticsLink: "varchar",
    },
    {
        'analyticsId (PK)': "int",
        'workId (FK)': "int",
        'projectId (FK)': "int",
        analyticsLink: "varchar",
    }
    
]
}