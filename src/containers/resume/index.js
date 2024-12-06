import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { data } from "./utils";
import "react-vertical-timeline-component/style.min.css";
import "./style.scss";
import { MdWork, MdSchool } from "react-icons/md";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="timeline">
        {/* Experience Section */}
        <div className="timeline__section">
          <h3 className="timeline__section__header-text">
            <MdWork size={30} style={{ marginRight: "10px" }} />
            Experience
          </h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__vertical-timeline-element"
              >
                <div className="timeline-element-content">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Education Section */}
        <div className="timeline__section">
          <h3 className="timeline__section__header-text">
            <MdSchool size={30} style={{ marginRight: "10px" }} />
            Education
          </h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__vertical-timeline-element"
              >
                <div className="timeline-element-content">
                  <h3 className="vertical-timeline-element-title">
                    {item.degree}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.institution}
                  </h4>
                  <p>{item.grade}</p>
                  <p>{item.year}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
