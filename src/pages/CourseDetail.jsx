import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const CourseDetail = () => {
  /* 

  const [course, setCourse] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${courseId}`,
        );
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [courseId]); */

  const { courseId } = useParams();
  const {
    data: course,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${courseId}`);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div
        key={course.id}
        className="flex justify-around items-center flex-col bg-slate-800 px-4 py-8 w-[300px] h-[300px] rounded-lg shadow-md shadow-white cursor-pointer hover:transform hover:-translate-y-1"
      >
        <h1 className="text-3xl text-rose-400 font-semibold font-serif">
          {course.name}
        </h1>
        <span className="text-gray-400 font-bold">Email: {course.email}</span>
        <h2 className="text-xl text-teal-200">{course.company.name}</h2>
      </div>
    </>
  );
};

export default CourseDetail;
