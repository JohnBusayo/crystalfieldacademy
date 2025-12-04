import React from 'react';
import { ArrowLeft, Clock, BarChart, CheckCircle } from 'lucide-react';
import { COURSES } from '../constants';
import { PageView } from '../types';

const CourseDetail = ({ courseId, onNavigate }) => {
  const course = COURSES.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
        <h2>Course not found</h2>
        <button className="btn btn-primary" onClick={() => onNavigate(PageView.COURSES)}>Back to Courses</button>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <div className="container">
        <button 
          className="back-btn" 
          onClick={() => onNavigate(PageView.COURSES)}
        >
          <ArrowLeft size={16} />
          Back to Courses
        </button>

        <div className="detail-header">
          <div className="detail-header-content">
            <span className="badge">{course.level}</span>
            <h1 className="detail-title">{course.title}</h1>
            <p className="detail-price">{course.price}</p>
            <p className="detail-desc">{course.longDescription}</p>
            
            <div className="detail-meta-row">
              <div className="detail-meta-item">
                <Clock size={20} />
                <span>Duration: {course.duration}</span>
              </div>
              <div className="detail-meta-item">
                <BarChart size={20} />
                <span>Level: {course.level}</span>
              </div>
            </div>

            <button 
              className="btn btn-primary btn-large"
              onClick={() => onNavigate(PageView.CONTACT)}
            >
              Enroll Now
            </button>
          </div>
          
          <div className="detail-image-wrapper">
             <img src={course.imageUrl} alt={course.title} className="detail-image" />
          </div>
        </div>

        <div className="syllabus-section">
          <h2 className="section-title" style={{textAlign: 'left'}}>Course Syllabus</h2>
          <div className="syllabus-list">
            {course.syllabus && course.syllabus.map((week, index) => (
              <div key={index} className="syllabus-item">
                <CheckCircle size={20} color="var(--primary)" />
                <span>{week}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;