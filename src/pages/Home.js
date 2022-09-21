import React from "react";

export default function Home() {
  return (
    <div className="homeWrapper">
      <section>
        <div className="homePhoto"></div>
      </section>
      <section>
        <div className="aboutJM">
            <img className="aboutJMImage"></img>
            <p className="aboutJMDescription"></p>
        </div>
      </section>
      <section>
        <div className="recentProjectsList">
            <ul>
                <li>Member: Tampa Bay Society of Photographic Artists</li>
                <li>Exhibitor: 2019 New Mexico Artistic Nude Photography Exhibition, Albuquerque, March 2019</li>
                <li>Exhibitor: 2020 New Mexico Artistic Nude Photography Exhibition, Albuquerque, March 2020</li>
            </ul>
        </div>
      </section>
    </div>
  );
}
