import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ClientsContext } from './ClientsContext';
import { clients } from '../../assets/data/Clients';

export const ClientsProvider = ({ children }) => {
  const [clientList, setClientList] = useState(clients);

  return (
    <ClientsContext.Provider value={{ clientList, setClientList }}>
      {children}
    </ClientsContext.Provider>
  );
};
ClientsProvider.propTypes = {
  children: PropTypes.any,
};
