import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import ChatGroup from '../components/ChatGroup/ChatGroup';
import LoginScreen from '../components/auth/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { app } from '../firebase/config';
import { login } from '../actions/auth';
const auth = getAuth(app);

const AppRouter = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <PublicRoute
        isAuthenticated={!!user}
        path='/login'
        component={LoginScreen}
      />

      <PrivateRoute isAuthenticated={!!user} path='/' component={ChatGroup} />
    </Router>
  );
};

export default AppRouter;
