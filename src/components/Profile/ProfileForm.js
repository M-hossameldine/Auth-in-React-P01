import { useRef, useContext } from 'react';
import classes from './ProfileForm.module.css';

import { API_KEY } from '../../constants/api';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const newEnteredPassword = passwordInputRef.current.value;

    // could add validation

    let URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`;
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: newEnteredPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      // could add error handling, but for now I will assume that the request always success
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
