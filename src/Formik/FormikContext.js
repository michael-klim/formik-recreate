import React from 'react';


const FormikContext = React.createContext();

const FormikProvider = FormikContext.Provider;

const useFormikContext = () => {
  const formikProps = React.useContext(FormikContext);

  return formikProps;
};

export { FormikProvider, useFormikContext };