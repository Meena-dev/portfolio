import React from "react";
import CardInfo from "./CardInfo";
import "../index.css";

export default function Card(props) {
  return (
    <div
      className="d-inline-block g-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className="m-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      ></img>
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}
