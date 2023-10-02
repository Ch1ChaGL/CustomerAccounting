// src/ClientCard.js
import React from 'react';
import s from './ClientCard.module.css';
const ClientCard = ({ firstName, lastName, photoUrl, email }) => {
  return (
    <div className={s['client-card']}>
      <img
        className={s['client-photo']}
        src={photoUrl}
        alt={`${firstName} ${lastName}`}
      />
      <div className={s['client-info']}>
        <h2>{firstName}</h2>
        <br />
        <h2>{lastName}</h2>
        <br />
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ClientCard;
