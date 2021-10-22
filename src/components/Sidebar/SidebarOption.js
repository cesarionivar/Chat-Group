import { useDispatch } from 'react-redux';
import { setActiveChannel } from '../../actions/channels';
import { firstCharacter } from '../../helpers/firstCharacter';

const SidebarOption = ({ id, title }) => {
  const dispatch = useDispatch();

  const handleActiveChannel = () => {
    dispatch(setActiveChannel(id));
  };

  return (
    <div onClick={handleActiveChannel} className='sidebarOption'>
      <span className='sidebarOption__icon'>{firstCharacter(title)}</span>
      <span className='sidebarOption__title'>{title}</span>
    </div>
  );
};

export default SidebarOption;
