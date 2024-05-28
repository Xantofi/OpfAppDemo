import React, { useState, useEffect, useContext } from 'react';
import { ClientsContext } from '../../common/context/ClientsContext';
import { TopBarComponent, ClientListComponent } from '../../components/index';
import {
  OpfLightbox,
  OpfButton,
  OpfButtonGroup,
  OpfSidePanel,
} from '@absis-components/react';
import { router } from '@absis/core';

const ClientListPage = () => {
  const maxShownEntries = 10;
  const navigationManager = router.navigationManager();
  const { clientList, setClientList } = useContext(ClientsContext);

  const [filteredClientList, setFilteredClientList] = useState(clientList);
  const [numPages, setNumPages] = useState(
    Math.trunc(clientList.length / maxShownEntries)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const numStart = (currentPage - 1) * maxShownEntries;
  const [shownClients, setShownClients] = useState(
    clientList.slice(numStart, numStart + maxShownEntries)
  );
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [canCompare, setCanCompare] = useState(true);
  const [openPanel, setOpenPanel] = useState(false);

  useEffect(() => {
    // Only execute when component is mount
    CalculateNumberOfPages(clientList, maxShownEntries, setNumPages);
  }, []);

  useEffect(() => {
    // Only execute when client list state is changed
    setOpenDeleteModal(false);
    CalculateNumberOfPages(clientList, maxShownEntries, setNumPages);
    RefreshShownClients(
      currentPage,
      maxShownEntries,
      setShownClients,
      clientList
    );
  }, [clientList]);

  useEffect(() => {
    // Only execute when filtered client list state is changed
    RefreshShownClients(
      currentPage,
      maxShownEntries,
      setShownClients,
      clientList
    );
  }, [currentPage]);

  const onInput = payload => {
    const searchExpresion = payload.detail.value;
    let newClientList = [];
    searchExpresion === ''
      ? (newClientList = clientList)
      : filteredClientList.map(client => {
          if (client.first_name.includes(searchExpresion)) {
            newClientList.push(client);
          }
        });
    setCurrentPage(1);
    setFilteredClientList(newClientList);
    CalculateNumberOfPages(newClientList, maxShownEntries, setNumPages);
    setShownClients(newClientList.slice(0, 10));
  };

  const onPageChange = ({ value }) => {
    const page = value;
    setCurrentPage(page);
    const numStart = (page - 1) * 10;
    setShownClients(clientList.slice(numStart, numStart + 10));
  };

  const goToEditForm = id => {
    router.navigateTo(
      `/formulario/${id}`,
      { type: 'INTERNAL' },
      navigationManager
    );
  };

  const goToAddForm = () => {
    router.navigateTo(`/formulario`, { type: 'INTERNAL' }, navigationManager);
  };

  const onRemoveClient = id => {
    setOpenDeleteModal(true);
    setSelectedId(id);
  };

  const onRemoveClientConfirmed = () => {
    setClientList(clientList.filter(client => client.id !== selectedId));
    if (clientList.length - 1 <= (currentPage - 1) * maxShownEntries) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openComparator = () => {
    console.log('I AM HERE');
    setOpenPanel(true);
  };

  return (
    <div className="container">
      <div className="row">
        <TopBarComponent
          onInput={onInput}
          goToAdd={goToAddForm}
          openComparator={openComparator}
          canCompare={canCompare}
        />
      </div>
      <div className="row">
        <div className="col-12">
          <ClientListComponent
            clients={shownClients}
            numPages={numPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
            removeClient={onRemoveClient}
            goToEdit={goToEditForm}
          />
          {openDeleteModal && (
            <OpfLightbox
              ariaLabel="lightbox"
              name="`opf-lightbox-${randomString(8)}`"
              open
              topbarConfig={{
                heading: 'Alert',
                headingSrc: '',
                headingTag: 'h1',
                showBack: false,
              }}
              className="text-center"
            >
              Are you sure you want to remove this client?
              <OpfButtonGroup slot="footer">
                <OpfButton
                  onOpfClick={() => {
                    onRemoveClientConfirmed();
                  }}
                >
                  YES
                </OpfButton>
                <OpfButton onOpfClick={() => setOpenDeleteModal(false)}>
                  NO
                </OpfButton>
              </OpfButtonGroup>
            </OpfLightbox>
          )}
        </div>
      </div>
      <OpfSidePanel
        perform="overlay"
        variant="sizeMedium"
        open={openPanel}
        onOpfHide={() => {
          setOpenPanel(false);
        }}
      ></OpfSidePanel>
    </div>
  );
};

function RefreshShownClients(
  currentPage,
  maxShownEntries,
  setShownClients,
  clientList
) {
  const numStart = (currentPage - 1) * maxShownEntries;
  setShownClients(clientList.slice(numStart, numStart + maxShownEntries));
}

function CalculateNumberOfPages(clientList, maxShownEntries, setNumPages) {
  if (clientList.length % maxShownEntries === 0) {
    setNumPages(clientList.length / maxShownEntries);
  } else {
    setNumPages(Math.trunc(clientList.length / maxShownEntries) + 1);
  }
}
export default ClientListPage;
