import React , {useState} from "react";
import "./BoardElement.css";
import Cell from "./Cell";
function BoardElement(props) {



  return (
    <div className="game--container">
      <Cell next = {props.next}   />
      <Cell next = {props.next} />
      <Cell next = {props.next} />
      <Cell next = {props.next} />
      <Cell next = {props.next} />
      <Cell next = {props.next} />
      <Cell next = {props.next} />
      <Cell next = {props.next} />
      <Cell next = {props.next} />
    </div>
  );
}

export default BoardElement;
