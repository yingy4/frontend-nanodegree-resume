/*
This is empty on purpose! Your code to build the resume will go here.
 */


var work = {
	"jobs" : [
		{
			"employer" : "Wolong National Nature Reserve",
			"title" : "Actor",
			"location" : "Sichuan",
			"dates" : "2010-2013",
			"description" : "China Conservation and Research Center for the Giant Panda at the Wolong National Nature Reserve, Sichuan."
		},
		{
			"employer" : "London Zoo",
			"title" : "Actor",
			"location" : "London",
			"dates" : "2013-2016",
			"description" : "Chi Chi at the London Zoo became very popular. This influenced the World Wildlife Fund to use a panda as its symbol."
		}
	]
};

var project = {
	"projects" : [
		{
			"title" : "Animal Trading Cards",
			"dates" : "2016-2016",
			"description" : "project for Panda in Udacity",
			"images" : [
				"images/card.png"
			]
		},
		{
			"title" : "My Portfolio",
			"dates" : "2016-2016",
			"description" : "project for Panda in Udacity",
			"images" : [
				"images/myPortfolio1.png","images/myPortfolio2.png","images/myPortfolio3.png"
			]
		}
	]
};

var bio = {
	"name" : "Great Panda",
	"role" : "Master",
	"contacts" : {
		"mobile" : "1234567890",
		"email" : "myemail@email.com",
		"github" : "mygithub",
		"location" : "Shanghai"
	},
	"welcomeMessage" : "We like eating bamboo!",
	"skill" : [
		"Eat","Sleep","Play","Climb","Swim"
	],
	"biopic" : "images/panda1.jpg"
};

var education = {
	"schools" : [
		{
			"name" : "Peking University",
			"location" : "Beijing",
			"degree" : "Bachelor",
			"majors" : [
				"Eating","Sleeping"
			],
			"dates" : "2000-2004",
			"url" : "http://www.pku.edu.cn/"
		},
		{
			"name" : "Fudan University",
			"location" : "Shanghai",
			"degree" : "Master",
			"majors" : [
				"Swimming","Climbing"
			],
			"dates" : "2004-2006",
			"url" : "http://www.fudan.edu.cn/index.html"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "2006-2007",
			"url" : "https://cn.udacity.com/"
		},
		{
			"title" : "Playing",
			"school" : "Coursera",
			"dates" : "2007-2008",
			"url" : "https://www.coursera.org/"			
		}
	]
};


bio.display = function() {


	$("#header").append(HTMLheaderName.replace("%data%",bio.name));
	$("#header").append(HTMLheaderRole.replace("%data%",bio.role));
	$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
	$("#header").find('img').attr('alt','My bio picture');
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
	$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

	if (bio.skill.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i in bio.skill) {
			$("#skills").append(HTMLskills.replace("%data%",bio.skill[i]));
		}
	}
};

bio.display();

work.display = function() {
	if (work.jobs.length > 0) {
		for (var i in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[i].employer)+HTMLworkTitle.replace("%data%",work.jobs[i].title));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[i].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
		}
	}	
};

work.display();

$(document).click(function(loc) { 
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName(name) {
	var names = name.split(" ");
	return names[0].slice(0,1).toUpperCase()+names[0].slice(1).toLowerCase()+" "+names[1].toUpperCase();
}

project.display = function() {
	if (project.projects.length > 0) {
		for (var i in project.projects) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.projects[i].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%",project.projects[i].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project.projects[i].description));
			if (project.projects[i].images.length > 0) {
				for (var j in project.projects[i].images) {
					$(".project-entry:last").append(HTMLprojectImage.replace("%data%",project.projects[i].images[j]));
				}
				$(".project-entry:last").find('img').attr('alt','Picture for my project');
			}
		}
	}
};

project.display();

education.display = function() {
	if (education.schools.length > 0) {
		for (var i in education.schools) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[i].name)+HTMLschoolDegree.replace("%data%",education.schools[i].degree));
			$(".education-entry:last").find('a').attr('href',education.schools[i].url);
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
			if (education.schools[i].majors.length > 0) {
				for (var j in education.schools[i].majors) {
					$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]));
				}
			}
		}
	}

	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for (var k in education.onlineCourses) {
			$("#education").append(HTMLonlineStart);
			$(".online-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[k].title)+HTMLonlineSchool.replace("%data%",education.onlineCourses[k].school));
			$(".online-entry:last").find('a').attr('href',education.onlineCourses[k].url);
			$(".online-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[k].dates));
		}
	}
};

education.display();

$("#mapDiv").append(googleMap);