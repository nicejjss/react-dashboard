import React from 'react';
import './ContentArchivement.css';
import ArchivementItem from './ArchivementItem';
import membersData from '../../assets/members-archivement.json';
import customerData from '../../assets/customer-archivement.json';
import activeData from '../../assets/active-archivement.json';

const ContentArchivement = () => {
  // Combine all achievement data into an array
  const achievements = [customerData, membersData, activeData];

  return (
    <section id="content-archivement" className="box-shadow">
      <ul id="archivement-list" type="none">
        {achievements.map((achievement, index) => (
          <ArchivementItem key={index} archivement={achievement} />
        ))}
      </ul>
    </section>
  )
}

export default ContentArchivement;