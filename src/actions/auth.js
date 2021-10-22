import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { app, provider } from '../firebase/config';
import { types } from '../types/types';

const auth = getAuth(app);

export const startGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Sign-in successful.
        const user = result.user;
        dispatch(login(user));
      })
      .catch(() => {
        // An error happened.
        Swal.fire(
          'Error',
          'Has ocurred an error sign in with google!',
          'error'
        );
      });
  };
};

export const startLogout = () => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(logout());
      })
      .catch((error) => {
        // An error happened.
        Swal.fire('Error', 'Error sign in out!', 'error');
      });
  };
};

export const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

const logout = () => ({
  type: types.authLogout,
});
