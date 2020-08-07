import React from "react";

const project = () => {
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
        repoHREF: "https://github.com/nmitchell34/Bootcamp_HW12_EmployeeTracker",
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
      <div className="thumbnail text-center">
        <img
          className="img-responsive"
          src="./Images/EntertaiMeMain.png"
          alt="Entertain me project"
        />
        <div className="caption">
          <a href="https://mayastucky.github.io/gt-project-1/" target="_blank">
            Entertain Me App
          </a>
        </div>
        <br />
        <div className="caption caption2">
          <a href="https://github.com/nmitchell34/gt-project-1" target="_blank">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default project;
