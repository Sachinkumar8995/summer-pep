import Student from "./Student";

const ClassComponent = () => {
  return (
    <div style={{ backgroundColor: "gray", padding: 10 }}>
      <h1>Class Information</h1>
      <Student />
    </div>
  );
};

export default ClassComponent;