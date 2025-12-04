import React, { useState } from 'react';
import Navbar from '../src/Components/Navbar.jsx';
import Hero from '../src/Components/Hero.jsx';
import About from '../src/Components/About.jsx';
import Courses from '../src/Components/Courses.jsx';
import Contact from '../src/Components/Contact.jsx';
import Footer from '../src/Components/Footer.jsx';
import CourseDetail from '../src/Components/CourseDetail';
import { PageView } from './types';



const App = () => {
  const [currentPage, setCurrentPage] = useState(PageView.HOME);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const handleCourseSelect = (courseId) => {
    setSelectedCourseId(courseId);
    setCurrentPage(PageView.COURSE_DETAIL);
  };

  const renderContent = () => {
    switch (currentPage) {
      case PageView.HOME:
        return (
            <>
                <Hero onNavigate={setCurrentPage} />
                <Courses onCourseSelect={handleCourseSelect} />
                <About />
                <Contact />
            </>
        );
      case PageView.COURSES:
        return <Courses onCourseSelect={handleCourseSelect} />;
      case PageView.COURSE_DETAIL:
        return <CourseDetail courseId={selectedCourseId} onNavigate={setCurrentPage} />;
      case PageView.ABOUT:
        return <About />;
      case PageView.CONTACT:
        return <Contact />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main style={{ flexGrow: 1 }}>
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;