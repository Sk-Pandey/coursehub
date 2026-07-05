import React, { useState } from "react";

const CourseForm = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    instructor: "",
  });
  //   input handler
  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //   submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.courseName.trim() == "" || formData.instructor.trim() == "") {
      alert("Please fill the input field");
    }
    console.log(formData);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Add New Course
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill in the course details below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Course Name */}
          <div>
            <label
              htmlFor="courseName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              placeholder="Enter course name"
              value={formData.courseName}
              onChange={handleOnchange}
              name="courseName"
              className="w-full rounded-lg border border-gray-300 text-black px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Instructor Name */}
          <div>
            <label
              htmlFor="instructorName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Instructor Name
            </label>
            <input
              type="text"
              id="instructorName"
              placeholder="Enter instructor name"
              value={formData.instructor}
              onChange={handleOnchange}
              name="instructor"
              className="w-full rounded-lg border border-gray-300 text-black px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
