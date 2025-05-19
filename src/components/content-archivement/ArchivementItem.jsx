import React from 'react';
import './ArchivementItem.css';

const ArchivementItem = ({ archivement, itemIndex }) => {
  return (
    <li className={`archivement-item ${itemIndex !== 0 ? 'seperate-left' : ''}`}>
      <img className="archivement-item-img" src={archivement.icon}
        alt={`${archivement.title} Archivement`} />
      <section className="archivement-item-detail">
        <span className="archivement-item-header">{archivement.title}</span>
        <span className="archivement-item-number">{Number(archivement.value).toLocaleString()}</span>
        {
          archivement.type === 1 ?
            <section className="archivement-item-rate">
              {
                archivement.rateUp ?
                  <img className="archivement-item-rate-icon" src="./src/assets/icons/archivement/arrow-up.svg"
                    alt="Up Icon" /> :
                  <img className="archivement-item-rate-icon" src="./src/assets/icons/archivement/arrow-down.svg"
                    alt="Down Icon" />
              }
              <span className={`archivement-item-rate-number ${archivement.rateUp ? 'rate-up' : 'rate-down'}`}>{archivement.rate}%</span>
              <span className="archivement-item-rate-text">this month</span>
            </section>
            :
            <section className="archivement-item-members">
              {
                archivement.active.map((member, index) => (
                  <img key={index} className="archivement-item-member" src={member} alt={`Member ${index}`} />
                ))
              }
            </section>
        }
      </section>
    </li>
  )
}

export default ArchivementItem;