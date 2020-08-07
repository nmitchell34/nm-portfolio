import React, { useEffect, useState } from "react";

function project() {
  const [projects, setProjects] = useState({
    proj: [
      {
        imgSRC: "../../public/Images/EntertaiMeMain.png",
        deployedHREF: "https://mayastucky.github.io/gt-project-1/",
        appName: "Entertain Me App",
        repoHREF: "https://github.com/nmitchell34/gt-project-1",
      },
      {
        imgSRC: "../../public/Images/2020-06-22 (4).png",
        deployedHREF: "https://mayastucky.github.io/gt-project-1/",
        appName: "Entertain Me App",
        repoHREF: "https://github.com/nmitchell34/gt-project-1",
      },
      {
        imgSRC: "../../public/Images/2020-06-22 (6).png",
        deployedHREF: "https://nmitchell34.github.io/Bootcamp_HW5/",
        appName: "Day Planner",
        repoHREF: "https://github.com/nmitchell34/Bootcamp_HW5",
      },
      {
        imgSRC: "../../public/Images/EntertaiMeMain.png",
        deployedHREF: "https://mayastucky.github.io/gt-project-1/",
        appName: "Entertain Me App",
        repoHREF: "https://github.com/nmitchell34/gt-project-1",
      },
      {
        imgSRC: "../../public/Images/employeeTracker.gif",
        deployedHREF: "",
        appName: "Employee Tracker",
        repoHREF:
          "https://github.com/nmitchell34/Bootcamp_HW12_EmployeeTracker",
      },
      {
        imgSRC: "../../public/Images/noteTakerImg.png",
        deployedHREF: "https://bootcamp-hw11-gt-note-taker.herokuapp.com/",
        appName: "Note Taker",
        repoHREF: "https://github.com/nmitchell34/Bootcamp_HW11",
      },
    ],
  });

  return (
    <div>
      {this.projects.proj.map((proj) => (
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

export default project;
