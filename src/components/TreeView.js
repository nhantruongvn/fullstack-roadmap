import React from "react";
import { useState } from "react";
import "./TreeView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faCode,
  faDatabase,
  faTerminal,
  faCodeBranch,
  faArrowsSpin,
  faListCheck,
  faPaintBrush,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

export default function TreeView() {
  // let toggler = document.getElementsByClassName({style});
  // let i;

  // for (i = 0; i < toggler.length; i++) {
  //   toggler[i].addEventListener("click", () => {
  //     this.parentElement.querySelector(".nested").classList.toggle("active");
  //     this.classList.toggle({style}down");
  //   });
  // }

  const [style, setStyle] = useState("caret");

  const changeStyle = () => {
    console.log("You've just clicked on a caret.");
    setStyle("caret-down");
  };

  return (
    <div>
      <div className="container">
        <h3>
          Java Full-stack Road Map
          <small className="text-muted">
            <br></br>
            Nhan Truong
          </small>
        </h3>
        <hr></hr>
        <br></br>
      </div>
      <div>
        <ul id="myUL">
          <li>
            <span className={style} onClick={changeStyle}>
              <FontAwesomeIcon icon={faServer} /> Back-End
            </span>
            <ul className="nested">
              <li>Core Java</li>
              <li>
                <span className={style}>Collections Framework</span>
                <ul className="nested">
                  <li>List</li>
                  <li>Set</li>
                  <li>Map</li>
                </ul>
              </li>
              <li>Lambda Expressions</li>
              <li>Stream API</li>
              <li>Concurrency API</li>
              <li>
                <span className={style}>Spring Boot Framework</span>
                <ul className="nested">
                  <li>JPA</li>
                  <li>Hibernate</li>
                  <li>
                    <span className={style}>Microservices</span>
                    <ul className="nested">
                      <li>Spring Cloud</li>
                      <li>Message Queues</li>
                    </ul>
                  </li>
                  <li>Testing</li>
                </ul>
              </li>
              <li>JavaEE</li>
              <li>
                <span className={style}>Logging</span>
                <ul className="nested">
                  <li>Log4j2</li>
                  <li>LogBack</li>
                </ul>
              </li>
              <li>
                <span className={style}>Build tools</span>
                <ul className="nested">
                  <li>Maven</li>
                  <li>Gradle</li>
                  <li>Ant</li>
                </ul>
              </li>
              <li>RESTful API</li>
            </ul>
          </li>
          <li>
            <span className={style}>
              <FontAwesomeIcon icon={faCode} /> Front-End
            </span>
            <ul className="nested">
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass (Preprocessor)</li>
              <li>
                <span className={style}>CSS Frameworks</span>
                <ul className="nested">
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                </ul>
              </li>
              <li>Javascript</li>
              <li>
                <span className={style}>JS Frameworks</span>
                <ul className="nested">
                  <li>ReactJS</li>
                  <li>Angular</li>
                  <li>VueJS</li>
                </ul>
              </li>
              <li>
                <span className={style}>Package managers</span>
                <ul className="nested">
                  <li>npm</li>
                  <li>Yarn</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span className={style}>
              <FontAwesomeIcon icon={faDatabase} /> Database
            </span>
            <ul className="nested">
              <li>
                <span className={style}>RDBMS (Postgres/ MySQL/ Oracle)</span>
                <ul className="nested">
                  <li>Queries</li>
                  <li>Joins</li>
                  <li>Constraints</li>
                  <li>Indexes</li>
                  <li>Transactions</li>
                  <li>DB Administration</li>
                </ul>
              </li>
              <li>
                <span className={style}>NoSQL</span>
                <ul className="nested">
                  <li>ElasticSearch</li>
                  <li>MongoDB</li>
                </ul>
              </li>
              <li>Graph Database (neo4j)</li>
            </ul>
          </li>
          <li>
            <span className={style}>
              <FontAwesomeIcon icon={faTerminal} /> DevOps
            </span>
            <ul className="nested">
              <li>Linux server</li>
              <li>Docker</li>
              <li>Jenkins</li>
              <li>Kubernetes</li>
              <li>Cloud</li>
            </ul>
          </li>
          <li>
            <span className={style}>
              <FontAwesomeIcon icon={faCodeBranch} /> Version Control System
            </span>
            <ul className="nested">
              <li>Git</li>
              <li>GitHub</li>
              <li>GitLab</li>
            </ul>
          </li>
          <li>
            <span className={style}>
              <FontAwesomeIcon icon={faArrowsSpin} /> Software Development Life
            </span>
            Cycle
          </li>
          <li>
            <span className={style}>
              <FontAwesomeIcon icon={faListCheck} /> Testing
            </span>
            <ul className="nested">
              <li>Unit testing</li>
              <li>Debugging</li>
              <li>Mocking</li>
              <li>Integration testing</li>
            </ul>
          </li>
          <li>
            <span className={style}>
              <FontAwesomeIcon icon={faPaintBrush} /> UX/UI
            </span>
          </li>
          <li>
            <span className={style}>
              <FontAwesomeIcon icon={faMobileScreen} /> Mobile App
            </span>
            <ul className="nested">
              <li>Android Studio & JDK</li>
              <li>Flutter</li>
              <li>React Native</li>
              <li>Kotlin</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
