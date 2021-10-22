import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import { app } from '../firebase/config';
import { login } from '../actions/auth';
import { finishLoading, startLoading } from '../actions/ui';

import ChatGroup from '../components/ChatGroup/ChatGroup';
import LoginScreen from '../components/auth/LoginScreen';
import Loader from '../components/Loader/Loader';

const auth = getAuth(app);

const AppRouter = () => {
  const { user } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
      }
      dispatch(finishLoading());
    });
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

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
