import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Styles from '../../CSS/Forms.css';
import Typography from '../../CSS/Typography.css';
import SignupStyles from './Signup.css';

const validate = (values) => {
  let errors = {}
  
  if(!values.username) {
    errors.username = 'Required'
  }
  
  if(!values.email) {
    errors.email = 'Required'
  }
  
  if(!values.password) {
    errors.password = 'Required'
  }
  
  return errors
}

const renderField = (props) => {
  let { type, placeholder, input, label, meta: {touched, error} } = props
  return (
    <div className={Styles.formGroup}>
      <label className={Styles.formLabel}>{label}</label>
      <input {...input} type={type} placeholder={placeholder} className={Styles.formInput} />
      {touched && (error && <span className={Styles.fieldRequired}>{error}</span>)}
    </div>
  );
};

const SignupForm = props => {
  const {pristine, submitting, handleSubmit } = props
  
  return (
    <div className={SignupStyles.Signup}>
      <h1 className={Typography.h1}>Shh, we won't tell anyone...</h1>
      <p className={Typography.p}>you can join the biggest 'Thought' sharing community</p>
      <div className={Styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <Field 
            name="username"
            type="input"
            placeholder=""
            label="Enter your name"
            component={renderField}
          />
          <Field 
            name="email"
            type="email"
            placeholder=""
            label="Tell Us Your Email"
            component={renderField}
          />
          <Field 
            name="password"
            type="password"
            placeholder=""
            label="Choose A Password"
            component={renderField}
          />
          <div>
            <button className={[Styles.formButton, SignupStyles.SignupButton].join(' ')}
              type="submit"
              disabled={pristine || submitting}>
              That's it.
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'SignupForm',
  validate: validate
})(SignupForm)