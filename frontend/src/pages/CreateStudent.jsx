import React from "react";
import Title from "../components/atoms/Title";
import StudentForm from "../components/molecules/StudentForm";

const CreateStudent = () => {
  return (
    <div className="px-2 sm:px-6 md:px-10 lg:px-40 xl:px-96">
      <Title text="Student Form" />
      <StudentForm />
    </div>
  );
};

export default CreateStudent;
