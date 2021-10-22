import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './sidebar.css';
import SidebarOption from './SidebarOption';
import { startLogout } from '../../actions/auth';
import {
  startCreatingChannel,
  startLoadingChannels,
} from '../../actions/channels';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { channels } = useSelector((state) => state.channels);

  useEffect(() => {
    dispatch(startLoadingChannels());
  }, [dispatch]);

  const HandleCreateNewChannel = () => {
    dispatch(startCreatingChannel());
  };

  const handleLogout = () => {
    dispatch(startLogout());
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
        {channels.map((channel) => (
          <SidebarOption
            key={channel.id}
            id={channel.id}
            title={channel.name}
          />
        ))}
      </div>

      <div className='sidebar__footer'>
        <img
          className='sidebar__footerAvatar'
          src={user?.photoURL}
          alt={user?.displayName}
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
