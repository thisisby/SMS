import React from "react";

const StudentForm = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-5">
      <div className="mb-5">
        <p className="m-2">
          <b> Full name</b>
        </p>
        <input
          className="px-4 py-3 bg-[#F0F4F5] outline-none rounded w-full"
          type="text"
          placeholder="Type full name"
        />
      </div>
      <div className="mb-5">
        <p className="m-2">
          <b> ID card</b>
        </p>
        <input
          className="px-4 py-3 bg-[#F0F4F5] outline-none rounded w-full"
          type="text"
          placeholder="Type Card ID"
        />
      </div>
      <div className="mb-5">
        <p className="m-2">
          <b> Phone number</b>
        </p>
        <input
          className="px-4 py-3 bg-[#F0F4F5] outline-none rounded w-full"
          type="text"
          placeholder="Type Phone number"
        />
      </div>
      <div className="mb-5">
        <p className="m-2">
          <b>Roll</b>
        </p>
        <select className="border border-gray px-4 py-3 outline-none">
          <option value="Student">Student</option>
          <option value="Faculty">Faculty</option>
          <option value="Staff">Staff</option>
        </select>
      </div>
      <div className="mb-5 md:col-span-2">
        <button className="px-4 py-4 bg-green rounded w-full">Submit</button>
      </div>
    </div>
  );
};

export default StudentForm;
