import React from "react";
import "./List.css";

function List({ data }) {
  console.log(data);

  let birthdayList = data.map((person) => (
    <React.Fragment key={person.id}>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <img src={person.image} alt={person.name} />
    </React.Fragment>
  ));

  return <div>{birthdayList}</div>;
}

export default List;
