import { useDispatch } from 'react-redux';
import { startGoogleLogin } from '../../../actions/auth';

import './login.css';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <h3>Sign in</h3>
        <h2>Chat Group</h2>
        <button onClick={handleLogin}>
          <img
            src='https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK'
            alt='Google Image'
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
