import React from "react";
import { useFormikContext } from "./FormikContext";

const Form = (props) => {
  const formikProps = useFormikContext();
  const { handleSubmit } = formikProps;
  return (
    <form onSubmit={handleSubmit} {...props}/>
  );
};

export { Form };
