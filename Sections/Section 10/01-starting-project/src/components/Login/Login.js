import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

// For useReducer Example
const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')}

  }
  return {value:'', isValid: false}
}

const passwordReducer = (state, action) => {
  if(action.type === "USER_INPUT"){
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }

  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
}

const Login = () => {
  // This is for the useEffect Example
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
 //  const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // This is for useReducer Example
  const [emailState, dispatchEmail] = useReducer(emailReducer,{value:'', isValid: false})
  const [passwordState, dispatchPassword] = useReducer(passwordReducer,{value:'', isValid: false})

  // useEffect(() => {console.log('Effect Running')}, [])
  // console.log("Component Rendering...")
  // To reduce unneccessary useEffect 
  // Desctructs the object and adds an alias to the destructured values. We use these object properties as dependencies in the useEffect hook
  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  const authCtx = useContext(AuthContext)
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  
  useEffect(()=>{
   const identifier =  setTimeout(() => {
    // We only care about whether the isValid state updates
      setFormIsValid(emailIsValid && passwordIsValid)
    },500)

    // Clean Up function that runs before useEffect and before component is removed. Does not run before the first side effect function execution. 
    // Clears the timer from the last side effect execution and sets a new on
    return () => {clearTimeout(identifier); console.log("Cleanup")}
  },[emailIsValid, passwordIsValid]) 
  // this will make sure that the useEffect hook only runs whe the validity of the password or email is updated. Otherwise it would have ran after every password or email change
  // which is not ideal

  const emailChangeHandler = (event) => { 
    dispatchEmail({type:"USER_INPUT", val: event.target.value});
    // setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:"USER_INPUT", val: event.target.value})
    // setEnteredPassword(event.target.value);

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'})

  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authCtx.onLogin(emailState.value, passwordState.value)
    }
    else if (!emailIsValid){
      emailInputRef.current.focus()
    }
    else {
      passwordInputRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
          <Input
            ref={emailInputRef}
            type="email"
            label="Email"
            id="email"
            isValid={emailIsValid}
            value={emailState.value}
            onChangeHandler={emailChangeHandler}
            onBlurHandler={validateEmailHandler}
          />
          <Input
            ref={passwordInputRef}
            type="password"
            label="Password"
            id="password"
            isValid={passwordIsValid}
            value={passwordState.value}
            onChangeHandler={passwordChangeHandler}
            onBlurHandler={validatePasswordHandler}
          />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
