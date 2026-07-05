import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {}, []);

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
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <button onClick={() => handleNavigate(course.id)}>
            {course.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Course;
