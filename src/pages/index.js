import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import CourseDetails from './CourseDetails';
import CourseListing from './CourseListing';
import SearchedCourses from './SearchedCourses';
import StudentDashboard from './StudentDashboard';

const Pages = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/search" element={<SearchedCourses />} />
      </Routes>
    </div>
  )
}

export default Pages;
