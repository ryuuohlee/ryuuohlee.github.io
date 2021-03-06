import React from 'react';
import EduList from '../components/Education/EduList.jsx';
import CertList from '../components/Education/Certification/CertList.jsx';
import Achievements from '../components/Education/Achievements/Achievements.jsx';
import Certificates from '../components/Education/Certification/Certificates.jsx';
import './Experience.css';
import { schools, certifications } from '../database/education.js'

class Education extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      schools: schools,
      certifications: certifications
    }
  }
  render() {
    let {schools, certifications} = this.state;
    return(
      <div className="experience-body">
        <h2 className="section-title">
          Education:
        </h2>
        {/**Learning Institutions */}
        <div className="experience-current">
          <h3>Institution</h3>
          <EduList schools={schools} />
        </div>
        {/**Certifications */}
        <div className="experience-past">
          <CertList certificates={certifications}/>
        </div>
      </div>
    )
  }
}

export default Education;