import React from "react";
import Card from "../Card";

const CardHeader = (props) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">First Name<span onClick={props.handleSort}><i id="name" className={props.class}></i></span></th>
            <th scope="col">Last Name<span onClick={props.handleSort}><i id="name" className={props.class}></i></span></th>
            <th scope="col">Email<span onClick={props.handleSort}><i id="email" className={props.class}></i></span></th>
            <th scope="col">Phone<span onClick={props.handleSort}><i id="phone" className={props.class}></i></span></th>
            <th scope="col">Location<span onClick={props.handleSort}><i id="location" className={props.class}></i></span></th>
          </tr>
        </thead>
        <Card results={props.results}></Card>
      </table>
    </div>
  );
}

export default CardHeader;