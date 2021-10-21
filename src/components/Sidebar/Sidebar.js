import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import './sidebar.css';
import SidebarOption from './SidebarOption';
import { startGoogleLogout } from '../../actions/auth';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const HandleCreateNewChannel = () => {
    Swal.fire({
      icon: 'question',
      title: 'Name of the new channel?',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Create channel',
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Success',
          `Channel ${result.value} created successfuly!`,
          'success'
        );
      }
    });
  };

  const handleLogout = () => {
    dispatch(startGoogleLogout());
  };

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <h2>Channels</h2>
        <button onClick={HandleCreateNewChannel}>
          <i className='fas fa-plus'></i>
        </button>
      </div>

      <div className='sidebar__search'>
        <form>
          <i className='fas fa-search'></i>
          <input type='text' placeholder='Search' />
        </form>
      </div>

      <div className='sidebar__options'>
        <SidebarOption />
      </div>

      <div className='sidebar__footer'>
        <img
          className='sidebar__footerAvatar'
          src={user?.photoURL}
          alt='avatar'
        />
        <p className='sidebar__footerUsername'>{user?.displayName}</p>
        <button onClick={handleLogout} title='Logout'>
          <i className='fas fa-sign-out-alt'></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
