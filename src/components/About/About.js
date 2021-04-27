import React from "react";
import "./about.css";
import NavBar from "../LandingPage/NavBar";
import CrewCard from "./CrewCard";
import crews from "./crew.json";

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="about-title-container">
        <h1 id="about-title">MEET THE CREW</h1>
      </div>
      <h2 className="about-subtitle">ABOUT US</h2>
      <p className="about-main">
                 Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
        yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog
        yardarm hempen halter furl. Swab barque interloper chantey doubloon
        starboard grog black jack gangway rutters. Deadlights jack lad schooner
        scallywag dance the hempen jig carouser broadside cable strike colors.
        Bring a spring upon her cable holystone blow the man down spanker Shiver
        me timbers to go on account lookout wherry doubloon chase. Belay
        yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom
        heave to. Trysail Sail ho Corsair red ensign hulk smartly boom jib rum
        gangway.
      </p>
      <h2 className="about-subtitle"> THE CREW </h2>
      <div className="crew-container-1">
        {crews.map((crew, id) => (
          <CrewCard key={id} crew={crew} />
        ))}
      </div>
    </>
  );
}
