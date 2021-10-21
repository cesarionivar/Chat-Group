import { useDispatch } from 'react-redux';
import { startGoogleLogin } from '../../actions/auth';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div>
      <h1>Login Screen</h1>
      <button onClick={handleLogin}>Sign in with google</button>
    </div>
  );
};

export default LoginScreen;
