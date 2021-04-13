import React from 'react';
import EduCard from './EduCard.jsx';

const EduList = props => {
  console.log(props)
  let schools = props.schools;
  return(
  <div className="experience-past">
    {schools.map(school => <EduCard school={school} key={school.id}/>)}
  </div>
  )
};

export default EduList;