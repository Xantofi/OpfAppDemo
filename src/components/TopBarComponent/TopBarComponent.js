import React from 'react';
import PropTypes from 'prop-types';
import { OpfTextfieldSearch, OpfButtonIcon } from '@absis-components/react';

export const TopBarComponent = props => {
  const { onInput, goToAdd } = props;
  return (
    <>
      <div className="col-10">
        <OpfTextfieldSearch className="m-4" onOpfInput={onInput} />
      </div>
      <div className="col-2">
        <OpfButtonIcon
          iconSource="ICO030"
          variant="secondary"
          size="medium"
          className="mt-4"
          onOpfClick={() => {
            goToAdd();
          }}
        />
      </div>
    </>
  );
};

TopBarComponent.propTypes = {
  onInput: PropTypes.func,
  goToAdd: PropTypes.func,
};
