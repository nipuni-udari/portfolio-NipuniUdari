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
  subTitle:(
    " I'm all about combining visual design with product thinking to bring meaningful experiences alive who's passionate about creating digital experiences through problem-solving. I fell in love with coding, exploring, travelling, Photography,Painting,designing."
  ),
  resumeLink:
  "https://drive.google.com/file/d/1iRBY31Nx2cccHF7BTYY9SlirOuSmOX0T/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nipuni-udari",
  linkedin: "https://www.linkedin.com/in/nipuni-udari-922062218/",
  gmail: "96770@fhss.sjp.ac.lk",
  instagram:"https://www.instagram.com/nipuni.udari/",
  telegram:"@Udari_rajapaksha",
  behance:"https://www.behance.net/nipuniudari1",
  twitter:"https://twitter.com/NipuniUdari",
  blogger:"https://www.blogger.com/profile/15777733763543233156",
  
  facebook: "https://www.facebook.com/nipuni.udari.92",
  
  stackoverflow: "https://stackoverflow.com/users/18332438/nipuni-udari",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Skills",
  subTitle: "Hello! I have a passion for exploring technical world.",
  skills: [
    (
      "📌 Mobile App Ui Design"
    ),
    (" I’m passionate about pushing products to the next level through a design process visually stunning user-focused UI."),
    (
      "📌 Website Development"
    ),
    (" I have a passion for front end web development and have experience in coding HTML,CSS,JAVA SCRIPT"),
    (
      "📌 Graphic design"
    ),
    (" I love graphic design and have experience in designing brands,logos,flyers,Book covers,Powerpoint presentations."),
    (
      "📌 Mobile App Development"
    ),
    ("  I design & develop highly engaging digital experiences for the mobile using react native . Be it in, Android"),
    
    (
      "📌 Video Editing"
    ),
    ("  I have experience working on video projects for variety of purposes,and really enjoy working on video production!"),
    (
      "📌 Software Development"
    ),
    ("   sometime I’m a software engineer specializing in building (and occasionally designing)exceptional digital experiences."),
    
    
    
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
      fontAwesomeClassname: "fas fa-gamepad"  
    },
    {
      skillName: " Adobe Premire Pro",
      fontAwesomeClassname: "fas fa-film"  
    },


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
        " In the First year I followed Statistics ,Media,Anthropology and ICT. ",
        " Now I am following ICT BSC.Hons degree.",
        " I am working for a lots of clubs and I have completed so many projects in my university life.",
        
      ]
    },
    {
      schoolName: "National Youth Services Council",
      logo: require("./assets/images/nysc.png"),
      subHeader: "NVQ Level 4 in Information Technology",
      duration: "January 2016- March 2017",
      
      descBullets: ["I have learnt Ms office package,Operating System,Graphic design ,networking,programming through Vocational training  etc:"]
    },
    {
      schoolName: "Tangalle Girls School",
      logo: require("./assets/images/tbv.png"),
      subHeader: "Advanced level",
      duration: "January 2017- March 2020",
      
      descBullets: ["I went to Tangalle girls college for studying Advanced level",
      " I followed Logic,Media,Political as my Advanced level subjects",
      "It helps to pass my advanced level exam with Two A Passes & B pass (AAB) and come through my university dream."]
    },
    {
      schoolName: "H/ Vijayaba National School",
      logo: require("./assets/images/vns2.png"),
      subHeader: "Primary to O/L",
      duration: "January 2004-January 2017",

      descBullets: ["I went to Hungama vijayaba national  college since my primary to  ordinary level .",
      "It helps to pass my o/l with high marks(A-6 , B-3)."]
      
      
    }
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
      progressPercentage: "40%"
    },
    {
      Stack: "Mern",
      progressPercentage: "40%"
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
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
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
      role: "Bank Assistant",
      company: "Regional Development Bank",
      companylogo: require("./assets/images/rdb.jpg"),
      date: "January 2019 – March 2019",
      desc: "As a bank assistant I have Gathered and analyzed financial and related data of customers.Assist customers in handling their deposits and check payments.Assist banking personnel in preparing and also I checked bank documents and statements and Ensure compliance of security and banking policies and guidelines in banking assistant functions."
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
  title: "Designing Projects",
  subtitle: "There are so many designing projects that I have done so far.",
  projects: [
    {
      image: require("./assets/images/coffe.png"),
      projectName: "Coffee table book",
      projectDesc: "Coffee table books need lots of it, in the form of generous margins, space around images, and space between lines of type.This coffee table book is a must-have for anyone who loves horror .I have included so many interesting characters.logos are designed using illustrator. Totaly book is designed using photoshop.Hallowin feeling is explored everywhere.",
      
      footerLink: [
        {
          name: "Visit project",
          url: "https://www.behance.net/gallery/138281981/Cooffe-table-book"
        },
        //  you can add extra buttons here.
      ]
    },
    
    {
      image: require("./assets/images/graphic.png"),
      projectName: "Graphic designs",
      projectDesc: "Graphic designs combine these three elements to form a single, cohesive visual composition of ideas and messaging.I am working in a lots of clubs in the university.So I have to create Flyers,Posters,Coffee table book,logos,digital Arts,Presentations for variety of purposes.Usually I am using photoshop & Illustrator for my designs.",
      
      footerLink: [
        {
          name: "View projects",
          url: "https://www.behance.net/nipuniudari1"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/UI.png"),
      projectName: "UI/UX designs",
      projectDesc: "The first impressions are 94% design related.I designed apps and website user interface using figma online tool.I got a new look for the website by Using different buttons, navigations, colors , pictures.Accourding to the given feedbacks it is a user friendly UI and easy to use.I always try to reach a new look and feel for the projects.And using some online websites for pics.",
      
      footerLink: [
        {
          name: "View projects",
          url: "https://www.behance.net/nipuniudari1"
        },
        //  you can add extra buttons here.
      ]
    },
   
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some Other projects you have worked on


const ExtraProjects = {
  title: "Other Projects",
  subtitle: "There are some different kind of projects that I have done so far.",
  projects: [
    {
      
      image: require("./assets/images/game.png" ),
      projectName: "Roll A Ball Game",
      projectDesc: "I developed a 3D game using unity platform.I learn throught the development process :Use Unity Editor and its built-in capabilities to set up a simple game environment,Write your own custom scripts to create the game functionality,Create a basic user interface to improve the game experience,Build my game as other people can play it!",
      
      footerLink: [
        {
          name: "View project",
          url: "https://youtu.be/Mg3f-qKhzSY"
        },
        {
          name: "Visit project",
          url: "https://drive.google.com/drive/folders/1V8MH-zCjBFpnUR8e7I-3_Ne3YUFtQ5QH?usp=share_link"
        },
        //  you can add extra buttons here.
      ],
      
      
    },
    
    {
      image: require("./assets/images/iot.png"),
      projectName: "IOT Project",
      projectDesc: "smart Dustbin is a very good project from the Arduino board.Smart Dustbin as its name represents it works smartly or we can say that it is an automatic dustbin. it works like when you will come in front of this dustbin it will open automatically with the help of a servo motor. so there is some sensor work to detect the object in front of the dustbin",
      
      footerLink: [
        {
          name: "View project",
          url: "https://youtu.be/f7r6pQYRCOI"
        },
        //  you can add extra buttons here.
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: ("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ICT NVQ LEVEL 4 ",
      
      image: require("./assets/images/1.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1sfRCAYySq3FuqWVeK_jhwybI5sfwvSYh/view?usp=sharing"
        },
        {
          name: "Website",
          url: "https://www.tvec.gov.lk/"
        },
      ]
    },
    
    {
      title: "Introduction to IoT",
      image: require("./assets/images/2.png"),
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/3fb711e3-de3d-4311-8870-06d2447b3d52?source=linked_in_profile"},
        {
          name: "Website",
          url: "https://www.cisco.com/c/en/us/solutions/internet-of-things/overview.html"
        },
      ]
    },

    {
      title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
      image: require("./assets/images/3.png"),
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/XSDVZ3NN7ACW"},
        {
          name: "Website",
          url: "https://www.coursera.org/learn/introduction-tensorflow"
        },
      ]
    },

    {
      title: "Introduction to Deep Learning with OpenCV",
      image: require("./assets/images/6.png"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1bmfm8r74TPUzvqlaL8MAZHE7yYpZBiYT/view?usp=share_link"},
        {
          name: "Website",
          url: "https://www.linkedin.com/learning/introduction-to-deep-learning-with-opencv"
        },
      ]
    },
   

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://nipuni-udari.blogspot.com/2022/02/role-of-mass-media-in-managing-covid-19.html",
      title: "Role of mass media in managing Covid-19 Pandemic",
      description:
        "COVID-19 is a global crisis that has spread throughout the world at a dangerously fast pace. Mass media plays a huge role in circulating information, influences the public behavior and can curtail the spread of disease. "
    },
    {
      url: "https://nipuni-udari.blogspot.com/2022/02/how-new-media-changed-fundamental.html",
      title: "How New Media Changed the Fundamental Nature of the Communication",
      description:
        "The emergence of globalization  in the first decade of the twenty-first century was itself a revolution in the short history of the New media, fostering the rise of social media and other interactive, crowd-based communication tools."
    },
    {
      url: "https://nipuni-udari.blogspot.com/2022/03/how-communication-elements-operated-in.html",
      title: "How communication elements operated in the communication process when spreading corona pandemic information via television.",
      description:
        "A novel coronavirus is a virus that causes the disease COVID-19 (SARS-coV-2, previously known as 2019-nCoV), which causes an acute respiratory illness has started in China in December 2019 and spread throughout the world. Due to outbreak of COVID-19 Disease more than half of the world is practicing lockdown, which made a deep impact on our daily life routine, unlike we used to practice before. But as we know that to lower the spread of virus we require social distancing.  These days massive effect of media is seen. According to a survey there is 87% of increase in social media usage during lockdown."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "I'd love to hear from you, just to discuss anything.I love to talk about myself & technology"
  ),

  talks: [
    {
      title: "Email me",
      subtitle: "Feel free to ask anything",
      slides_url: "mailto:96770@fhss.sjp.ac.lk",
      
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
  email_address: "96770@fhss.sjp.ac.lk"
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
