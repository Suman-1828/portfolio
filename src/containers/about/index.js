import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiReact, DiJava } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name:-",
    value: "Suman Kumar",
  },
  {
    label: "DOB:-",
    value: "18/June/1999",
  },
  {
    label: "Address:-",
    value: "Noida",
  },
  {
    label: "Email:-",
    value: "iamsuman.0699@gmail.com",
  },
  {
    label: "Contact Number:-",
    value: "+91 9507036595",
  },
  {
    label: "LinkedIn:-",
    value: "https://www.linkedin.com/in/suman-kumar-2b33851b7/",
  },
  {
    label: "Github:-",
    value: "https://github.com/Suman-1828",
  },
];

const jobSummary =
  "Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Hibernate, Spring Framework, Core Java, JavaScript, and Google Cloud Platform (GCP). Strong engineering professional with a Bachelor of Technology - BTech focused in Electronics and communication from ST. Thomas' College of Engineering and Technology, KOLKATA.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>FullStack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformation">Personal Info</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiJava size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiReact size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
