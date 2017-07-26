var bio = {
    "name": "Mohit Sharma",
    "role": " Web Developer",
    "contacts": {
        "mobile": "7526834107",
        "email": "msvbs98@gmail.com",
        "twitter": "mohit10398",
        "github": "ms10398",
        "location": "Chandigarh"
    },
    "welcomeMessage": "Work hard till your name is an autograph",
    "skills": ["HTML5", "CSS3", "Javascript", "PHP", "Java"],
    "biopic": "images/profile.jpg",
    "display": function () {
        $("#header").prepend(HTMLbiopic.replace("%data%", bio.bioPic));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        formattedContactInfo = [];
        formattedContactInfo.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
        formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
        formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
        formattedContactInfo.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
        formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));

        }

        for (i = 0; i < formattedContactInfo.length; i++) {
            $("#topContacts").append(formattedContactInfo[i]);
            $("#footerContacts").append(formattedContactInfo[i]);
        }
    }
};
var work = {
    "jobs": [
        {
            "title": "Lorem",
            "employer": "Ipsum",
            "location": "Delhi",
            "dates": "2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
        ],
    "display": function () {
        for (var job=0;job<work.jobs.length;job++) {
            $("#workExperience").append(HTMLworkStart);
            var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formatEmployerTitle = formatEmployer + formatTitle;
            $(".work-entry:last").append(formatEmployerTitle);

            var formatDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formatDates);

            var formatDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formatDescription);
        }
    }
};
var education = {
    "schools": [
        {
            "name": "Chitkara University",
            "location": "Chandigarh",
            "degree": "Conputer Science Engineering",
            "majors": ["Software"],
            "date": "2016-2020",
            "url": "http://www.chitkara.edu.in"
        }
        ],
    "onlineCourses": [
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "date": "2017",
            "url": "http://www.udacity.com"
        }
    ],
    "display": function () {
        for (var school = 0; school < education.schools.length; school++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree), HTMLschoolDates.replace("%data%", education.schools[school].date), HTMLschoolLocation.replace("%data%", education.schools[school].location));
            for (var maj = 0; maj < education.schools[school].majors.length; maj++) {
                HTMLschoolMajor.replace("%data%", education.schools[school].majors[maj]);
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[maj]));
            }
        }

        //online Courses
        $("#education").append(HTMLonlineClasses);
        for (var course = 0; course < education.onlineCourses.length; course++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school), HTMLonlineDates.replace("%data%", education.onlineCourses[course].date), HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url));
        }

    }
};
var projects = {
    "projects": [
        {
            "title": "Portfolio",
            "dates": "2017",
            "description": "My Udacity Portfolio Page"
      },
        {
            "title": "Resume",
            "dates": "2017",
            "description": "My Udacity Resume Page"
      }
  ],
    "display": function () {
        for (var project=0;project<projects.projects.length;project++) {
            $("#projects").append(HTMLprojectStart);
            var formatTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formatTitle);
            var formatDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formatDates);
            var formatDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formatDescription);
        }
    }
};


bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);
