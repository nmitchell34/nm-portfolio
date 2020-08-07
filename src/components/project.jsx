import React, { useEffect, useState } from "react";
import EntertainMe from "../Images/EntertaiMeMain.png"
import BootcampConnect from "../Images/profile_page.png"
import JSQuiz from "../Images/2020-06-22 (4).png"
import DayPlanner from "../Images/2020-06-22 (6).png"
import EmployeeTracker from "../Images/employeeTracker.gif"
import NoteTaker from "../Images/noteTakerImg.png"

function Project() {
  const [projects, setProjects] = useState({
    proj: [
      {
        imgSRC: EntertainMe,
        deployedHREF: "https://mayastucky.github.io/gt-project-1/",
        appName: "Entertain Me App",
        repoHREF: "https://github.com/nmitchell34/gt-project-1",
      },
      {
        imgSRC: BootcampConnect,
        deployedHREF: "https://git-bootcamp-connect.herokuapp.com/",
        appName: "BootCampConnect",
        repoHREF: "https://github.com/danieldrojas/gt-bootcamp-connect",
      },
      {
        imgSRC: JSQuiz,
        deployedHREF: "https://nmitchell34.github.io/Bootcamp_HW5/",
        appName: "Day Planner",
        repoHREF: "https://github.com/nmitchell34/Bootcamp_HW5",
      },
      {
        imgSRC: DayPlanner,
        deployedHREF: "https://mayastucky.github.io/gt-project-1/",
        appName: "Entertain Me App",
        repoHREF: "https://github.com/nmitchell34/gt-project-1",
      },
      {
        imgSRC: EmployeeTracker,
        deployedHREF: "",
        appName: "Employee Tracker",
        repoHREF:
          "https://github.com/nmitchell34/Bootcamp_HW12_EmployeeTracker",
      },
      {
        imgSRC: NoteTaker,
        deployedHREF: "https://bootcamp-hw11-gt-note-taker.herokuapp.com/",
        appName: "Note Taker",
        repoHREF: "https://github.com/nmitchell34/Bootcamp_HW11",
      },
    ],
  });

  return (
    <div>
      {projects.proj.map((proj) => (
        <div className="thumbnail text-center">
          <img
            className="img-responsive"
            src={proj.imgSRC}
            alt="Entertain me project"
          />
          <div className="caption">
            <a
              href={proj.deployedHREF}
              target="_blank"
            >
              {proj.appName}
            </a>
          </div>
          <br />
          <div className="caption caption2">
            <a
              href={proj.repoHREF}
              target="_blank"
            >
              Repository
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
