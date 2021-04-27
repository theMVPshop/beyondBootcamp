import React from "react";
import "./about.css";
import linkedin from "./images/linkedin-icon.png";
import github from "./images/github-icon.png";

export default function CrewCard(props) {
  const crew = props.crew;
  return (
    <>
      <div className="crew-card-container">
        <div className="crew-card-text-container">
          <h5 className="crew-card-name">{crew.name}</h5>
          <p className="crew-card-position">{crew.position}</p>
          <a
            className="crew-card-icon"
            href={crew.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="crew-card-icon-image"
              src={linkedin}
              alt="linkedin icon"
            />

            <p className="crew-card-icon-text">
              <span>@</span>
              {crew.linkedinHandle}
            </p>
          </a>
          <a
            className="crew-card-icon"
            href={crew.github}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="crew-card-icon-image"
              src={github}
              alt="github icon"
            />
            <p className="crew-card-icon-text">
              <span>@</span>
              {crew.githubHandle}
            </p>
          </a>
        </div>
        <img
          className="crew-card-image"
          style={{ borderRadius: "15px" }}
          src={crew.image}
          alt="team member"
        />
      </div>
    </>
  );
}
