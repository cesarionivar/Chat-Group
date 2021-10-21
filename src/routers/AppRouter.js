import { BrowserRouter as Router } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import ChatGroup from '../components/ChatGroup/ChatGroup';
import LoginScreen from '../components/auth/LoginScreen';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  // const { user } = useSelector((state) => state.auth);
  const user = 'Cesario';

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
