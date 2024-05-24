import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  OpfTable,
  OpfCell,
  OpfCellInfo,
  OpfMenuLauncher,
  OpfMenuContextual,
  OpfMenuItem,
  OpfPagination,
} from '@absis-components/react';

export const ClientListComponent = props => {
  const {
    clients,
    numPages,
    currentPage,
    onPageChange,
    removeClient,
    goToEdit,
  } = props;
  const columns = [
    {
      id: 1,
      header: {
        title1: 'Full name',
        fig1: 'ICO281',
      },
      cell: row => <OpfCellInfo text={row.first_name + ' ' + row.last_name} />,
    },
    {
      id: 2,
      header: {
        title1: 'Email',
        fig1: 'ICO384',
      },
      cell: row => <OpfCellInfo text={row.email} />,
    },
    {
      id: 3,
      header: {
        title1: 'Gender',
        fig1: 'ICO033',
      },
      cell: row => <OpfCellInfo text={row.gender} />,
    },
    {
      id: 4,
      cell: (row, engine) => (
        <OpfCell alignment="center">
          <OpfMenuLauncher
            tabIndex="0"
            onOpfActionMenu={e =>
              engine.doFireEvent('ContextMenuClick', e.detail.action)
            }
          >
            <OpfMenuContextual>
              {row.actions.map(it => (
                <OpfMenuItem
                  key={it.id}
                  action={it.id}
                  onOpfMenuItemClick={event => {
                    if (event.detail.action === 'edit') {
                      goToEdit(row.id);
                    } else if (event.detail.action === 'delete') {
                      removeClient(row.id);
                    }
                  }}
                >
                  {it.name}
                </OpfMenuItem>
              ))}
            </OpfMenuContextual>
          </OpfMenuLauncher>
        </OpfCell>
      ),
    },
  ];

  return (
    <>
      <OpfTable
        data={clients}
        columns={columns}
        refReactDom={ReactDOM}
        expandWidth="full"
      ></OpfTable>
      <OpfPagination
        ariaLabelNext="'arrow next'"
        ariaLabelPrevious="'arrow previous'"
        current={currentPage}
        total={numPages}
        onOpfChange={event => onPageChange(event.detail)}
      />
    </>
  );
};

ClientListComponent.propTypes = {
  clients: PropTypes.array,
  numPages: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  removeClient: PropTypes.func,
  goToEdit: PropTypes.func,
};
