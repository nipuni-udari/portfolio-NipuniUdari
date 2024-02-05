/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated:false // Set to false to use static SVG
};

const greeting = {
  username: "Nipuni Udari",
  title: "Hi there, I'm Nipuni Udari",
  subTitle:
    " I'm all about combining visual design with product thinking to bring meaningful experiences alive who's passionate about creating digital experiences through problem-solving. I fell in love with coding, exploring, travelling, Photography,Painting,designing.",
  resumeLink:
    "https://drive.google.com/file/d/1FhMWaB3z0iVWiClgiF1j9K5Ru8q8MXX9/view?usp=sharing",
  // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nipuni-udari",
  linkedin: "https://www.linkedin.com/in/nipuni-udari/",
  gmail: "udariweeraman@gmail.com",
  instagram:"https://www.instagram.com/nipuni.udari/",
  telegram:"@Udari_rajapaksha",
  behance:"https://www.behance.net/nipuniudari1",
  twitter:"https://twitter.com/NipuniUdari",
  medium:"https://udarirajapaksha.medium.com", 
  facebook: "https://www.facebook.com/nipuni.udari.92",
  stackoverflow: "https://stackoverflow.com/users/18332438/nipuni-udari",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Skills 🪄",
  subTitle: "Hello! I have a passion for exploring technical world.",
  skills: [
    "🌟 Mobile App Ui Design",
    " I’m passionate about pushing products to the next level through a design process visually stunning user-focused UI.",
    "🌟 Website Development",
    " I have a passion for front end web development and have experience in coding HTML,CSS,JAVA SCRIPT",
    "🌟 Graphic design",
    " I love graphic design and have experience in designing brands,logos,flyers,Book covers,Powerpoint presentations.",
    "🌟 Mobile App Development",
    "  I design & develop highly engaging digital experiences for the mobile using react native . Be it in, Android",
    "🌟 Video Editing",
    "  I have experience working on video projects for variety of purposes,and really enjoy working on video production!",
    "🌟 Software Development",
    "   sometime I’m a software engineer specializing in building (and occasionally designing)exceptional digital experiences."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Mongo DB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "photoshop / Illustrator",
      fontAwesomeClassname: "fas fa-pen-nib"
    },

    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Unity-3D",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: " Adobe Premire Pro",
      fontAwesomeClassname: "fas fa-film"
    },
    {
      skillName: " PHP",
      fontAwesomeClassname: "fab fa-php"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Sri Jayewardenepura",
      logo: require("./assets/images/logo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "March 2020 - Present",
      desc: "",
      descBullets: [
        " I am currently pursuing a Bachelor of Science (Hons) in Information Technology degree. ",
        " Throughout my university tenure, I have actively contributed to various clubs and successfully executed numerous projects, showcasing my dedication and proficiency in both academic and practical domains.",
        
        
      ]
    },
    {
      schoolName: "Computer Society Of Sri Lanka",
      logo: require("./assets/images/uiux.png"),
      subHeader: "Certified Ui / UX Developer",
      duration: "March 2022 - February 2023",
      desc: "",
      descBullets: [
        " I possess proficiency in utilizing a diverse array of design and prototyping tools, including but not limited to Figma.",
        " I have successfully delivered numerous UI/UX projects, showcasing my expertise in creating seamless and user-centric design solutions.",
        
      ]
    },
    {
      schoolName: "National Youth Services Council",
      logo: require("./assets/images/nysc.png"),
      subHeader: "NVQ Level 4 in Information Technology",
      duration: "January 2016- March 2017",
      
      descBullets: ["I have acquired proficiency in the Microsoft Office suite, operating systems, graphic design, networking, and programming through vocational training."]
    },
    {
      schoolName: "Tangalle Girls School",
      logo: require("./assets/images/tbv.png"),
      subHeader: "Advanced level",
      duration: "January 2017- March 2020",
      
      descBullets: ["I attended Tangalle Girls' College to pursue my Advanced Level education.",
      " During this period, I selected Logic, Media, and Political Science as my subjects. ",
      "This strategic choice not only facilitated my successful attainment of Two A Passes and a B Pass (AAB) in the Advanced Level examinations but also paved the way for the realization of my aspirations to enter university."]
    },
    {
      schoolName: "H/ Vijayaba National School",
      logo: require("./assets/images/vns2.png"),
      subHeader: "Primary to O/L",
      duration: "January 2004-January 2017",

      descBullets: ["I attended Hungama Vijayaba National College from my primary education through the Ordinary Level examinations",
      " This school played a crucial role in my academic journey, contributing significantly to my success in the Ordinary Level examinations where I achieved high grades, with A grades in 6 subjects and B grades in 3 subjects. (A-6, B-3)",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Html / Css", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
   
    {
      Stack: "Java script",
      progressPercentage: "50%"
    },
    {
      Stack: "React native",
      progressPercentage: "20%"
    },
    {
      Stack: "Mern",
      progressPercentage: "30%"
    },
    {
      Stack: "bootstrap",
      progressPercentage: "50%"
    },{
      Stack: "Python",
      progressPercentage: "70%"
    },
    {
      Stack: "Figma",
      progressPercentage: "90%"
    },
    {
      Stack: "Photoshop / Illustrator",
      progressPercentage: "90%"
    },
    {
      Stack: "Premire Pro",
      progressPercentage: "50%"
    },
    {
      Stack: "PHP",
      progressPercentage: "50%"
    },
     {
      Stack: "Laravel",
      progressPercentage: "20%"
    },
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
     {
      role: "Software Engineer Intern",
      company: "Arthur C Clarke Institute for Modern Technologies",
      companylogo: require("./assets/images/arthur.png"),
      date: "August 2023 – February 2024",
      desc: ["Collaborated with Buddhist and Pali University on various software projects, providing expertise in MySQL, PHP, and Laravel technologies. Played a key role in developing and enhancing projects, showcasing proficiency in areas such as database management, frontend and backend development. Implemented efficient solutions to meet project requirements, ensuring the seamless functionality of the system."]
    },
    {
      role: "Graphic Designer & Accountant",
      company: "Solid Graphic",
      companylogo: require("./assets/images/solid.png"),
      date: "April 2019 – March 2020",
      
      desc: [
        " I ensured that company books are balanced, company  tax obligations are covered, and that I was be able to make confident business decisions based on sound financial data.And as a graphic designer I created posters, websites, logos, brochures, magazines and many other materials to communicate ideas and information visually. "
      ]
    },
 
    {
      role: "Graphic Designer",
      company: "IEEE Student Branch USJP",
      companylogo: require("./assets/images/ieee.jpg"),
      date: "July 2021 – Present",
      desc: "Institute of Electrical and Electronic Engineers is the world’s largest association of technical professionals with more than 400,000 members representing over 150 countries around the world.I could gather wide range of disciplines, including information technology, information assurance, telecommunication, nanotechnology and many more.  "
    },
    {
      role: "Task Master",
      company: "Japura Voice",
      companylogo: require("./assets/images/jv.png"),
      date: " March 2021 – Present",
      desc: "J’pura Voice,is the Official Media and Broadcasting Unit of USJ.As a taskmaster of programming division I could be a part of a lots of projects like creators aid and japura voice rebranding project and gather knowledge of vedio editing,filming,news making,dubbing and graphics.  "
    },
    {
      role: "Media Crew Member",
      company: "Leo Club of District 306 C2",
      companylogo: require("./assets/images/leo1.jpg"),
      date: " February 2021 – Present",
      desc: "Leo Club of District 306 C2 University of Sri Jayewardenepura sponsored by Lions Club of Colombo Chariot is established in the year 2019 .so I could develop my leadership qualities by participating in social activities.And also I am giving my visual design support for charity."
    },
    {
      role: "Graphic designer",
      company: "SEDS J'Pura",
      companylogo: require("./assets/images/ab.png"),
      date: " February 2021 – Present",
      desc: "(SEDS) is a space exploration organization.As a web developer and graphic designer I participated in projects as well as to attend conferences, publish my works & become more effective in my present and future careers in industry, academia, government, and education. "
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Designing Projects 🎨",
  subtitle: "There are so many designing projects that I have done so far.",
  projects: [
    {
      image: require("./assets/images/coffe.png"),
      projectName: "Coffee table book",
      projectDesc:
        "Coffee table books need lots of it, in the form of generous margins, space around images, and space between lines of type.This coffee table book is a must-have for anyone who loves horror .I have included so many interesting characters.logos are designed using illustrator. Totaly book is designed using photoshop.Hallowin feeling is explored everywhere.",

      footerLink: [
        {
          name: "Visit project",
          url: "https://www.behance.net/gallery/138281981/Cooffe-table-book"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/graphic.png"),
      projectName: "Graphic designs",
      projectDesc:
        "Graphic designs combine these three elements to form a single, cohesive visual composition of ideas and messaging.I am working in a lots of clubs in the university.So I have to create Flyers,Posters,Coffee table book,logos,digital Arts,Presentations for variety of purposes.Usually I am using photoshop & Illustrator for my designs.",

      footerLink: [
        {
          name: "View projects",
          url: "https://www.behance.net/nipuniudari1"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/UI.png"),
      projectName: "UI/UX designs",
      projectDesc:
        "The first impressions are 94% design related.I designed apps and website user interface using figma online tool.I got a new look for the website by Using different buttons, navigations, colors , pictures.I always try to reach a new look and feel for the projects.",

      footerLink: [
        {
          name: "View projects",
          url: "https://www.behance.net/nipuniudari1"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some Other projects you have worked on


const ExtraProjects = {
  title: "Other Projects 📂",
  subtitle:
    "There are some different kind of projects that I have done so far.",
  projects: [
    {
      image: require("./assets/images/AR.png"),
      projectName:
        "Research - The impact Of Augmented Reality On Biology Studies in Sri Lankan School Students",
      projectDesc:
        "This research project aims to investigate the impact of augmented reality on biology studies in Sri Lankan school students, with a specific focus on the development of an augmented reality mobile app for human anatomy education.",

      footerLink: [
        {
          name: "View project",
          url: "https://youtu.be/x-8XM5suW6M?si=kMZekwocw6DdZNRu"
        },
        {
          name: "Visit project",
          url: "https://github.com/nipuni-udari/AR-App-Human-anatomy"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/game.png"),
      projectName: "Roll A Ball Game",
      projectDesc:
        "I developed a 3D game using unity platform.I learn throught the development process :Use Unity Editor and its built-in capabilities to set up a simple game environment,Write your own custom scripts to create the game functionality,Create a basic user interface to improve the game experience,Build my game as other people can play it!",

      footerLink: [
        {
          name: "View project",
          url: "https://youtu.be/Mg3f-qKhzSY"
        },
        {
          name: "Visit project",
          url: "https://drive.google.com/drive/folders/1V8MH-zCjBFpnUR8e7I-3_Ne3YUFtQ5QH?usp=share_link"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/iot.png"),
      projectName: "IOT Project",
      projectDesc:
        "smart Dustbin is a very good project from the Arduino board.Smart Dustbin as its name represents it works smartly or we can say that it is an automatic dustbin. it works like when you will come in front of this dustbin it will open automatically with the help of a servo motor. so there is some sensor work to detect the object in front of the dustbin",

      footerLink: [
        {
          name: "View project",
          url: "https://youtu.be/f7r6pQYRCOI"
        },
        {
          name: "Visit project",
          url: "https://github.com/nipuni-udari/Roll_A_Ball_Game"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ICT NVQ LEVEL 4 ",

      image: require("./assets/images/c4.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1sfRCAYySq3FuqWVeK_jhwybI5sfwvSYh/view?usp=sharing"
        },
        {
          name: "Website",
          url: "https://www.tvec.gov.lk/"
        }
      ]
    },

    {
      title: "Python For Beginners",
      image: require("./assets/images/c6.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1gMJ9TOmvSBap2wLNyXk7JIeRoqRycvmv/view?usp=drive_link"
        },
        {
          name: "Website",
          url: "https://open.uom.lk/fullstack-developer.html"
        }
      ]
    },

    {
      title: "Front-End Web development using js & react",
      image: require("./assets/images/c5.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1My0Lh0HKO0rCALfVhVXItzbhdI5Ccgnp/view?usp=sharing"
        },
        {
          name: "Website",
          url: "https://www.devtown.in/events/front-end-web-development-javascript-and-react"
        }
      ]
    },

    {
      title: "Introduction to Deep Learning with OpenCV",
      image: require("./assets/images/c3.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1bmfm8r74TPUzvqlaL8MAZHE7yYpZBiYT/view?usp=share_link"
        },
        {
          name: "Website",
          url: "https://www.linkedin.com/learning/introduction-to-deep-learning-with-opencv"
        }
      ]
    },
    {
      title: "Certified Ui / UX Developer",
      image: require("./assets/images/c1.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1PUpiehlCsp7IyojurbrwHexW4irVK90F/view?usp=sharing"
        },
        {
          name: "Website",
          url: "https://crowdlearn.co/extranet/Numind_Education"
        }
      ]
    },
    {
      title: "D hack Ui / UX challenge",
      image: require("./assets/images/c2.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1bmfm8r74TPUzvqlaL8MAZHE7yYpZBiYT/view?usp=share_link"
        },
        {
          name: "Website",
          url: "https://mgt.sjp.ac.lk/itc/d-hack-2020-final/"
        }
      ]
    },
    {
      title: "Getting started with React",
      image: require("./assets/images/c7.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ujMDhYmUh0CbT3Bo9vgECOTslLOS1K3r/view?usp=sharing"
        },
        {
          name: "Website",
          url: "https://www.devtown.in/events/getting-started-with-react-bootcamp-free-7-days-long-bootcamp"
        }
      ]
    },
    {
      title: "Most oustanding Programmer of the year",
      image: require("./assets/images/c8.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1eTFFRGGK857PFJOWt_vV6YMVqjvv0iV-/view?usp=sharing"
        },
        {
          name: "Website",
          url: "https://jpuravoice.lk/programming-division/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs ✍️",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://udarirajapaksha.medium.com/free-hosting-platforms-2023-f005e594727f",
      title: "Free Hosting platforms-2023",
      description:
        "If you’re looking to start your own website or blog, then you may be wondering where to host it. While there are many paid hosting options available, free hosting platforms can be a great starting point for beginners or those on a tight budget. "
    },
    {
      url: "https://udarirajapaksha.medium.com/static-site-generators-ssg-2023-de77e95daac8",
      title: "Static Site Generators (SSG)-2023",
      description:
        "Are you tired of constantly updating your website’s content and dealing with complex content management systems? Static site generators might be just what you need!"
    },
    {
      url: "https://udarirajapaksha.medium.com/laravel-for-e-commerce-in-2024-building-scalable-online-stores-c4c3a5ac9819",
      title: "Laravel for E-commerce in 2024",
      description:
        "In the rapidly evolving landscape of e-commerce, selecting the right framework for your online store is crucial. As of 2024, Laravel has emerged as a powerhouse in web development, and its role in building and scaling e-commerce platforms is more prominent than ever."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks 📩",
  subtitle: emoji(
    "I'm always excited to engage in conversations—whether it's about my journey, technology trends, or anything that sparks curiosity. Feel free to reach out, and let's have a meaningful discussion"
  ),

  talks: [
    {
      title: "Email me",
      subtitle: "Feel free to ask anything",
      slides_url: "mailto:udariweeraman@gmail.com"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Invention 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://youtu.be/f7r6pQYRCOI"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: ("Contact Me ☎️"),
  subtitle:
    "Feel free to snoop around on my SOCIAL MEDIA.",
  number: "+94-711064083",
  email_address: "udariweeraman@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  ExtraProjects,
  twitterDetails
};
