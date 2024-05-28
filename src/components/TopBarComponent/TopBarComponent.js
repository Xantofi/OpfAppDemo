import React from 'react';
import PropTypes from 'prop-types';
import {
  OpfTextfieldSearch,
  OpfButton,
  OpfButtonIcon,
  OpfGrid,
  OpfGridItem,
} from '@absis-components/react';

export const TopBarComponent = props => {
  const { onInput, goToAdd, canCompare, openComparator } = props;
  return (
    <OpfGrid justifyContent="flex-end">
      <OpfGridItem b100={10}>
        <OpfTextfieldSearch className="m-4" onOpfInput={onInput} />
      </OpfGridItem>
      <OpfGridItem b100={2}>
        <OpfButtonIcon
          iconSource="ICO030"
          variant="secondary"
          size="medium"
          className="mt-4"
          onOpfClick={() => {
            goToAdd();
          }}
        />
      </OpfGridItem>
      <OpfGridItem b100={2}>
        <OpfButton disabled={!canCompare} onOpfClick={openComparator}>
          Comparar
        </OpfButton>
      </OpfGridItem>
    </OpfGrid>
  );
};

TopBarComponent.propTypes = {
  canCompare: PropTypes.bool,
  onInput: PropTypes.func,
  goToAdd: PropTypes.func,
  openComparator: PropTypes.func,
};
