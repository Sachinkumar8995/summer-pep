// import React from "react";
import { useContext } from "react";
import { SubjectContext } from "./ContextData";

// import Student from "./Student";


const Subject = () => {
    const subject = useContext(SubjectContext);
  return (
    <div style={{ backgroundColor: "blue", padding: 10 }}>
      {/* <h1>Subject Information</h1> */}
      <h1>Subject is: {subject}</h1>
    </div>
  );
};

export default Subject;