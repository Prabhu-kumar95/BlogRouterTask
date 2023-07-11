import React from "react";
const AllData = [
  {
    id: 1,
    Courseimage: "./DataImages/C1.jpg",
    Courseheading: "Business Analyst  An Insight into Their Life",
    Coursedescription:
      "Have you ever wondered how business tends to maintain everything in proper order despite having",
    Readmore: "READ MORE »",
  },
  {
    id: 2,
    Courseimage: "./DataImages/C2.jpg",
    Courseheading: "Top 15 Business Analyst Interview Questions With Answers",
    Coursedescription:
      "Business Analyst is a dream role for many but cracking the interview round is a",
    Readmore: "READ MORE »",
  },
  {
    id: 3,
    Courseimage: "./DataImages/C3.jpg",
    Courseheading: "Graphic Designer vs. UI/UX Designer",
    Coursedescription:
      "It has always been confusing for people to understand the key differences between Graphic..",
    Readmore: "READ MORE »",
  },
  {
    id: 4,
    Courseimage: "./DataImages/C4.jpg",
    Courseheading: "What is Production Management | The Ultimate Guide",
    Coursedescription:
      "In today’s constantly evolving business landscape, production managers are essential to the success",
    Readmore: "READ MORE »",
  },
  {
    id: 5,
    Courseimage: "./DataImages/C5.jpg",
    Courseheading: "Top Career Options in India in 2023",
    Coursedescription:
      "In today’s rapidly changing world, career choices carry immense significance. As the job market",
    Readmore: "READ MORE »",
  },
  {
    id: 6,
    Courseimage: "./DataImages/C6.jpg",
    Courseheading:
      "Is AWS Certification Worth It? | Best AWS Certifications 2023",
    Coursedescription:
      "IT runs the world and is everywhere. And if you’re someone who’s least interested in",
    Readmore: "READ MORE »",
  },

  {
    id: 7,
    Courseimage: "./DataImages/DS1.jpg",
    Courseheading:
      "How to become a Data Scientist after Mechanical Engineering?",
    Coursedescription:
      "Switching careers can sound quite intimidating especially when you’re a mechanical engineer by educational qualification,",
    Readmore: "READ MORE »",
  },
  {
    id: 8,
    Courseimage: "./DataImages/DS2.png",
    Courseheading: "A Profound Data Scientist’s Career Path ",
    Coursedescription:
      "All kinds of organizations ranging from retail to government, to healthcare depend on data scientists.  ",
    Readmore: "READ MORE »",
  },
  {
    id: 9,
    Courseimage: "./DataImages/DS3.png",
    Courseheading: "Neural Network Skills to Succeed in Data Science",
    Coursedescription:
      "If you’re here, then you already understand what a huge grasp data scientists have in future of many companies",
    Readmore: "READ MORE »",
  },
  {
    id: 10,
    Courseimage: "./DataImages/DS4.png",
    Courseheading: "12 Unique Ways How Data Science Helps Marketing Teams?",
    Coursedescription:
      "Which marketing strategies work? What new methods make a crash? How can the creative domain",
    Readmore: "READ MORE »",
  },
  {
    id: 11,
    Courseimage: "./DataImages/DS5.jpg",
    Courseheading: "6 Tips & Tricks to Crack Data Science Interviews",
    Coursedescription:
      "Data science is one of the world’s top lucrative career choices. How hard it is to colloct the datas from user",
    Readmore: "READ MORE »",
  },
  {
    id: 12,
    Courseimage: "./DataImages/DS6.png",
    Courseheading: "Top 7 Data Science Applications & Use Cases For Businesses",
    Coursedescription:
      "From optimizing our search history on Amazon to providing us with the best Netflix movie for collocting users data",
    Readmore: "READ MORE »",
  },
  {
    id: 13,
    Courseimage: "./DataImages/CS1.png",
    Courseheading:
      "Cybersecurity Vs Ethical Hacking: Top 10 Differences between EH & CS",
    Coursedescription:
      "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
    Readmore: "READ MORE »",
  },
  {
    id: 14,
    Courseimage: "./DataImages/CS2.gif",
    Courseheading:
      "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    Coursedescription:
      "Look around today, you will witness that we are more reliant on technology and devices",
    Readmore: "READ MORE »",
  },
  {
    id: 15,
    Courseimage: "./DataImages/CS3.png",
    Courseheading:
      "Top 10 Ethical Hacking Books for Beginner to Advanced Hacking Technology",
    Coursedescription:
      "Did you know that according to the University of Maryland hackers attack every 39 seconds",
    Readmore: "READ MORE »",
  },
  {
    id: 16,
    Courseimage: "./DataImages/CS4.png",
    Courseheading: "8 Different Types of Cybersecurity and Threats Involved",
    Coursedescription:
      "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from ",
    Readmore: "READ MORE »",
  },
  {
    id: 17,
    Courseimage: "./DataImages/CS5.gif",
    Courseheading: "Is coding required for cybersecurity? ",
    Coursedescription:
      "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,Top 7 Cyber Security Attacks in Real Life",
    Readmore: "READ MORE »",
  },
  {
    id: 18,
    Courseimage: "./DataImages/CS6.jpg",
    Courseheading: "Top 7 Cyber Security Attacks in Real Life",
    Coursedescription:
      "Cyber security attacks are the type of actions that are designed to destroy, steal, modify, a future in cybersecurity tecnology ",
    Readmore: "READ MORE »",
  },
  {
    id: 19,
    Courseimage: "./DataImages/FSD1.jpg",
    Courseheading:
      "Full Stack Developer: Discover the Fastest Route to becoming one ",
    Coursedescription:
      "Full stack developers are an integral part of all organizations, especially product-based companies.",
    Readmore: "READ MORE »",
  },
  {
    id: 20,
    Courseimage: "./DataImages/FSD2.jpg",
    Courseheading: "Ionic vs React Native: Best Mobile App Framework in 2023",
    Coursedescription:
      "Ionic React & React Native are two extraordinary approaches available in React Ecosystem to build",
    Readmore: "READ MORE »",
  },
  {
    id: 21,
    Courseimage: "./DataImages/FSD3.png",
    Courseheading: "Amazon Full Stack Developer Salaries In India",
    Coursedescription:
      "Full Stack Developer salaries at Amazon range from ₹ 4.5 Lakhs to ₹ 46 Lakhs",
    Readmore: "READ MORE »",
  },
  {
    id: 22,
    Courseimage: "./DataImages/FSD4.png",
    Courseheading: "What Skills Are Associated With Full Stack Developers",
    Coursedescription:
      "Are you a java full stack developer? Can you name a Website/App you like the most",
    Readmore: "READ MORE »",
  },
  {
    id: 23,
    Courseimage: "./DataImages/FSD5.jpg",
    Courseheading: "8 Top Full Stack Web Developer Coding Projects For You!",
    Coursedescription:
      "Being a Full Stack Web Developer is more or less like twinning to a one-man",
    Readmore: "READ MORE »",
  },
  {
    id: 24,
    Courseimage: "./DataImages/FSD6.jpg",
    Courseheading: "Know This Before Stepping Into Full Stack Development",
    Coursedescription:
      "Is Sundar Pichai your role model? Do you wish to build your way to top",
    Readmore: "READ MORE »",
  },
];

export default AllData;
