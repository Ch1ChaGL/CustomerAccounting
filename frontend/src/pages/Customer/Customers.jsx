import React, { useEffect, useState } from 'react';
import { getAllCustomers } from '../../API/customerApi';
import s from './Customer.module.css';
import ClientCard from '../../components/ClientCard/ClientCard';
import AddCustomerBtn from '../../components/UI/AddCustomerBtn/AddCustomerBtn';
import CustomerForm from '../../components/CustomerForm/CustomerForm';
const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    fetchCustomers();
  }, []);

  async function fetchCustomers() {
    const customers = await getAllCustomers();
    setCustomers(customers);
  }

  const handleOpenPopup = () => {
    console.log('adsf');
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <CustomerForm isOpen={isPopupOpen} onClose={handleClosePopup} />
      <div className={s.clientСontainer}>
        {customers.map(item => (
          <ClientCard
            email={item.Email}
            firstName={item.FirstName}
            lastName={item.LastName}
            photoUrl={process.env.REACT_APP_API_URL + item.Photo}
          />
        ))}
        <div onClick={() => handleOpenPopup()}>
          <AddCustomerBtn />
        </div>
      </div>
    </>
  );
};

export default Customers;
