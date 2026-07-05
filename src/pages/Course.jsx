import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Course = () => {
  const navigate = useNavigate();
  /* const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, []); */
  const {
    data: courses,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  const handleNavigate = (id) => {
    navigate(`/dashboard/courses/${id}`);
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="flex flex-wrap justify-around item-center gap-20">
      {courses.map((course) => (
        <div
          key={course.id}
          className="flex justify-around items-center flex-col bg-slate-800 px-4 py-8 w-[300px] h-[300px] rounded-lg shadow-md shadow-white cursor-pointer hover:transform hover:-translate-y-1"
        >
          <h1 className="text-3xl text-rose-400 font-semibold font-serif">
            {course.name}
          </h1>
          <span className="text-gray-400 font-bold">Email: {course.email}</span>
          <h2 className="text-xl text-teal-200">{course.company.name}</h2>
          <button
            onClick={() => handleNavigate(course.id)}
            className="bg-white text-black rounded-lg py-2 px-3 font-semibold capitalize hover:bg-amber-200 cursor-pointer"
          >
            view Detail
          </button>
        </div>
      ))}
    </div>
  );
};

export default Course;
