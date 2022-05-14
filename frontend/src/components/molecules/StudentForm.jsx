import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../../store/api";

const StudentForm = () => {
  const { mutateAsync } = useMutation(api.createPerson);
  const queryClient = new useQueryClient();

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      full_name: "",
      card_id: "",
      phone_number: "",
      role: "Student",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(3, "Name must be more than 3 characters")
        .required("Name should not be empty"),
      card_id: Yup.string()
        .min(6, "Card id must me more than 6 characters")
        .required("Card ID should be empty"),
      phone_number: Yup.number()
        .min(6, "Phione number must me more than 6 characters")
        .required("Phone number should be empty"),
    }),
    onSubmit: async (values) => {
      await mutateAsync(values);
      queryClient.invalidateQueries("person");
      resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 md:gap-5">
      <div className="mb-5">
        <p className="m-2">
          <b> Full name</b>
          {touched.full_name && errors.full_name ? (
            <span className="text-red-400 block">{errors.full_name}</span>
          ) : null}
        </p>
        <input
          className={`px-4 py-3 bg-[#F0F4F5] outline-none rounded w-full ${
            touched.full_name && errors.full_name ? "bg-red-200" : null
          }`}
          type="text"
          placeholder="Type full name"
          id="full_name"
          onChange={handleChange}
          value={values.full_name}
          onBlur={handleBlur}
        />
      </div>
      <div className="mb-5">
        <p className="m-2">
          <b> ID card</b>
          {touched.card_id && errors.card_id ? (
            <span className="text-red-400 block">{errors.card_id}</span>
          ) : null}
        </p>
        <input
          className={`px-4 py-3 bg-[#F0F4F5] outline-none rounded w-full ${
            touched.card_id && errors.card_id ? "bg-red-200" : null
          }`}
          type="text"
          placeholder="Type Card ID"
          id="card_id"
          onChange={handleChange}
          value={values.card_id}
          onBlur={handleBlur}
        />
      </div>
      <div className="mb-5">
        <p className="m-2">
          <b> Phone number</b>
          {touched.phone_number && errors.phone_number ? (
            <span className="text-red-400 block ">{errors.phone_number}</span>
          ) : null}
        </p>
        <input
          className={`px-4 py-3 bg-[#F0F4F5] outline-none rounded w-full ${
            touched.phone_number && errors.phone_number ? "bg-red-200" : null
          }`}
          type="text"
          placeholder="Type Phone number"
          id="phone_number"
          onChange={handleChange}
          value={values.phone_number}
          onBlur={handleBlur}
        />
      </div>
      <div className="mb-5">
        <p className="m-2">
          <b>Roll</b>
        </p>
        <select
          name="role"
          onChange={handleChange}
          value={values.role}
          className="border border-gray px-4 py-3 outline-none"
        >
          <option value="Student">Student</option>
          <option value="Faculty">Faculty</option>
          <option value="Staff">Staff</option>
        </select>
      </div>
      <div className="mb-5 md:col-span-2">
        <button
          type="submit"
          className="px-4 py-4 bg-green rounded w-full duration-300 hover:bg-[#92efbf]"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
