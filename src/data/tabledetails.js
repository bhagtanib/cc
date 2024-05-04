export const workExperience = {
    header: "Work Experience",
    heading: ["workId", "companyName", "industry", "position", "startDate", "endDate", "yearsWorked", "skillsLearned", "contributionsMade" ],
    schema: {
        workId: "uniqueidentifier",
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
        workId: "c6181e51-3d10-4f8e-b0e4-7c393b775a28",
        companyName: "Treasury4",
        industry: "Fintech",
        position: "Data Analytics Engineer",
        startDate: "11/15/2021",
        endDate:  "06",
        yearsWorked: "2.5",
        skillsLearned: "SQL, ETL, Python, GIT, DevOps, Azure Cloud, Data Factory, Snowflake, Power BI, MS SQL Server, Sigma Computing, Boomi, DBT",
        contributionsMade: ""
    },
    {
        workId: "f2cc0cf1-0bf6-4e67-9c13-e4a8bb8b6d47",
        companyName: "Medcurity",
        industry: "Healthcare",
        position: "Data Analyst Intern",
        startDate: "15 Nov 2021",
        endDate:  "Present",
        yearsWorked: "0.3",
        skillsLearned: "SQL, Python, AWS Cloud",
        contributionsMade: ""
    },
    {
        workId: "a3f9e0b3-7c9d-4f46-bd08-3a4c73488972",
        companyName: "Whitworth University",
        industry: "Education",
        position: "Data Analyst",
        startDate: "15 Nov 2021",
        endDate:  "Present",
        yearsWorked: "1",
        skillsLearned: "Tableau, Python",
        contributionsMade: " "
    },
    {
        workId: "9c2e145f-781f-4b36-a831-894722f62c72",
        companyName: "Whitworth University",
        industry: "Education",
        position: "Data Science Teaching Assistant",
        startDate: "15 Nov 2021",
        endDate:  "Present",
        yearsWorked: "1",
        skillsLearned: "Neural Nets",
        contributionsMade: " "
    },
    {
        workId: "ee2a10e9-2e56-4b52-b507-0a0b1baf8d9f",
        companyName: "Whitworth University",
        industry: "Education",
        position: "Career Peer Coach (Leadership)",
        startDate: "15 Nov 2021",
        endDate:  "Present",
        yearsWorked: "1",
        skillsLearned: "Leadership",
        contributionsMade: " "
    }
]
}

export const certificate = {
    header: "Certification",
    heading: ["certificationId", "companyName", "Link" ],
    rows: [{
        certificationId: "123",
        companyName: "Google",
        Link: "https://google.com"
    },
    {
        certificationId: "456",
        companyName: "Microsoft",
        Link: "Add link here"
    },
    {
        certificationId: "789",
        companyName: "Meta",
        Link: "Add link here"
    },
    {
        certificationId: "abhe2",
        companyName: "University of California, Davis",
        Link: "Add link here"
    },
    {
        certificationId: "abhe2",
        companyName: "IBM",
        Link: "15 Nov 2021"
    },
    {
        certificationId: "abhe2",
        companyName: "IBM",
        Link: "15 Nov 2021"
    }
]
}
export const projects = {
    header: "Project",
    heading: ["projectId", "CompanyName", "StartDate", "EndDate" ],
    rows: [{
        ProjectId: "abhe2",
        companyName: "Treasury4",
        startDate: "15 Nov 2021",
        EndDate:  "Present"
    },

]
}
export const factsTable = {
    header: "Analytics",
    heading: ["FactsId", "CompanyName", "StartDate", "EndDate" ],   
    rows: [{
        FactsId: "ceduicw",
        companyName: "Treasury4",
        startDate: "25 Mar 2022",
        EndDate:  "Present"
    },
    
]
}