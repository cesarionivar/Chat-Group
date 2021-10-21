import Swal from 'sweetalert2';
import './sidebar.css';
import SidebarOption from './SidebarOption';

const Sidebar = () => {
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
          src='https://avatars.dicebear.com/api/adventurer/x.svg'
          alt='avatar'
        />
        <p className='sidebar__footerUsername'>Cesario Nivar</p>
        <button title='Logout'>
          <i className='fas fa-sign-out-alt'></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
