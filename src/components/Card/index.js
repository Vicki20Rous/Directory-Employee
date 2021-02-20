import React from "react";

const Card = (props) => {
  return (
    <tbody>
      {props.results.map((results) => (
        <tr>
          <td><img src={results.picture.medium} alt="profilePicture" /></td>
          <td> {results.name.first}</td>
          <td> {results.name.last}</td>
          <td> {results.email}</td>
          <td> {results.phone}</td>
          <td>{results.location.country}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default Card;