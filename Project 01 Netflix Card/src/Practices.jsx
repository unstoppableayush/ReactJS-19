export const Practices = () => {
  const students = [1];
  return (
    <>
      {/* 1st solution  */}
      {/* <p>{students.length === 0 && "No Students Found"}</p> */}
      {/* 2nd solution */}
      {/* <p>{!students.length  && "No Students Found"}</p> */}
      {/* 3rd solution */}
      <p>{!Boolean(students.length)  && "No Students Found"}</p>
      <p>Number of Students: {students.length}</p>
      <p>{false}</p>
    </>
  );
};
