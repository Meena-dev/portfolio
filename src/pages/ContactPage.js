import React from "react";
import Home from "../components/Home";
import Content from "../components/Content";
import Button from "react-bootstrap/Button";

export default function (props) {
  return (
    <div className="justify-content-center">
      <Home title={props.title} />
      <Content>
        <p>
          I recently travelled to Netherlands and actively searching for an job
          opportunity to continue my carrer in software industry. I am currently
          staying in Den Haag, Netherlands.
        </p>
        <p>
          If you have openings that matches with my profile please get in touch.
        </p>
        <br />
        <Button href="mailto:rgmeena@email.com" variant="primary" size="sm">
          CONTACT ME
        </Button>
      </Content>
      <br />
    </div>
  );
}
