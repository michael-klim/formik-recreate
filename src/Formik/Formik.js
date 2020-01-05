import React from "react";
import PropTypes from "prop-types";
import toLowerCase from "lodash/lowerCase";
import { FormikProvider } from "./FormikContext";
import { setNestedObjectValues } from "./utils";

const formikReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD_VALUE":
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload
        }
      };
    case "SET_FIELD_TOUCHED":
      return {
        ...state,
        touched: {
          ...state.touched,
          ...action.payload
        }
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload.errors
      };
    case "SUBMIT_ATTEMPT":
      return {
        ...state,
        touched: setNestedObjectValues(state.values, true),
        isSubmitting: true
      };
    default:
      return state;
  }
};

const useFormik = props => {
  const { onSubmit, initialValues, validate } = props;

  const [state, dispatch] = React.useReducer(formikReducer, {
    values: initialValues,
    touched: {},
    errors: {},
    isSubmitting: false
  });

  const handleChange = fieldName => event => {
    dispatch({
      type: "SET_FIELD_VALUE",
      payload: { [fieldName]: event.target.value }
    });
  };

  const handleBlur = fieldName => () => {
    dispatch({
      type: "SET_FIELD_TOUCHED",
      payload: { [fieldName]: true }
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "SUBMIT_ATTEMPT" });
    if (validate) {
      const errors = validate(state.values);
      if (Object.keys(errors)) {
        dispatch({ type: "SET_ERRORS", payload: { errors } });
      }
    }
    onSubmit(state.values);
  };

  const getFieldProps = fieldName => ({
    onChange: handleChange(fieldName),
    onBlur: handleBlur(fieldName),
    name: fieldName,
    value: state.values[fieldName],
    label: toLowerCase(fieldName)
  });

  return { ...state, handleChange, handleBlur, handleSubmit, getFieldProps };
};

const Formik = props => {
  const { children, ...useFormikProps } = props;
  const formikProps = useFormik(useFormikProps);

  return (
    <FormikProvider value={formikProps}>{children(formikProps)}</FormikProvider>
  );
};

Formik.propTypes = {
  children: PropTypes.func.isRequired
};

export { Formik, useFormik };
