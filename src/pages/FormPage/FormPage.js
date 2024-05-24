import React, { useState, useEffect, useContext } from 'react';
import { FormComponent } from '../../components';
import { ClientsContext } from '../../common/context/ClientsContext';
import { router } from '@absis/core';
import { useParams } from 'react-router-dom';

const FormPage = () => {
  const { clientList, setClientList } = useContext(ClientsContext);
  const [modify, setModify] = useState(false);
  const [initialValues, setInitialValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
  });
  const navigationManager = router.navigationManager();
  const { id } = useParams();

  useEffect(() => {
    // Only execute when component is mount
    if (id !== undefined) {
      setModify(true);
      setInitialValues({
        first_name: clientList.find(cli => cli.id == id).first_name,
        last_name: clientList.find(cli => cli.id == id).last_name,
        email: clientList.find(cli => cli.id == id).email,
        gender: clientList.find(cli => cli.id == id).gender,
      });
    } else {
      setModify(false);
    }
  }, []);

  const onClear = () => {
    setInitialValues({
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
    });
  };

  const goBack = () => {
    router.navigateTo('/listado', { type: 'INTERNAL' }, navigationManager);
  };

  const onSubmit = event => {
    const { values } = event.detail.value;
    if (modify) {
      const newValues = {
        ...values,
        id: JSON.parse(id),
        actions: [
          { id: 'edit', name: 'Modificar' },
          { id: 'delete', name: 'Eliminar' },
        ],
      };
      setClientList(
        clientList.map(cli => {
          if (cli.id == id) {
            cli = newValues;
          }
          return cli;
        })
      );
      goBack();
    } else {
      const maxId =
        Math.max.apply(
          null,
          clientList.map(cli => {
            return cli.id;
          })
        ) + 1;
      const newValues = {
        ...values,
        id: maxId,
        actions: [
          { id: 'edit', name: 'Modificar' },
          { id: 'delete', name: 'Eliminar' },
        ],
      };
      setClientList([...clientList, newValues]);
      onClear();
    }
  };

  const showToast = () => {
    let toast = document.querySelector('#toast');
    toast.opened = true;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <FormComponent
            onSubmit={onSubmit}
            onClear={onClear}
            goBack={goBack}
            initialValues={initialValues}
            showToast={showToast}
          />
        </div>
      </div>
    </div>
  );
};

export default FormPage;
