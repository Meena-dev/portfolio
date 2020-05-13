import React from "react";
import Content from "../components/Content";
import Home from "../components/Home";

export default function AboutPage(props) {
  return (
    <div>
      <Home title={props.title} />

      <Content>
        <p>
          Hello, my name is Meena. I'm a full stack developer with experience in
          Java, SpringBoot, Spring MVC, Hibernate, Express JS, Node JS, MySQL,
          MongoDB, JavaScript, React, BootStrap, CSS and HTML.
        </p>
        <p>
          I'm constantly learning new things. currently those things include
          gaining more experience with JavaScript, React, Express JS, and Node
          JS
        </p>

        <p>My latest practice projects are</p>
        <p>
          1.Simple Puzzle game built with JavaScript. You can check it out{" "}
          <a
            href="https://meena-dev.github.io/Meena-dev-github.io.puzzle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          , or on the homepage.
        </p>
        <p>
          2.React basic Quiz built with React. You can check it out{" "}
          <a
            href="https://meena-dev.github.io/java-quiz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          , or on the homepage.
        </p>
      </Content>
    </div>
  );
}
