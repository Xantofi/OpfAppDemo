import React, { useState, useEffect } from 'react';
import { logger } from '@absis/core';
import { UiButton } from '@absis-components/react';
import TemplateComponent from '../../components/TemplateComponent/TemplateComponent';

const TemplatePage = () => {
  const [name, setName] = useState('TemplatePage');

  useEffect(() => {
    // Only execute when component is mount
    logger.debug({ message: 'Only execute when component is mount' });
  }, []);

  useEffect(() => {
    // Only execute when name state is changed
    logger.debug({ message: 'Only execute when name state is changed' });
  }, [name]);

  useEffect(() => {
    // Execute each time component is rerendered
    logger.debug({ message: 'Execute each time component is rerendered' });
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="template-page">Hello {name}!</h1>
          <TemplateComponent name="Test"></TemplateComponent>
          <UiButton
            onAbsisButtonClick={() => {
              setName('Other Name');
            }}
          >
            Change name
          </UiButton>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
