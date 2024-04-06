import React from 'react';
import './DepartmentInfo.css'; // Import the CSS file

const DepartmentInfo = () => {
  return (
    <div className="department-info">
      <h2 className="section-title">Department of Physical Education</h2>
      <p className="section-text">
        The Department of Physical Education provides training facilities for all students and staff. We boast excellent infrastructure for both outdoor and indoor games, including Badminton, Ball Badminton, Basketball, Cricket, Football, Kabaddi, Kho-Kho, Hand Ball, Hockey, TenniCoit, Throw ball, and Tennis. We also offer facilities for Chess, Caroms, Gymnastics, Table Tennis, Weight Lifting, and multi-Gyms.
      </p>
      <h3 className="subsection-title">Activities</h3>
      <ul className="activity-list">
        <li>Organizing Intramural and Extramural competitions.</li>
        <li>Preparing students for competitions.</li>
        <li>Encouraging participation in Inter-collegiate and Inter University tournaments.</li>
        <li>Organizing coaching camps and open tournaments.</li>
        <li>Conducting tournaments for Teaching and Non-Teaching staff.</li>
      </ul>
    </div>
  );
};

export default DepartmentInfo;
