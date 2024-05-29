import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
  OpfTable,
  OpfCell,
  OpfControlCheckbox,
  OpfCellInfo,
  OpfMenuLauncher,
  OpfMenuContextual,
  OpfMenuItem,
  OpfPagination,
} from '@absis-components/react';
import { actions } from '../../assets/data/Actions';

export const ClientListComponent = props => {
  const {
    clients,
    selectedClients,
    numPages,
    currentPage,
    onPageChange,
    maxSelected,
    onSelectClient,
    removeClient,
    goToEdit,
  } = props;
  const columns = [
    {
      id: 1,
      cell: (row, engine) => (
        <OpfCell>
          <OpfControlCheckbox
            tabindex="0"
            checked={!!engine.getState().checked}
            disabled={
              maxSelected && !selectedClients.some(cli => cli.id == row.id)
            }
            onOpfChange={event => {
              onSelectClient(engine, event, row);
            }}
          />
        </OpfCell>
      ),
    },
    {
      id: 2,
      header: {
        title1: 'Full name',
        fig1: 'ICO281',
      },
      cell: row => <OpfCellInfo text={row.first_name + ' ' + row.last_name} />,
    },
    {
      id: 3,
      header: {
        title1: 'Email',
        fig1: 'ICO384',
      },
      cell: row => <OpfCellInfo text={row.email} />,
    },
    {
      id: 4,
      header: {
        title1: 'Gender',
        fig1: 'ICO033',
      },
      cell: row => <OpfCellInfo text={row.gender} />,
    },
    {
      id: 5,
      cell: (row, engine) => (
        <OpfCell alignment="center">
          <OpfMenuLauncher
            tabIndex="0"
            onOpfActionMenu={e =>
              engine.doFireEvent('ContextMenuClick', e.detail.action)
            }
          >
            <OpfMenuContextual>
              {actions.map(it => (
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
  selectedClients: PropTypes.array,
  numPages: PropTypes.number,
  currentPage: PropTypes.number,
  maxSelected: PropTypes.bool,
  onPageChange: PropTypes.func,
  onSelectClient: PropTypes.func,
  removeClient: PropTypes.func,
  goToEdit: PropTypes.func,
};
