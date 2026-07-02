import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { courseId } = useParams();
  return <div>this is course of course id {courseId}</div>;
};

export default CourseDetail;
