import React from 'react';
import PropTypes from 'prop-types';

const TemplateComponent = props => {
  const { name } = props;
  return <h2 className="template-component">Hello {name}!</h2>;
};

TemplateComponent.propTypes = {
  name: PropTypes.string,
};

export default TemplateComponent;
