import { BrowserRouter as Router } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import ChatGroup from '../components/chat/ChatGroup';
import LoginScreen from '../components/auth/Login/LoginScreen';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const { user } = useSelector((state) => state.auth);

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
