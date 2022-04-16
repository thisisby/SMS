import React from "react";
import StudentTrackerItem from "./StudentTrackerItem";

const StudentTracker = ({ students }) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-7 gap-5 py-2 mb-4">
        <h3 className="text-[#c0c3c5] lg:col-span-2">Name</h3>
        <h3 className="text-[#c0c3c5] hidden md:block">Role</h3>
        <h3 className="text-[#c0c3c5] hidden md:block">Phone</h3>
        <h3 className="text-[#c0c3c5] hidden md:block">Leave</h3>
        <h3 className="text-[#c0c3c5] hidden md:block">Come</h3>
        <h3 className="text-[#c0c3c5] justify-self-end md:justify-self-start">
          Status
        </h3>
      </div>
      {students.map((student) => (
        <StudentTrackerItem key={student.id} student={student} />
      ))}
    </>
  );
};

export default StudentTracker;
