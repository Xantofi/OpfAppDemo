import React from 'react';
import PropTypes from 'prop-types';
import {
  OpfForm,
  OpfTextfieldText,
  OpfGrid,
  OpfGridItem,
  OpfButton,
  OpfToast,
} from '@absis-components/react';

export const FormComponent = props => {
  const { onSubmit, onClear, goBack, initialValues, showToast } = props;

  return (
    <>
      <OpfForm
        onOpfFormSubmit={onSubmit}
        onReset={onClear}
        className="w-100"
        initialValues={initialValues}
      >
        <OpfGrid className="mt-5">
          <OpfGridItem b100={12}>
            <OpfTextfieldText name="first_name" label="first_name" />
            <OpfTextfieldText
              name="last_name"
              label="last_name"
              className="mt-3"
            />
            <OpfTextfieldText name="email" label="email" className="mt-3" />
            <OpfTextfieldText name="gender" label="gender" className="mt-3" />
          </OpfGridItem>
          <OpfGridItem b100={4} className="mt-3">
            <OpfButton
              type="submit"
              onOpfClick={event => {
                () => onSubmit(event);
                showToast();
              }}
            >
              Submit
            </OpfButton>
          </OpfGridItem>
          <OpfGridItem b100={4} className="mt-3">
            <OpfButton type="reset" onOpfClick={onClear}>
              Reset
            </OpfButton>
          </OpfGridItem>
          <OpfGridItem b100={4} className="mt-3">
            <OpfButton onOpfClick={goBack}>Go back</OpfButton>
          </OpfGridItem>
        </OpfGrid>
      </OpfForm>
      <OpfToast
        id="toast"
        align="top"
        closeAuto
        showIcon
        text="Succesfully added the client."
        variant="success"
      />
    </>
  );
};

FormComponent.propTypes = {
  onSubmit: PropTypes.func,
  onClear: PropTypes.func,
  goBack: PropTypes.func,
  showToast: PropTypes.func,
  initialValues: PropTypes.object,
};
