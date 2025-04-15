interface experience {
    title: string;
    company: string;
    location: string;
    timeframe: string;
    description?: string;
}

interface education {
    degree: string;
    school: string;
    location: string;
    timeframe: string;
    description?: string;
}

export const experiences: experience[] = [
    {
        title: "Administrative and Data Entry Clerk",
        company: "Plan Managers",
        location: "Mount Waverley, VIC",
        timeframe: "August 2023 - Present",
        description: "Processing invoices for Australians in the National Disability Insurance Scheme."
    },
    {
        title: "Data Engineer Intern",
        company: "Origin Energy",
        location: "Melbourne, VIC",
        timeframe: "July - December 2022",
        description: "Automated the retrieval and storage of 10,000+ images to support a machine learning model with Python, Docker, and Amazon S3. Led a re-design and implementation of an in-house React.js web app UI/UX.",
    },
    {
        title: "General Committee Member",
        company: "Vietnamese Students' Association",
        location: "Melbourne, VIC",
        timeframe: "March 2022 - December 2023",
        description: "Coordinated with committee members to plan and host cultural events, celebrating Vietnamese-Australian identity.",
    },
]

export const educations: education[] = [
    {
        degree: "Bachelor of Computer Science",
        school: "Monash University",
        location: "Clayton Campus",
        timeframe: "Graduated December 2024",
        description: "Specialised in Data Science. Awarded the Monash IT IBL Scholarship.",
    },
    {
        degree: "High School Degree",
        school: "Melbourne High School",
        location: "South Yarra, VIC",
        timeframe: "Graduated 2020",
    },
]