import React from "react";
import Home from "../components/Home";
import Carousel from "../components/Carousel";
export default function HomePage(props) {
  return (
    <div>
      <Home title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />
    </div>
  );
}
