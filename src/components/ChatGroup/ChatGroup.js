import Sidebar from '../Sidebar/Sidebar';
import MainChat from './MainChat';

import './chat.css';

const ChatGroup = () => {
  return (
    <div className='chatGroup'>
      <Sidebar />
      <MainChat />
    </div>
  );
};

export default ChatGroup;
