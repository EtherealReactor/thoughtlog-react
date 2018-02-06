import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Styles from '../../CSS/Forms.css';
import LoginStyles from './Login.css';

const renderField = (props) => {
  let { type, placeholder, input, label, meta: {touched, error} } = props
  return (
    <div className={Styles.formGroup}>
      <label className={Styles.formLabel}>{label}</label>
      <input {...input} type={type} placeholder={placeholder} className={Styles.formInput} />
      {touched && (error && <span>{error}</span>)}
    </div>
  );
};

const Login = (props) => {  
  let {submitting, pristine, reset} = props  
  return (
    <div className={[Styles.formContainer, LoginStyles.Login].join(' ')}>
      <h1 className={Styles.formHeading}>Login with your credentials</h1>
      <form>
        <Field
          label="Email"
          name="email"
          type="input"
          placeholder="Email"
          component={renderField}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          component={renderField}
        />  
        <div>
          <button className={Styles.formButton} type="submit" disabled={pristine || submitting}>Log in</button>
          <button className={Styles.formButton} type="button" disabled={pristine || submitting} onClick={reset}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'loginForm'
})(Login)