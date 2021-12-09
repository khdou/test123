import React from "react";
import Student from "./Student";
import "./styles.css";

export default function Students(props) {
  let studentComponents = [];
  for (let i = 0; i < props.list.length; i++) {
    let student = props.list[i];
    let studentComponent = (
      <Student
        name={student.name}
        year={student.graduationYr}
        school={student.school}
        color={student.favoriteColor}
        genre={student.favoriteGenre}
        video={student.favoriteVideo}
        place={student.place}
        social={student.social}
        key={student.name}
      />
    );
    studentComponents.push(studentComponent);
  }
  return <div className="students">{studentComponents}</div>;
}
