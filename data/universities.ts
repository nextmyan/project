// This file contains the comprehensive university data
// In a real application, this would likely come from a database

export const universities = [
  {
    id: 1,
    name: "Harvard University",
    country: "United States",
    flag: "https://flagpedia.net/data/flags/w580/us.png",
    image:
      "https://images.unsplash.com/photo-1605806616949-59175deb4b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    description:
      "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636, it is the oldest institution of higher learning in the United States. Harvard consistently ranks among the top universities globally and is known for its academic excellence, influential alumni, and significant research contributions.",
    ranking: 1,
    location: "Cambridge, Massachusetts, USA",
    foundedYear: 1636,
    studentPopulation: 23000,
    internationalStudents: "24%",
    facultyToStudentRatio: "1:7",
    campusSize: "5,076 acres",
    tuition: "$51,925",
    applicationFee: "$75",
    acceptanceRate: "4%",
    programs: [
      {
        name: "Computer Science",
        degree: "Bachelor of Arts",
        duration: "4 years",
        tuition: "$51,925 per year",
        description:
          "The Computer Science program at Harvard provides students with a strong foundation in the mathematical and computational foundations of computing, preparing them for careers in technology and research.",
      },
      {
        name: "Business Administration",
        degree: "Master of Business Administration (MBA)",
        duration: "2 years",
        tuition: "$73,440 per year",
        description:
          "Harvard Business School's MBA program is designed to develop outstanding business leaders who make a difference in the world, with a focus on leadership, global perspective, and innovation.",
      },
      {
        name: "Law",
        degree: "Juris Doctor (JD)",
        duration: "3 years",
        tuition: "$67,081 per year",
        description:
          "Harvard Law School offers a comprehensive legal education, preparing students for leadership roles in law firms, public service, business, and government.",
      },
      {
        name: "Medicine",
        degree: "Doctor of Medicine (MD)",
        duration: "4 years",
        tuition: "$65,203 per year",
        description:
          "Harvard Medical School's MD program combines rigorous scientific training with early clinical experience, preparing students to become leaders in medicine and healthcare.",
      },
      {
        name: "Engineering Sciences",
        degree: "Bachelor of Science",
        duration: "4 years",
        tuition: "$51,925 per year",
        description:
          "The Engineering Sciences program provides a broad foundation in engineering principles and applications, with opportunities for specialization in areas such as bioengineering, environmental science, and mechanical engineering.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Common Application or Coalition Application",
        "Harvard College Questions for the Common Application or Coalition Application Harvard supplement",
        "ACT or SAT (optional for 2023-2024)",
        "2 SAT Subject Tests (optional)",
        "School Report and high school transcript",
        "2 Teacher Reports",
        "Midyear School Report",
        "Final School Report",
        "Application fee ($75) or fee waiver",
      ],
      graduate: [
        "Online application",
        "Statement of purpose",
        "Letters of recommendation (typically 3)",
        "Transcripts from all post-secondary institutions",
        "GRE or GMAT scores (varies by program)",
        "TOEFL or IELTS for international students",
        "Resume/CV",
        "Application fee (varies by program)",
      ],
    },
    scholarships: [
      {
        name: "Harvard University Scholarship",
        amount: "Full tuition",
        eligibility: "Based on financial need and academic merit",
        description:
          "Harvard's financial aid program ensures that all admitted students can afford to attend, regardless of their financial circumstances.",
      },
      {
        name: "Harvard Faculty Scholarship",
        amount: "$10,000 - $25,000 per year",
        eligibility: "Outstanding academic achievement",
        description:
          "Merit-based scholarships awarded to students who demonstrate exceptional academic potential and leadership qualities.",
      },
      {
        name: "International Student Scholarship",
        amount: "Varies",
        eligibility: "International students with financial need",
        description:
          "Harvard is committed to making education accessible to talented students from around the world, regardless of their financial circumstances.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        earlyAction: "November 1",
        regularDecision: "January 1",
      },
      graduate: {
        round1: "September 7",
        round2: "January 4",
        round3: "April 27",
      },
    },
    facilities: [
      "Harvard Library (largest academic library in the world)",
      "Harvard Art Museums",
      "Harvard Museum of Natural History",
      "State-of-the-art research laboratories",
      "Athletic facilities including the Harvard Stadium",
      "Student housing and dining halls",
      "Harvard Innovation Labs",
    ],
    notableAlumni: [
      "Barack Obama (44th President of the United States)",
      "Mark Zuckerberg (Founder of Facebook)",
      "Bill Gates (Co-founder of Microsoft)",
      "John F. Kennedy (35th President of the United States)",
      "Natalie Portman (Academy Award-winning actress)",
    ],
  },
  {
    id: 2,
    name: "University of Oxford",
    country: "United Kingdom",
    flag: "https://flagpedia.net/data/flags/w580/gb.png",
    image:
      "https://images.unsplash.com/photo-1580492516014-4a28533b3f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "https://images.unsplash.com/photo-1580492516014-4a28533b3f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    description:
      "The University of Oxford is a collegiate research university in Oxford, England. It is the oldest university in the English-speaking world and the world's second-oldest university in continuous operation. Oxford is consistently ranked among the world's top universities and is known for its tutorial-based teaching method and rich academic tradition.",
    ranking: 2,
    location: "Oxford, England, UK",
    foundedYear: 1096,
    studentPopulation: 24000,
    internationalStudents: "41%",
    facultyToStudentRatio: "1:11",
    campusSize: "Multiple colleges across Oxford",
    tuition: "£26,770 - £37,510",
    applicationFee: "£75",
    acceptanceRate: "17%",
    programs: [
      {
        name: "Philosophy, Politics and Economics (PPE)",
        degree: "Bachelor of Arts",
        duration: "3 years",
        tuition: "£28,370 per year",
        description:
          "Oxford's famous PPE program provides a rigorous foundation in three complementary disciplines, preparing students for careers in politics, journalism, and business.",
      },
      {
        name: "Computer Science",
        degree: "Master of Science",
        duration: "1 year",
        tuition: "£34,500 per year",
        description:
          "The MSc in Computer Science at Oxford provides advanced training in a range of topics in computer science, with opportunities for specialization in areas such as machine learning and security.",
      },
      {
        name: "Medicine",
        degree: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
        duration: "6 years",
        tuition: "£37,510 per year",
        description:
          "Oxford's medical program combines scientific rigor with clinical training, preparing students to become skilled and compassionate physicians.",
      },
      {
        name: "English Language and Literature",
        degree: "Bachelor of Arts",
        duration: "3 years",
        tuition: "£28,370 per year",
        description:
          "Oxford's English program offers a comprehensive study of literature from the Anglo-Saxon period to the present day, with a focus on critical analysis and historical context.",
      },
      {
        name: "Mathematics",
        degree: "Master of Mathematics",
        duration: "4 years",
        tuition: "£33,500 per year",
        description:
          "The Mathematics program at Oxford provides a rigorous foundation in pure and applied mathematics, with opportunities for specialization in areas such as statistics and mathematical physics.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "UCAS application",
        "Personal statement",
        "Academic transcripts",
        "Admissions test (specific to course)",
        "Written work (for some courses)",
        "Interview (if shortlisted)",
        "English language proficiency (IELTS/TOEFL for non-native speakers)",
      ],
      graduate: [
        "Online application",
        "CV/Resume",
        "Statement of purpose",
        "Academic transcripts",
        "Letters of recommendation (typically 3)",
        "Research proposal (for research degrees)",
        "English language proficiency (IELTS/TOEFL for non-native speakers)",
        "Application fee (£75)",
      ],
    },
    scholarships: [
      {
        name: "Clarendon Scholarships",
        amount: "Full tuition and living expenses",
        eligibility: "Academic excellence and potential",
        description:
          "The Clarendon Fund is Oxford's flagship scholarship program, offering around 140 scholarships each year to academically excellent students from all around the world.",
      },
      {
        name: "Rhodes Scholarships",
        amount: "Full tuition and living expenses",
        eligibility: "Outstanding academic achievement, character, leadership, and commitment to service",
        description:
          "The Rhodes Scholarship is one of the oldest and most prestigious international scholarship programs, enabling outstanding young people from around the world to study at Oxford.",
      },
      {
        name: "Oxford-Weidenfeld and Hoffmann Scholarships",
        amount: "Full tuition and living expenses",
        eligibility: "Students from developing and emerging economies",
        description:
          "These scholarships are designed to provide opportunities for outstanding students from developing and emerging economies to pursue graduate studies at Oxford.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        main: "October 15 (for most courses)",
        lateApplications: "January 15 (for some courses)",
      },
      graduate: {
        januaryDeadline: "January (varies by program)",
        marchDeadline: "March (varies by program)",
      },
    },
    facilities: [
      "Bodleian Library (one of the oldest libraries in Europe)",
      "Oxford University Museum of Natural History",
      "Ashmolean Museum",
      "Oxford Botanic Garden",
      "Modern sports facilities",
      "College accommodation and dining halls",
      "Research laboratories and centers",
    ],
    notableAlumni: [
      "Stephen Hawking (Theoretical Physicist)",
      "J.R.R. Tolkien (Author of 'The Lord of the Rings')",
      "Malala Yousafzai (Nobel Peace Prize laureate)",
      "Tony Blair (Former UK Prime Minister)",
      "Emma Watson (Actress)",
    ],
  },
  {
    id: 3,
    name: "University of Toronto",
    country: "Canada",
    flag: "https://flagpedia.net/data/flags/w580/ca.png",
    image:
      "https://images.unsplash.com/photo-1569523765872-5b1ea13a3af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "The University of Toronto is a public research university in Toronto, Ontario, Canada. Founded in 1827, it is known for its influential movements and curricula in literary criticism and communication theory. The university is Canada's leading institution of learning, discovery and knowledge creation.",
    ranking: 18,
    location: "Toronto, Ontario, Canada",
    foundedYear: 1827,
    studentPopulation: 93000,
    internationalStudents: "26%",
    facultyToStudentRatio: "1:17",
    campusSize: "180 acres (St. George campus)",
    tuition: "CAD 57,020",
    applicationFee: "CAD 180",
    acceptanceRate: "43%",
    programs: [
      {
        name: "Computer Science",
        degree: "Bachelor of Science",
        duration: "4 years",
        tuition: "CAD 57,020 per year",
        description:
          "The Computer Science program at the University of Toronto provides a comprehensive foundation in algorithms, programming languages, and software development, with opportunities for specialization in areas such as artificial intelligence and data science.",
      },
      {
        name: "Commerce",
        degree: "Bachelor of Commerce",
        duration: "4 years",
        tuition: "CAD 62,250 per year",
        description:
          "The Commerce program at the Rotman School of Management offers a rigorous business education with a focus on global perspectives, innovation, and leadership development.",
      },
      {
        name: "Engineering Science",
        degree: "Bachelor of Applied Science",
        duration: "4 years",
        tuition: "CAD 64,810 per year",
        description:
          "The Engineering Science program is an elite program that combines advanced engineering studies with a strong foundation in mathematics, science, and humanities, preparing students for leadership roles in technology and innovation.",
      },
      {
        name: "Medicine",
        degree: "Doctor of Medicine (MD)",
        duration: "4 years",
        tuition: "CAD 94,720 per year",
        description:
          "The MD program at the University of Toronto's Faculty of Medicine is one of the top medical programs in the world, providing comprehensive training in clinical medicine, research, and healthcare leadership.",
      },
      {
        name: "International Relations",
        degree: "Bachelor of Arts",
        duration: "4 years",
        tuition: "CAD 57,020 per year",
        description:
          "The International Relations program offers an interdisciplinary approach to the study of global politics, economics, and security, preparing students for careers in diplomacy, international organizations, and global business.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Online application through OUAC",
        "Academic transcripts",
        "English language proficiency (if applicable)",
        "Supplementary application (for some programs)",
        "Portfolio (for some programs)",
        "Interview (for some programs)",
      ],
      graduate: [
        "Online application",
        "Statement of intent/research interests",
        "CV/Resume",
        "Letters of recommendation (typically 2-3)",
        "Academic transcripts",
        "GRE/GMAT scores (for some programs)",
        "English language proficiency (if applicable)",
        "Writing sample (for some programs)",
      ],
    },
    scholarships: [
      {
        name: "Lester B. Pearson International Scholarship",
        amount: "Full tuition, books, incidental fees, and residence support",
        eligibility: "International students demonstrating exceptional academic achievement and creativity",
        description:
          "The Lester B. Pearson International Scholarship Program recognizes international students who demonstrate exceptional academic achievement and creativity and who are recognized as leaders within their school.",
      },
      {
        name: "University of Toronto Scholars Program",
        amount: "CAD 7,500",
        eligibility: "Outstanding academic achievement",
        description:
          "The University of Toronto Scholars Program provides recognition to the University's outstanding students, at admission and on an ongoing basis.",
      },
      {
        name: "President's Scholars of Excellence Program",
        amount: "CAD 10,000",
        eligibility: "Exceptional students with top marks",
        description:
          "The President's Scholars of Excellence Program recognizes the University's most outstanding students at admission.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        earlyConsideration: "November 7",
        regularDecision: "January 15",
      },
      graduate: {
        round1: "December 1",
        round2: "January 15",
        round3: "April 30",
      },
    },
    facilities: [
      "Robarts Library (one of the largest academic libraries in North America)",
      "Athletic Centre and Varsity Centre",
      "Hart House (student center)",
      "Research laboratories and innovation hubs",
      "Multiple museums and galleries",
      "Student residences and dining halls",
      "Medical and health science complexes",
    ],
    notableAlumni: [
      "Margaret Atwood (Author)",
      "Malcolm Gladwell (Author and journalist)",
      "Frederick Banting (Co-discoverer of insulin)",
      "Lester B. Pearson (Former Prime Minister of Canada, Nobel Peace Prize laureate)",
      "Donald Sutherland (Actor)",
    ],
  },
  {
    id: 4,
    name: "ETH Zurich",
    country: "Switzerland",
    flag: "https://flagpedia.net/data/flags/w580/ch.png",
    image:
      "https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "ETH Zurich (Swiss Federal Institute of Technology) is a public research university in Zürich, Switzerland. Founded in 1854, it is consistently ranked among the top universities in the world, especially for science, technology, engineering, and mathematics disciplines. ETH Zurich has produced 21 Nobel Prize laureates, including Albert Einstein.",
    ranking: 9,
    location: "Zürich, Switzerland",
    foundedYear: 1854,
    studentPopulation: 22200,
    internationalStudents: "38%",
    facultyToStudentRatio: "1:12",
    campusSize: "Multiple campuses across Zürich",
    tuition: "CHF 730 per semester",
    applicationFee: "CHF 150",
    acceptanceRate: "27%",
    programs: [
      {
        name: "Computer Science",
        degree: "Bachelor of Science",
        duration: "3 years",
        tuition: "CHF 730 per semester",
        description:
          "The Computer Science program at ETH Zurich provides a strong foundation in theoretical and practical aspects of computing, with a focus on algorithm design, programming languages, and software engineering.",
      },
      {
        name: "Mechanical Engineering",
        degree: "Master of Science",
        duration: "2 years",
        tuition: "CHF 730 per semester",
        description:
          "The Mechanical Engineering program combines theoretical knowledge with practical applications, preparing students for careers in industries such as automotive, aerospace, and manufacturing.",
      },
      {
        name: "Architecture",
        degree: "Bachelor of Science",
        duration: "3 years",
        tuition: "CHF 730 per semester",
        description:
          "The Architecture program at ETH Zurich is known for its innovative approach to design, combining artistic creativity with technical expertise and a focus on sustainability.",
      },
      {
        name: "Physics",
        degree: "Master of Science",
        duration: "2 years",
        tuition: "CHF 730 per semester",
        description:
          "The Physics program offers advanced training in theoretical and experimental physics, with opportunities for specialization in areas such as quantum physics, astrophysics, and condensed matter physics.",
      },
      {
        name: "Mathematics",
        degree: "Bachelor of Science",
        duration: "3 years",
        tuition: "CHF 730 per semester",
        description:
          "The Mathematics program provides a rigorous foundation in pure and applied mathematics, with a focus on problem-solving skills and logical reasoning.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Online application",
        "Academic transcripts",
        "Entrance examination (for some programs)",
        "Language proficiency (German or English, depending on program)",
        "Motivation letter",
        "CV/Resume",
      ],
      graduate: [
        "Online application",
        "Bachelor's degree in a related field",
        "Academic transcripts",
        "CV/Resume",
        "Statement of purpose",
        "Letters of recommendation (typically 2)",
        "Language proficiency (German or English, depending on program)",
        "GRE scores (for some programs)",
      ],
    },
    scholarships: [
      {
        name: "Excellence Scholarship & Opportunity Programme",
        amount: "CHF 12,000 per year plus tuition waiver",
        eligibility: "Outstanding academic achievement",
        description:
          "The Excellence Scholarship & Opportunity Programme supports students with outstanding academic records who wish to pursue a Master's degree at ETH Zurich.",
      },
      {
        name: "ETH Zurich Foundation Scholarship",
        amount: "Varies",
        eligibility: "Financial need and academic merit",
        description:
          "The ETH Zurich Foundation provides scholarships to students who demonstrate both financial need and academic excellence.",
      },
      {
        name: "Swiss Government Excellence Scholarships",
        amount: "CHF 1,920 per month plus tuition waiver",
        eligibility: "International students from specific countries",
        description:
          "The Swiss Government Excellence Scholarships are offered to international students from specific countries who wish to pursue research or further studies at Swiss universities.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        winterSemester: "April 30",
        summerSemester: "November 30",
      },
      graduate: {
        winterSemester: "December 15",
        summerSemester: "December 15",
      },
    },
    facilities: [
      "ETH Library (largest technical and scientific library in Switzerland)",
      "Student Project House",
      "Research laboratories and centers",
      "Sports facilities",
      "Student housing",
      "Innovation and Entrepreneurship Lab",
      "Multiple museums and collections",
    ],
    notableAlumni: [
      "Albert Einstein (Physicist, Nobel Prize laureate)",
      "Wilhelm Röntgen (Physicist, Nobel Prize laureate)",
      "John von Neumann (Mathematician and computer scientist)",
      "Santiago Calatrava (Architect and engineer)",
      "Wernher von Braun (Aerospace engineer)",
    ],
  },
  {
    id: 5,
    name: "National University of Singapore",
    country: "Singapore",
    flag: "https://flagpedia.net/data/flags/w580/sg.png",
    image:
      "https://images.unsplash.com/photo-1596458598955-9d8b65cae30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "The National University of Singapore (NUS) is the oldest and most prestigious university in Singapore. Founded in 1905, it is consistently ranked as one of the top universities in Asia and among the best in the world. NUS offers a global approach to education and research, with a focus on Asian perspectives and expertise.",
    ranking: 11,
    location: "Singapore",
    foundedYear: 1905,
    studentPopulation: 38000,
    internationalStudents: "35%",
    facultyToStudentRatio: "1:17",
    campusSize: "150 hectares",
    tuition: "SGD 29,650",
    applicationFee: "SGD 100",
    acceptanceRate: "5%",
    programs: [
      {
        name: "Computer Science",
        degree: "Bachelor of Computing",
        duration: "4 years",
        tuition: "SGD 29,650 per year",
        description:
          "The Computer Science program at NUS provides a strong foundation in computing fundamentals, with specializations in areas such as artificial intelligence, cybersecurity, and software engineering.",
      },
      {
        name: "Business Administration",
        degree: "Bachelor of Business Administration",
        duration: "4 years",
        tuition: "SGD 29,650 per year",
        description:
          "The Business Administration program at NUS Business School offers a comprehensive business education with a global perspective, preparing students for leadership roles in various industries.",
      },
      {
        name: "Medicine",
        degree: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
        duration: "5 years",
        tuition: "SGD 29,650 per year",
        description:
          "The Medicine program at NUS Yong Loo Lin School of Medicine is one of the most prestigious medical programs in Asia, providing comprehensive training in clinical medicine, research, and healthcare leadership.",
      },
      {
        name: "Law",
        degree: "Bachelor of Laws (LLB)",
        duration: "4 years",
        tuition: "SGD 29,650 per year",
        description:
          "The Law program at NUS Faculty of Law offers a rigorous legal education with a focus on Asian legal systems and international law, preparing students for careers in legal practice, public service, and business.",
      },
      {
        name: "Engineering",
        degree: "Bachelor of Engineering",
        duration: "4 years",
        tuition: "SGD 29,650 per year",
        description:
          "The Engineering program at NUS Faculty of Engineering offers a broad-based engineering education with specializations in areas such as civil engineering, electrical engineering, and mechanical engineering.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Online application",
        "Academic transcripts",
        "SAT/ACT scores (for some programs)",
        "English language proficiency (TOEFL/IELTS)",
        "Personal statement",
        "Letters of recommendation",
        "Interview (for some programs)",
      ],
      graduate: [
        "Online application",
        "Bachelor's degree in a related field",
        "Academic transcripts",
        "CV/Resume",
        "Statement of purpose",
        "Letters of recommendation (typically 2)",
        "GRE/GMAT scores (for some programs)",
        "English language proficiency (TOEFL/IELTS)",
        "Interview (for some programs)",
      ],
    },
    scholarships: [
      {
        name: "ASEAN Undergraduate Scholarship",
        amount: "Full tuition and living allowance",
        eligibility: "Citizens of ASEAN countries (excluding Singapore)",
        description:
          "The ASEAN Undergraduate Scholarship is offered to outstanding students from ASEAN countries who wish to pursue undergraduate studies at NUS.",
      },
      {
        name: "Science & Technology Undergraduate Scholarship",
        amount: "Full tuition and living allowance",
        eligibility: "Outstanding academic achievement in science and technology fields",
        description:
          "The Science & Technology Undergraduate Scholarship is offered to outstanding students who wish to pursue undergraduate studies in science and technology fields at NUS.",
      },
      {
        name: "NUS Graduate School Scholarship",
        amount: "Full tuition and monthly stipend",
        eligibility: "Outstanding academic achievement and research potential",
        description:
          "The NUS Graduate School Scholarship is offered to outstanding students who wish to pursue graduate studies and research at NUS.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        international: "February 15",
        singaporean: "March 31",
      },
      graduate: {
        august: "January 15",
        january: "July 15",
      },
    },
    facilities: [
      "NUS Libraries (multiple libraries across campus)",
      "University Town (residential and educational complex)",
      "Research centers and laboratories",
      "Sports facilities",
      "Student housing",
      "NUS Enterprise (innovation and entrepreneurship hub)",
      "Multiple museums and cultural centers",
    ],
    notableAlumni: [
      "Tony Tan (Former President of Singapore)",
      "Goh Chok Tong (Former Prime Minister of Singapore)",
      "Kishore Mahbubani (Diplomat and academic)",
      "Tan Chorh Chuan (Former President of NUS)",
      "Olivia Lum (Founder of Hyflux)",
    ],
  },
  {
    id: 6,
    name: "University of Melbourne",
    country: "Australia",
    flag: "https://flagpedia.net/data/flags/w580/au.png",
    image:
      "https://images.unsplash.com/photo-1591116396100-c45530f8c5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "The University of Melbourne is a public research university located in Melbourne, Australia. Founded in 1853, it is Australia's second oldest university and the oldest in Victoria. The university is consistently ranked among the leading universities in the world, with international rankings placing it as the top university in Australia and among the top 50 globally.",
    ranking: 33,
    location: "Melbourne, Victoria, Australia",
    foundedYear: 1853,
    studentPopulation: 52000,
    internationalStudents: "40%",
    facultyToStudentRatio: "1:18",
    campusSize: "Multiple campuses across Melbourne",
    tuition: "AUD 42,000",
    applicationFee: "AUD 100",
    acceptanceRate: "70%",
    programs: [
      {
        name: "Commerce",
        degree: "Bachelor of Commerce",
        duration: "3 years",
        tuition: "AUD 43,776 per year",
        description:
          "The Commerce program at the University of Melbourne provides a strong foundation in business and economics, with majors in areas such as accounting, finance, and marketing.",
      },
      {
        name: "Science",
        degree: "Bachelor of Science",
        duration: "3 years",
        tuition: "AUD 45,024 per year",
        description:
          "The Science program offers a flexible curriculum with majors in areas such as biology, chemistry, physics, and mathematics, preparing students for careers in research, industry, and healthcare.",
      },
      {
        name: "Arts",
        degree: "Bachelor of Arts",
        duration: "3 years",
        tuition: "AUD 39,168 per year",
        description:
          "The Arts program offers a broad liberal arts education with majors in areas such as history, philosophy, languages, and media studies, developing critical thinking and communication skills.",
      },
      {
        name: "Engineering",
        degree: "Master of Engineering",
        duration: "3 years",
        tuition: "AUD 45,440 per year",
        description:
          "The Engineering program provides advanced training in engineering principles and practices, with specializations in areas such as civil, mechanical, and software engineering.",
      },
      {
        name: "Medicine",
        degree: "Doctor of Medicine",
        duration: "4 years",
        tuition: "AUD 90,976 per year",
        description:
          "The Medicine program is a graduate-entry program that provides comprehensive training in clinical medicine, research, and healthcare leadership.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Online application",
        "Academic transcripts",
        "English language proficiency (TOEFL/IELTS)",
        "Personal statement (for some programs)",
        "Portfolio (for some programs)",
        "Interview (for some programs)",
      ],
      graduate: [
        "Online application",
        "Bachelor's degree in a related field",
        "Academic transcripts",
        "CV/Resume",
        "Statement of purpose",
        "Letters of recommendation (typically 2)",
        "GRE/GMAT scores (for some programs)",
        "English language proficiency (TOEFL/IELTS)",
        "Interview (for some programs)",
      ],
    },
    scholarships: [
      {
        name: "Melbourne International Undergraduate Scholarship",
        amount: "100%, 50%, or 25% tuition fee remission",
        eligibility: "International students with outstanding academic achievement",
        description:
          "The Melbourne International Undergraduate Scholarship is awarded to high-achieving international students who are commencing undergraduate studies at the University of Melbourne.",
      },
      {
        name: "Melbourne Graduate Scholarship",
        amount: "Full or partial tuition fee remission",
        eligibility: "Outstanding academic achievement",
        description:
          "The Melbourne Graduate Scholarship is awarded to high-achieving students who are commencing graduate studies at the University of Melbourne.",
      },
      {
        name: "Australia Awards Scholarships",
        amount: "Full tuition, living expenses, and travel costs",
        eligibility: "Citizens of specific developing countries",
        description:
          "Australia Awards Scholarships are long-term development awards administered by the Department of Foreign Affairs and Trade, providing opportunities for full-time undergraduate or postgraduate study at Australian institutions.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        semester1: "October 31",
        semester2: "April 30",
      },
      graduate: {
        semester1: "October 31",
        semester2: "April 30",
      },
    },
    facilities: [
      "University Library (multiple libraries across campus)",
      "Research centers and laboratories",
      "Sports facilities",
      "Student housing",
      "Melbourne Connect (innovation precinct)",
      "Multiple museums and galleries",
      "Performing arts venues",
    ],
    notableAlumni: [
      "Julia Gillard (Former Prime Minister of Australia)",
      "Robert Menzies (Former Prime Minister of Australia)",
      "Peter Singer (Philosopher and ethicist)",
      "Elizabeth Blackburn (Nobel Prize laureate in Physiology or Medicine)",
      "Peter Doherty (Nobel Prize laureate in Physiology or Medicine)",
    ],
  },
  {
    id: 7,
    name: "University of Tokyo",
    country: "Japan",
    flag: "https://flagpedia.net/data/flags/w580/jp.png",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "The University of Tokyo (UTokyo) is a public research university located in Tokyo, Japan. Established in 1877, it is the oldest and most prestigious university in Japan. The university has produced many notable alumni, including 17 Prime Ministers of Japan, 16 Nobel Prize laureates, and 5 astronauts.",
    ranking: 23,
    location: "Tokyo, Japan",
    foundedYear: 1877,
    studentPopulation: 28000,
    internationalStudents: "10%",
    facultyToStudentRatio: "1:8",
    campusSize: "Multiple campuses across Tokyo",
    tuition: "¥535,800",
    applicationFee: "¥9,800",
    acceptanceRate: "33%",
    programs: [
      {
        name: "Science",
        degree: "Bachelor of Science",
        duration: "4 years",
        tuition: "¥535,800 per year",
        description:
          "The Science program at the University of Tokyo provides a strong foundation in natural sciences, with departments in areas such as physics, chemistry, biology, and astronomy.",
      },
      {
        name: "Engineering",
        degree: "Bachelor of Engineering",
        duration: "4 years",
        tuition: "¥535,800 per year",
        description:
          "The Engineering program offers comprehensive training in engineering principles and practices, with departments in areas such as civil engineering, mechanical engineering, and electrical engineering.",
      },
      {
        name: "Law",
        degree: "Bachelor of Laws",
        duration: "4 years",
        tuition: "¥535,800 per year",
        description:
          "The Law program provides a rigorous legal education with a focus on Japanese law and international legal systems, preparing students for careers in legal practice, public service, and business.",
      },
      {
        name: "Medicine",
        degree: "Bachelor of Medicine",
        duration: "6 years",
        tuition: "¥535,800 per year",
        description:
          "The Medicine program offers comprehensive training in medical sciences and clinical practice, preparing students for careers as physicians, researchers, and healthcare leaders.",
      },
      {
        name: "Economics",
        degree: "Bachelor of Economics",
        duration: "4 years",
        tuition: "¥535,800 per year",
        description:
          "The Economics program provides a strong foundation in economic theory and methods, with applications to various fields such as finance, international trade, and public policy.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Online application",
        "Academic transcripts",
        "Entrance examination",
        "Japanese language proficiency (for programs taught in Japanese)",
        "English language proficiency (for programs taught in English)",
        "Statement of purpose",
        "Letters of recommendation",
      ],
      graduate: [
        "Online application",
        "Bachelor's degree in a related field",
        "Academic transcripts",
        "CV/Resume",
        "Research proposal",
        "Letters of recommendation (typically 2)",
        "Japanese language proficiency (for programs taught in Japanese)",
        "English language proficiency (for programs taught in English)",
        "Entrance examination (for some programs)",
        "Interview (for some programs)",
      ],
    },
    scholarships: [
      {
        name: "University of Tokyo Fellowship",
        amount: "¥200,000 per month",
        eligibility: "Outstanding academic achievement and research potential",
        description:
          "The University of Tokyo Fellowship is awarded to outstanding students who wish to pursue graduate studies and research at the University of Tokyo.",
      },
      {
        name: "MEXT Scholarship",
        amount: "Full tuition and monthly stipend",
        eligibility: "International students with outstanding academic achievement",
        description:
          "The MEXT (Ministry of Education, Culture, Sports, Science and Technology) Scholarship is offered by the Japanese government to international students who wish to study at Japanese universities.",
      },
      {
        name: "UTokyo Global Science Course Scholarship",
        amount: "Full tuition and monthly stipend",
        eligibility: "International students in the Global Science Course",
        description:
          "The UTokyo Global Science Course Scholarship is offered to outstanding international students who wish to pursue undergraduate studies in the Global Science Course at the University of Tokyo.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        april: "November 30",
        september: "April 30",
      },
      graduate: {
        april: "November 30",
        september: "April 30",
      },
    },
    facilities: [
      "University Library (multiple libraries across campus)",
      "Research institutes and centers",
      "Sports facilities",
      "Student housing",
      "University Museum",
      "Botanical Gardens",
      "Astronomical Observatory",
    ],
    notableAlumni: [
      "Shinzo Abe (Former Prime Minister of Japan)",
      "Yasunari Kawabata (Nobel Prize laureate in Literature)",
      "Masatoshi Koshiba (Nobel Prize laureate in Physics)",
      "Kikunae Ikeda (Discoverer of umami taste)",
      "Jiro Horikoshi (Aircraft designer)",
    ],
  },
  {
    id: 8,
    name: "Indian Institute of Technology (IIT) Delhi",
    country: "India",
    flag: "https://flagpedia.net/data/flags/w580/in.png",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "The Indian Institute of Technology Delhi (IIT Delhi) is a public technical and research university located in Delhi, India. Established in 1961, it is one of the oldest and most prestigious Indian Institutes of Technology. IIT Delhi is known for its rigorous academic programs, cutting-edge research, and successful alumni who have made significant contributions to technology, business, and public service.",
    ranking: 174,
    location: "New Delhi, India",
    foundedYear: 1961,
    studentPopulation: 8500,
    internationalStudents: "5%",
    facultyToStudentRatio: "1:15",
    campusSize: "325 acres",
    tuition: "$4,000 - $8,000",
    applicationFee: "$50",
    acceptanceRate: "2%",
    programs: [
      {
        name: "Computer Science and Engineering",
        degree: "Bachelor of Technology",
        duration: "4 years",
        tuition: "$8,000 per year",
        description:
          "The Computer Science and Engineering program at IIT Delhi provides a strong foundation in computing fundamentals, algorithms, programming languages, and software development, with opportunities for specialization in areas such as artificial intelligence and data science.",
      },
      {
        name: "Electrical Engineering",
        degree: "Bachelor of Technology",
        duration: "4 years",
        tuition: "$8,000 per year",
        description:
          "The Electrical Engineering program offers comprehensive training in electrical systems, electronics, communications, and power engineering, preparing students for careers in industry, research, and academia.",
      },
      {
        name: "Mechanical Engineering",
        degree: "Bachelor of Technology",
        duration: "4 years",
        tuition: "$8,000 per year",
        description:
          "The Mechanical Engineering program provides a strong foundation in mechanical systems, thermodynamics, materials science, and manufacturing processes, with applications to various industries such as automotive, aerospace, and energy.",
      },
      {
        name: "Chemical Engineering",
        degree: "Bachelor of Technology",
        duration: "4 years",
        tuition: "$8,000 per year",
        description:
          "The Chemical Engineering program offers comprehensive training in chemical processes, reaction engineering, and plant design, with applications to industries such as petrochemicals, pharmaceuticals, and food processing.",
      },
      {
        name: "Design",
        degree: "Bachelor of Design",
        duration: "4 years",
        tuition: "$8,000 per year",
        description:
          "The Design program combines artistic creativity with technical expertise, preparing students for careers in industrial design, product design, and user experience design.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Joint Entrance Examination (JEE) Advanced",
        "Academic transcripts",
        "Counseling and seat allocation process",
      ],
      graduate: [
        "Graduate Aptitude Test in Engineering (GATE)",
        "Bachelor's degree in a related field",
        "Academic transcripts",
        "CV/Resume",
        "Statement of purpose",
        "Letters of recommendation (typically 2)",
        "Interview",
      ],
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition and monthly stipend",
        eligibility: "Based on family income and academic performance",
        description:
          "The Merit-cum-Means Scholarship is awarded to students from economically weaker sections who demonstrate strong academic performance.",
      },
      {
        name: "Institute Free Studentship",
        amount: "Full tuition waiver",
        eligibility: "Based on family income",
        description:
          "The Institute Free Studentship provides a full tuition waiver to students from economically weaker sections.",
      },
      {
        name: "Aditya Birla Scholarship",
        amount: "₹175,000 per year",
        eligibility: "Outstanding academic achievement and leadership potential",
        description:
          "The Aditya Birla Scholarship is awarded to outstanding students who demonstrate exceptional academic achievement and leadership potential.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        jeeAdvanced: "May (varies each year)",
        counseling: "June-July (varies each year)",
      },
      graduate: {
        gate: "February (varies each year)",
        admission: "March-April (varies each year)",
      },
    },
    facilities: [
      "Central Library",
      "Research laboratories and centers",
      "Sports complex",
      "Student hostels",
      "Technology Business Incubator",
      "Computer center",
      "Healthcare center",
    ],
    notableAlumni: [
      "Sachin Bansal (Co-founder of Flipkart)",
      "Binny Bansal (Co-founder of Flipkart)",
      "Vinod Khosla (Co-founder of Sun Microsystems)",
      "Raghuram Rajan (Former Governor of the Reserve Bank of India)",
      "Kiran Bedi (First woman to join the Indian Police Service)",
    ],
  },
  {
    id: 9,
    name: "University of Bologna",
    country: "Italy",
    flag: "https://flagpedia.net/data/flags/w580/it.png",
    image:
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "The University of Bologna (Università di Bologna) is a research university in Bologna, Italy. Founded in 1088, it is the oldest university in continuous operation in the world, and the first university in the sense of a higher-learning and degree-awarding institute. It is one of the most prestigious Italian universities, commonly ranking in the top 5 of the country.",
    ranking: 167,
    location: "Bologna, Italy",
    foundedYear: 1088,
    studentPopulation: 87000,
    internationalStudents: "15%",
    facultyToStudentRatio: "1:20",
    campusSize: "Multiple campuses across Bologna and other cities",
    tuition: "€2,000 - €4,000",
    applicationFee: "€100",
    acceptanceRate: "35%",
    programs: [
      {
        name: "Law",
        degree: "Bachelor of Laws",
        duration: "3 years",
        tuition: "€2,000 per year",
        description:
          "The Law program at the University of Bologna provides a comprehensive legal education with a focus on Italian and European law, preparing students for careers in legal practice, public service, and business.",
      },
      {
        name: "Medicine and Surgery",
        degree: "Single Cycle Degree in Medicine and Surgery",
        duration: "6 years",
        tuition: "€4,000 per year",
        description:
          "The Medicine and Surgery program offers comprehensive training in medical sciences and clinical practice, preparing students for careers as physicians, researchers, and healthcare leaders.",
      },
      {
        name: "Economics and Business",
        degree: "Bachelor of Economics and Business",
        duration: "3 years",
        tuition: "€2,000 per year",
        description:
          "The Economics and Business program provides a strong foundation in economic theory, business management, and quantitative methods, preparing students for careers in business, finance, and public policy.",
      },
      {
        name: "Engineering",
        degree: "Bachelor of Engineering",
        duration: "3 years",
        tuition: "€2,000 per year",
        description:
          "The Engineering program offers comprehensive training in engineering principles and practices, with specializations in areas such as civil, mechanical, and electrical engineering.",
      },
      {
        name: "Arts and Humanities",
        degree: "Bachelor of Arts",
        duration: "3 years",
        tuition: "€2,000 per year",
        description:
          "The Arts and Humanities program provides a broad liberal arts education with majors in areas such as literature, philosophy, history, and cultural studies, developing critical thinking and communication skills.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Online application",
        "High school diploma or equivalent",
        "Academic transcripts",
        "Entrance examination (for some programs)",
        "Italian language proficiency (for programs taught in Italian)",
        "English language proficiency (for programs taught in English)",
        "Motivation letter (for some programs)",
      ],
      graduate: [
        "Online application",
        "Bachelor's degree in a related field",
        "Academic transcripts",
        "CV/Resume",
        "Statement of purpose",
        "Letters of recommendation (typically 2)",
        "Italian language proficiency (for programs taught in Italian)",
        "English language proficiency (for programs taught in English)",
        "Interview (for some programs)",
      ],
    },
    scholarships: [
      {
        name: "University of Bologna Study Grants",
        amount: "€11,000 per year",
        eligibility: "International students with outstanding academic achievement",
        description:
          "The University of Bologna Study Grants are awarded to international students who demonstrate exceptional academic achievement and wish to pursue studies at the University of Bologna.",
      },
      {
        name: "Unibo Action 1&2 Scholarships",
        amount: "Full tuition waiver and €11,000 per year",
        eligibility: "International students from developing countries",
        description:
          "The Unibo Action 1&2 Scholarships are offered to international students from developing countries who wish to pursue studies at the University of Bologna.",
      },
      {
        name: "Italian Government Scholarships",
        amount: "Monthly stipend and tuition waiver",
        eligibility: "International students",
        description:
          "The Italian Government Scholarships are offered to international students who wish to pursue studies at Italian universities, including the University of Bologna.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        firstSemester: "May 31",
        secondSemester: "November 30",
      },
      graduate: {
        firstSemester: "May 31",
        secondSemester: "November 30",
      },
    },
    facilities: [
      "University Library (multiple libraries across campus)",
      "Research centers and laboratories",
      "Sports facilities",
      "Student housing",
      "University Museums",
      "Cultural centers",
      "International exchange office",
    ],
    notableAlumni: [
      "Dante Alighieri (Poet and writer)",
      "Nicolaus Copernicus (Astronomer)",
      "Umberto Eco (Writer and philosopher)",
      "Romano Prodi (Former Prime Minister of Italy and President of the European Commission)",
      "Enzo Ferrari (Founder of Ferrari)",
    ],
  },
  {
    id: 10,
    name: "Complutense University of Madrid",
    country: "Spain",
    flag: "https://flagpedia.net/data/flags/w580/es.png",
    image:
      "https://images.unsplash.com/photo-1558370781-d6196949e317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "The Complutense University of Madrid (Universidad Complutense de Madrid) is a public research university located in Madrid, Spain. Founded in Alcalá in 1293, it is one of the oldest universities in the world. The university is widely regarded as the most prestigious university in Spain, and it is among the top universities in the Spanish-speaking world.",
    ranking: 206,
    location: "Madrid, Spain",
    foundedYear: 1293,
    studentPopulation: 86000,
    internationalStudents: "10%",
    facultyToStudentRatio: "1:17",
    campusSize: "Multiple campuses across Madrid",
    tuition: "€1,500 - €3,500",
    applicationFee: "€70",
    acceptanceRate: "40%",
    programs: [
      {
        name: "Law",
        degree: "Bachelor of Laws",
        duration: "4 years",
        tuition: "€1,500 per year",
        description:
          "The Law program at the Complutense University of Madrid provides a comprehensive legal education with a focus on Spanish and European law, preparing students for careers in legal practice, public service, and business.",
      },
      {
        name: "Medicine",
        degree: "Bachelor of Medicine",
        duration: "6 years",
        tuition: "€3,500 per year",
        description:
          "The Medicine program offers comprehensive training in medical sciences and clinical practice, preparing students for careers as physicians, researchers, and healthcare leaders.",
      },
      {
        name: "Business Administration",
        degree: "Bachelor of Business Administration",
        duration: "4 years",
        tuition: "€1,500 per year",
        description:
          "The Business Administration program provides a strong foundation in business management, economics, and finance, preparing students for careers in business, consulting, and entrepreneurship.",
      },
      {
        name: "Computer Science",
        degree: "Bachelor of Computer Science",
        duration: "4 years",
        tuition: "€1,500 per year",
        description:
          "The Computer Science program offers comprehensive training in computing fundamentals, programming languages, and software development, with applications to various fields such as artificial intelligence and data science.",
      },
      {
        name: "Fine Arts",
        degree: "Bachelor of Fine Arts",
        duration: "4 years",
        tuition: "€1,500 per year",
        description:
          "The Fine Arts program combines artistic creativity with technical expertise, preparing students for careers in visual arts, design, and cultural industries.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Online application",
        "High school diploma or equivalent",
        "University entrance examination (Selectividad)",
        "Spanish language proficiency (for programs taught in Spanish)",
        "English language proficiency (for programs taught in English)",
      ],
      graduate: [
        "Online application",
        "Bachelor's degree in a related field",
        "Academic transcripts",
        "CV/Resume",
        "Statement of purpose",
        "Letters of recommendation (typically 2)",
        "Spanish language proficiency (for programs taught in Spanish)",
        "English language proficiency (for programs taught in English)",
        "Interview (for some programs)",
      ],
    },
    scholarships: [
      {
        name: "Complutense University Scholarships",
        amount: "Full or partial tuition waiver",
        eligibility: "Based on academic merit and financial need",
        description:
          "The Complutense University Scholarships are awarded to students who demonstrate strong academic performance and financial need.",
      },
      {
        name: "Spanish Ministry of Education Scholarships",
        amount: "Varies",
        eligibility: "Based on academic merit and financial need",
        description:
          "The Spanish Ministry of Education Scholarships are offered to students who demonstrate strong academic performance and financial need.",
      },
      {
        name: "Erasmus+ Scholarships",
        amount: "Monthly stipend",
        eligibility: "Students from Erasmus+ program countries",
        description:
          "The Erasmus+ Scholarships are offered to students from Erasmus+ program countries who wish to study at the Complutense University of Madrid.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        firstPhase: "June 15",
        secondPhase: "July 15",
      },
      graduate: {
        firstPhase: "May 31",
        secondPhase: "June 30",
      },
    },
    facilities: [
      "University Library (multiple libraries across campus)",
      "Research centers and laboratories",
      "Sports facilities",
      "Student housing",
      "University Museums",
      "Cultural centers",
      "International exchange office",
    ],
    notableAlumni: [
      "Mario Vargas Llosa (Nobel Prize laureate in Literature)",
      "Adolfo Suárez (Former Prime Minister of Spain)",
      "José Luis Rodríguez Zapatero (Former Prime Minister of Spain)",
      "Camilo José Cela (Nobel Prize laureate in Literature)",
      "Severo Ochoa (Nobel Prize laureate in Physiology or Medicine)",
    ],
  },
  {
    id: 11,
    name: "Trinity College Dublin",
    country: "Ireland",
    flag: "https://flagpedia.net/data/flags/w580/ie.png",
    image:
      "https://images.unsplash.com/photo-1565373677928-80b26c689826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "Trinity College Dublin, officially The College of the Holy and Undivided Trinity of Queen Elizabeth near Dublin, is the sole constituent college of the University of Dublin, a research university in Dublin, Ireland. Founded in 1592, it is one of the seven ancient universities of Britain and Ireland, as well as Ireland's oldest surviving university.",
    ranking: 98,
    location: "Dublin, Ireland",
    foundedYear: 1592,
    studentPopulation: 18000,
    internationalStudents: "28%",
    facultyToStudentRatio: "1:13",
    campusSize: "47 acres",
    tuition: "€18,000 - €25,000",
    applicationFee: "€55",
    acceptanceRate: "33%",
    programs: [
      {
        name: "Business, Economic and Social Studies",
        degree: "Bachelor of Business Studies",
        duration: "4 years",
        tuition: "€20,609 per year",
        description:
          "The Business, Economic and Social Studies program provides a strong foundation in business, economics, and social sciences, with opportunities for specialization in areas such as finance, marketing, and sociology.",
      },
      {
        name: "Computer Science",
        degree: "Bachelor of Science in Computer Science",
        duration: "4 years",
        tuition: "€25,000 per year",
        description:
          "The Computer Science program offers comprehensive training in computing fundamentals, programming languages, and software development, with applications to various fields such as artificial intelligence and data science.",
      },
      {
        name: "Law",
        degree: "Bachelor of Laws",
        duration: "4 years",
        tuition: "€20,609 per year",
        description:
          "The Law program provides a comprehensive legal education with a focus on Irish and European law, preparing students for careers in legal practice, public service, and business.",
      },
      {
        name: "Medicine",
        degree: "Bachelor of Medicine",
        duration: "5 years",
        tuition: "€23,000 per year",
        description:
          "The Medicine program offers comprehensive training in medical sciences and clinical practice, preparing students for careers as physicians, researchers, and healthcare leaders.",
      },
      {
        name: "Engineering",
        degree: "Bachelor of Engineering",
        duration: "4 years",
        tuition: "€25,000 per year",
        description:
          "The Engineering program provides a strong foundation in engineering principles and practices, with specializations in areas such as civil, mechanical, and electronic engineering.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Online application",
        "High school diploma or equivalent",
        "Academic transcripts",
        "English language proficiency (TOEFL/IELTS)",
        "Personal statement (for some programs)",
        "Interview (for some programs)",
      ],
      graduate: [
        "Online application",
        "Bachelor's degree in a related field",
        "Academic transcripts",
        "CV/Resume",
        "Statement of purpose",
        "Letters of recommendation (typically 2)",
        "English language proficiency (TOEFL/IELTS)",
        "Interview (for some programs)",
      ],
    },
    scholarships: [
      {
        name: "Global Excellence Scholarships",
        amount: "€5,000 - €10,000",
        eligibility: "International students with outstanding academic achievement",
        description:
          "The Global Excellence Scholarships are awarded to international students who demonstrate exceptional academic achievement and wish to pursue studies at Trinity College Dublin.",
      },
      {
        name: "Foundation Scholarships",
        amount: "Full tuition and accommodation",
        eligibility: "Based on academic merit",
        description:
          "The Foundation Scholarships are awarded to students who demonstrate exceptional academic achievement in the Scholarship Examination.",
      },
      {
        name: "Sports Scholarships",
        amount: "€1,000 - €5,000",
        eligibility: "Students with outstanding sporting achievements",
        description:
          "The Sports Scholarships are awarded to students who demonstrate exceptional sporting achievements and wish to pursue studies at Trinity College Dublin.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        nonEU: "February 1",
        eu: "February 1",
      },
      graduate: {
        round1: "October 31",
        round2: "March 31",
      },
    },
    facilities: [
      "Trinity College Library (including the Book of Kells)",
      "Research centers and laboratories",
      "Sports facilities",
      "Student housing",
      "Trinity College Science Gallery",
      "Cultural centers",
      "International exchange office",
    ],
    notableAlumni: [
      "Oscar Wilde (Writer and poet)",
      "Samuel Beckett (Nobel Prize laureate in Literature)",
      "Ernest Walton (Nobel Prize laureate in Physics)",
      "Mary Robinson (Former President of Ireland)",
      "Bram Stoker (Author of 'Dracula')",
    ],
  },
  {
    id: 12,
    name: "University of Auckland",
    country: "New Zealand",
    flag: "https://flagpedia.net/data/flags/w580/nz.png",
    image:
      "https://images.unsplash.com/photo-1595612267446-5a4a6e5b3ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "The University of Auckland is a public research university in Auckland, New Zealand. Established in 1883, it is the largest and highest-ranked university in New Zealand, being ranked 85th worldwide in the 2020/21 QS World University Rankings. The university is made up of eight faculties and offers a wide range of undergraduate and postgraduate programs.",
    ranking: 87,
    location: "Auckland, New Zealand",
    foundedYear: 1883,
    studentPopulation: 42000,
    internationalStudents: "33%",
    facultyToStudentRatio: "1:20",
    campusSize: "Multiple campuses across Auckland",
    tuition: "NZD 32,000 - 42,000",
    applicationFee: "NZD 100",
    acceptanceRate: "65%",
    programs: [
      {
        name: "Commerce",
        degree: "Bachelor of Commerce",
        duration: "3 years",
        tuition: "NZD 32,000 per year",
        description:
          "The Commerce program at the University of Auckland provides a strong foundation in business and economics, with majors in areas such as accounting, finance, and marketing.",
      },
      {
        name: "Engineering",
        degree: "Bachelor of Engineering (Honours)",
        duration: "4 years",
        tuition: "NZD 42,000 per year",
        description:
          "The Engineering program offers comprehensive training in engineering principles and practices, with specializations in areas such as civil, mechanical, and software engineering.",
      },
      {
        name: "Law",
        degree: "Bachelor of Laws",
        duration: "4 years",
        tuition: "NZD 32,000 per year",
        description:
          "The Law program provides a comprehensive legal education with a focus on New Zealand and international law, preparing students for careers in legal practice, public service, and business.",
      },
      {
        name: "Medicine",
        degree: "Bachelor of Medicine and Bachelor of Surgery",
        duration: "6 years",
        tuition: "NZD 42,000 per year",
        description:
          "The Medicine program offers comprehensive training in medical sciences and clinical practice, preparing students for careers as physicians, researchers, and healthcare leaders.",
      },
      {
        name: "Science",
        degree: "Bachelor of Science",
        duration: "3 years",
        tuition: "NZD 32,000 per year",
        description:
          "The Science program offers a flexible curriculum with majors in areas such as biology, chemistry, physics, and mathematics, preparing students for careers in research, industry, and healthcare.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Online application",
        "High school diploma or equivalent",
        "Academic transcripts",
        "English language proficiency (TOEFL/IELTS)",
        "Personal statement (for some programs)",
        "Interview (for some programs)",
      ],
      graduate: [
        "Online application",
        "Bachelor's degree in a related field",
        "Academic transcripts",
        "CV/Resume",
        "Statement of purpose",
        "Letters of recommendation (typically 2)",
        "English language proficiency (TOEFL/IELTS)",
        "Interview (for some programs)",
      ],
    },
    scholarships: [
      {
        name: "University of Auckland International Student Scholarships",
        amount: "NZD 10,000 - 20,000",
        eligibility: "International students with outstanding academic achievement",
        description:
          "The University of Auckland International Student Scholarships are awarded to international students who demonstrate exceptional academic achievement and wish to pursue studies at the University of Auckland.",
      },
      {
        name: "University of Auckland Doctoral Scholarships",
        amount: "Full tuition and stipend",
        eligibility: "Students pursuing doctoral studies",
        description:
          "The University of Auckland Doctoral Scholarships are awarded to students who wish to pursue doctoral studies at the University of Auckland.",
      },
      {
        name: "New Zealand Aid Programme Scholarships",
        amount: "Full tuition and living expenses",
        eligibility: "Students from specific developing countries",
        description:
          "The New Zealand Aid Programme Scholarships are offered to students from specific developing countries who wish to pursue studies at New Zealand universities, including the University of Auckland.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        semester1: "December 8",
        semester2: "July 4",
      },
      graduate: {
        semester1: "December 8",
        semester2: "July 4",
      },
    },
    facilities: [
      "University Library (multiple libraries across campus)",
      "Research centers and laboratories",
      "Sports facilities",
      "Student housing",
      "University Museums",
      "Cultural centers",
      "International exchange office",
    ],
    notableAlumni: [
      "Helen Clark (Former Prime Minister of New Zealand)",
      "Philippa Boyens (Screenwriter for 'The Lord of the Rings')",
      "Russell Coutts (Sailor and America's Cup winner)",
      "Vaughan Jones (Fields Medal recipient)",
      "Maurice Wilkins (Nobel Prize laureate in Physiology or Medicine)",
    ],
  },
  {
    id: 13,
    name: "McGill University",
    country: "Canada",
    flag: "https://flagpedia.net/data/flags/w580/ca.png",
    image:
      "https://images.unsplash.com/photo-1580243117731-b86fab3da6a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "McGill University is a public research university in Montreal, Quebec, Canada. Founded in 1821, it is the oldest university in Montreal and one of the oldest in Canada. McGill is consistently ranked as one of the top universities in Canada and among the top universities globally. The university has produced 12 Nobel laureates and 145 Rhodes Scholars, more than any other university in Canada.",
    ranking: 31,
    location: "Montreal, Quebec, Canada",
    foundedYear: 1821,
    studentPopulation: 40000,
    internationalStudents: "30%",
    facultyToStudentRatio: "1:15",
    campusSize: "Multiple campuses across Montreal",
    tuition: "CAD 45,600 - 58,500",
    applicationFee: "CAD 120",
    acceptanceRate: "46%",
    programs: [
      {
        name: "Medicine",
        degree: "Doctor of Medicine and Master of Surgery",
        duration: "4 years",
        tuition: "CAD 58,500 per year",
        description:
          "The Medicine program at McGill University offers comprehensive training in medical sciences and clinical practice, preparing students for careers as physicians, researchers, and healthcare leaders.",
      },
      {
        name: "Law",
        degree: "Bachelor of Civil Law/Bachelor of Laws",
        duration: "3-4 years",
        tuition: "CAD 45,600 per year",
        description:
          "The Law program provides a comprehensive legal education with a focus on Canadian and international law, preparing students for careers in legal practice, public service, and business.",
      },
      {
        name: "Engineering",
        degree: "Bachelor of Engineering",
        duration: "4 years",
        tuition: "CAD 45,600 per year",
        description:
          "The Engineering program offers comprehensive training in engineering principles and practices, with specializations in areas such as civil, mechanical, and electrical engineering.",
      },
      {
        name: "Management",
        degree: "Bachelor of Commerce",
        duration: "3-4 years",
        tuition: "CAD 45,600 per year",
        description:
          "The Management program provides a strong foundation in business and management, with majors in areas such as finance, marketing, and international business.",
      },
      {
        name: "Arts",
        degree: "Bachelor of Arts",
        duration: "3-4 years",
        tuition: "CAD 45,600 per year",
        description:
          "The Arts program offers a broad liberal arts education with majors in areas such as economics, political science, psychology, and languages, developing critical thinking and communication skills.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Online application",
        "High school diploma or equivalent",
        "Academic transcripts",
        "English language proficiency (TOEFL/IELTS)",
        "Personal statement (for some programs)",
        "Interview (for some programs)",
      ],
      graduate: [
        "Online application",
        "Bachelor's degree in a related field",
        "Academic transcripts",
        "CV/Resume",
        "Statement of purpose",
        "Letters of recommendation (typically 2)",
        "English language proficiency (TOEFL/IELTS)",
        "Interview (for some programs)",
      ],
    },
    scholarships: [
      {
        name: "McGill Major Entrance Scholarships",
        amount: "CAD 3,000 - 12,000",
        eligibility: "Outstanding academic achievement",
        description:
          "The McGill Major Entrance Scholarships are awarded to students who demonstrate exceptional academic achievement and wish to pursue undergraduate studies at McGill University.",
      },
      {
        name: "McGill Graduate Fellowships",
        amount: "Varies",
        eligibility: "Outstanding academic achievement and research potential",
        description:
          "The McGill Graduate Fellowships are awarded to students who demonstrate exceptional academic achievement and research potential and wish to pursue graduate studies at McGill University.",
      },
      {
        name: "McCall MacBain Scholarships",
        amount: "Full tuition and living expenses",
        eligibility: "Outstanding academic achievement, leadership, and character",
        description:
          "The McCall MacBain Scholarships are awarded to students who demonstrate exceptional academic achievement, leadership, and character and wish to pursue graduate studies at McGill University.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        fall: "January 15",
        winter: "November 1",
      },
      graduate: {
        fall: "December 15",
        winter: "August 1",
      },
    },
    facilities: [
      "McGill Library (multiple libraries across campus)",
      "Research centers and laboratories",
      "Sports facilities",
      "Student housing",
      "McGill University Museums",
      "Cultural centers",
      "International exchange office",
    ],
    notableAlumni: [
      "Leonard Cohen (Musician and poet)",
      "William Shatner (Actor)",
      "John O'Keefe (Nobel Prize laureate in Physiology or Medicine)",
      "Julie Payette (Former Governor General of Canada and astronaut)",
      "Justin Trudeau (Prime Minister of Canada)",
    ],
  },
  {
    id: 14,
    name: "Tsinghua University",
    country: "China",
    flag: "https://flagpedia.net/data/flags/w580/cn.png",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "Tsinghua University is a major research university in Beijing, China, and a member of the C9 League of Chinese universities. Since its establishment in 1911, it has produced many notable leaders in science, engineering, politics, business, academia, and culture. The university is ranked as one of the top academic institutions in China and Asia, and among the best in the world.",
    ranking: 15,
    location: "Beijing, China",
    foundedYear: 1911,
    studentPopulation: 36000,
    internationalStudents: "10%",
    facultyToStudentRatio: "1:12",
    campusSize: "395 hectares",
    tuition: "CNY 40,000 - 60,000",
    applicationFee: "CNY 800",
    acceptanceRate: "2%",
    programs: [
      {
        name: "Computer Science and Technology",
        degree: "Bachelor of Engineering",
        duration: "4 years",
        tuition: "CNY 40,000 per year",
        description:
          "The Computer Science and Technology program at Tsinghua University provides a strong foundation in computing fundamentals, algorithms, programming languages, and software development, with opportunities for specialization in areas such as artificial intelligence and data science.",
      },
      {
        name: "Electronic Engineering",
        degree: "Bachelor of Engineering",
        duration: "4 years",
        tuition: "CNY 40,000 per year",
        description:
          "The Electronic Engineering program offers comprehensive training in electronic systems, communications, and signal processing, preparing students for careers in industry, research, and academia.",
      },
      {
        name: "Mechanical Engineering",
        degree: "Bachelor of Engineering",
        duration: "4 years",
        tuition: "CNY 40,000 per year",
        description:
          "The Mechanical Engineering program provides a strong foundation in mechanical systems, thermodynamics, materials science, and manufacturing processes, with applications to various industries such as automotive, aerospace, and energy.",
      },
      {
        name: "Economics and Finance",
        degree: "Bachelor of Economics",
        duration: "4 years",
        tuition: "CNY 40,000 per year",
        description:
          "The Economics and Finance program provides a strong foundation in economic theory, financial markets, and quantitative methods, preparing students for careers in finance, consulting, and public policy.",
      },
      {
        name: "Architecture",
        degree: "Bachelor of Architecture",
        duration: "5 years",
        tuition: "CNY 40,000 per year",
        description:
          "The Architecture program combines artistic creativity with technical expertise, preparing students for careers in architectural design, urban planning, and construction management.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Online application",
        "High school diploma or equivalent",
        "Academic transcripts",
        "National College Entrance Examination (Gaokao) for Chinese students",
        "SAT/ACT scores for international students",
        "Chinese language proficiency (for programs taught in Chinese)",
        "English language proficiency (for programs taught in English)",
        "Interview (for some programs)",
      ],
      graduate: [
        "Online application",
        "Bachelor's degree in a related field",
        "Academic transcripts",
        "CV/Resume",
        "Research proposal",
        "Letters of recommendation (typically 2)",
        "Chinese language proficiency (for programs taught in Chinese)",
        "English language proficiency (for programs taught in English)",
        "Entrance examination (for some programs)",
        "Interview (for some programs)",
      ],
    },
    scholarships: [
      {
        name: "Tsinghua University Scholarship for International Students",
        amount: "Full tuition and living expenses",
        eligibility: "International students with outstanding academic achievement",
        description:
          "The Tsinghua University Scholarship for International Students is awarded to international students who demonstrate exceptional academic achievement and wish to pursue studies at Tsinghua University.",
      },
      {
        name: "Chinese Government Scholarship",
        amount: "Full tuition and living expenses",
        eligibility: "International students",
        description:
          "The Chinese Government Scholarship is offered to international students who wish to pursue studies at Chinese universities, including Tsinghua University.",
      },
      {
        name: "Schwarzman Scholars",
        amount: "Full tuition and living expenses",
        eligibility: "Outstanding academic achievement, leadership, and character",
        description:
          "The Schwarzman Scholars program is a highly selective scholarship program that brings together the best young minds from around the world to study at Tsinghua University.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        international: "December 15",
        chinese: "June (varies each year)",
      },
      graduate: {
        international: "December 15",
        chinese: "December 15",
      },
    },
    facilities: [
      "Tsinghua University Library",
      "Research centers and laboratories",
      "Sports facilities",
      "Student housing",
      "Tsinghua University Art Museum",
      "Cultural centers",
      "International exchange office",
    ],
    notableAlumni: [
      "Xi Jinping (President of China)",
      "Hu Jintao (Former President of China)",
      "Zhu Rongji (Former Premier of China)",
      "Andrew Chi-Chih Yao (Turing Award recipient)",
      "Qian Xuesen (Father of Chinese rocketry)",
    ],
  },
  {
    id: 15,
    name: "Ludwig Maximilian University of Munich",
    country: "Germany",
    flag: "https://flagpedia.net/data/flags/w580/de.png",
    image:
      "https://images.unsplash.com/photo-1597005181977-9b38580f9668?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "/placeholder.svg?height=256&width=256",
    description:
      "Ludwig Maximilian University of Munich (LMU Munich) is a public research university located in Munich, Germany. Founded in 1472, it is one of the oldest universities in Germany. LMU is consistently ranked as one of the top universities in Germany, Europe, and the world. The university has produced 42 Nobel laureates, including Max Planck and Werner Heisenberg.",
    ranking: 32,
    location: "Munich, Germany",
    foundedYear: 1472,
    studentPopulation: 52000,
    internationalStudents: "20%",
    facultyToStudentRatio: "1:16",
    campusSize: "Multiple campuses across Munich",
    tuition: "€0 (administrative fee of €129 per semester)",
    applicationFee: "€50",
    acceptanceRate: "45%",
    programs: [
      {
        name: "Medicine",
        degree: "State Examination in Medicine",
        duration: "6 years",
        tuition: "€129 per semester (administrative fee)",
        description:
          "The Medicine program at LMU Munich offers comprehensive training in medical sciences and clinical practice, preparing students for careers as physicians, researchers, and healthcare leaders.",
      },
      {
        name: "Law",
        degree: "State Examination in Law",
        duration: "4 years",
        tuition: "€129 per semester (administrative fee)",
        description:
          "The Law program provides a comprehensive legal education with a focus on German and European law, preparing students for careers in legal practice, public service, and business.",
      },
      {
        name: "Physics",
        degree: "Bachelor of Science",
        duration: "3 years",
        tuition: "€129 per semester (administrative fee)",
        description:
          "The Physics program offers a rigorous foundation in theoretical and experimental physics, with opportunities for specialization in areas such as quantum physics, astrophysics, and biophysics.",
      },
      {
        name: "Business Administration",
        degree: "Bachelor of Science",
        duration: "3 years",
        tuition: "€129 per semester (administrative fee)",
        description:
          "The Business Administration program provides a strong foundation in business management, economics, and finance, preparing students for careers in business, consulting, and entrepreneurship.",
      },
      {
        name: "Psychology",
        degree: "Bachelor of Science",
        duration: "3 years",
        tuition: "€129 per semester (administrative fee)",
        description:
          "The Psychology program offers a comprehensive education in psychological theory and methods, with applications to various fields such as clinical psychology, organizational psychology, and cognitive neuroscience.",
      },
    ],
    admissionRequirements: {
      undergraduate: [
        "Online application",
        "High school diploma or equivalent",
        "Academic transcripts",
        "German language proficiency (for programs taught in German)",
        "English language proficiency (for programs taught in English)",
        "Entrance examination (for some programs)",
        "Interview (for some programs)",
      ],
      graduate: [
        "Online application",
        "Bachelor's degree in a related field",
        "Academic transcripts",
        "CV/Resume",
        "Statement of purpose",
        "Letters of recommendation (typically 2)",
        "German language proficiency (for programs taught in German)",
        "English language proficiency (for programs taught in English)",
        "Entrance examination (for some programs)",
        "Interview (for some programs)",
      ],
    },
    scholarships: [
      {
        name: "Deutschlandstipendium",
        amount: "€300 per month",
        eligibility: "Outstanding academic achievement",
        description:
          "The Deutschlandstipendium is awarded to students who demonstrate exceptional academic achievement and wish to pursue studies at German universities, including LMU Munich.",
      },
      {
        name: "DAAD Scholarships",
        amount: "Varies",
        eligibility: "International students",
        description:
          "The DAAD (German Academic Exchange Service) Scholarships are offered to international students who wish to pursue studies at German universities, including LMU Munich.",
      },
      {
        name: "Bavarian State Ministry Scholarships",
        amount: "Varies",
        eligibility: "Based on academic merit and financial need",
        description:
          "The Bavarian State Ministry Scholarships are awarded to students who demonstrate strong academic performance and financial need.",
      },
    ],
    applicationDeadlines: {
      undergraduate: {
        winterSemester: "July 15",
        summerSemester: "January 15",
      },
      graduate: {
        winterSemester: "May 31",
        summerSemester: "January 15",
      },
    },
    facilities: [
      "University Library (multiple libraries across campus)",
      "Research centers and laboratories",
      "Sports facilities",
      "Student housing",
      "University Museums",
      "Cultural centers",
      "International exchange office",
    ],
    notableAlumni: [
      "Max Planck (Nobel Prize laureate in Physics)",
      "Werner Heisenberg (Nobel Prize laureate in Physics)",
      "Thomas Mann (Nobel Prize laureate in Literature)",
      "Konrad Adenauer (First Chancellor of the Federal Republic of Germany)",
      "Pope Benedict XVI (Former Pope)",
    ],
  },
]
