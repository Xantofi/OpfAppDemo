import React from 'react';
import { UiButton, UiImage } from '@absis-components/react';
import styles from './styles/app.module.css';
import logo from './assets/images/logo-caixa.png';
import { router } from '@absis/core';

const App = () => {
  const navigationManager = router.navigationManager();

  return (
    <section className={styles['app']}>
      <div className={styles['logo-caixa']}>
        <UiImage alt="logo caixabank" src={logo} />
      </div>
      <UiButton
        className={styles['ui-button']}
        href="/GettingStarted"
        type="external"
      >
        Get Started with OpenFront-SPA
      </UiButton>
      <UiButton
        className={styles['ui-button']}
        href="/Marketplace"
        type="external"
      >
        Components Marketplace
      </UiButton>
      <UiButton className={styles['ui-button']} href="/React" type="external">
        Learn React
      </UiButton>
      <UiButton
        fill="link"
        onAbsisButtonClick={() => {
          router.navigateTo(
            `/listado`,
            {
              type: 'Internal',
            },
            navigationManager
          );
        }}
      >
        Go to Client List Page
      </UiButton>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </section>
  );
};
export default App;
