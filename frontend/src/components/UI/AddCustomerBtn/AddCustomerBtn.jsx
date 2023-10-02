import React from 'react';
import s from './AddCustomerBtn.module.css';
const AddCustomerBtn = () => {
  return (
    <div className={s['btn']}>
      <div className={s['plus']}>
        +
      </div>
    </div>
  );
};

export default AddCustomerBtn;
