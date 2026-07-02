import React from "react";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();
  const courses = [
    { id: 1, name: "React" },

    { id: 2, name: "Java" },

    { id: 3, name: "Node" },
  ];
  const handleNavigate = (id) => {
    navigate(`/dashboard/courses/${id}`);
  };
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
