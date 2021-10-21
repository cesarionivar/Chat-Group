import Sidebar from '../Sidebar/Sidebar';

import './chat.css';
import Message from './Message';

const ChatGroup = () => {
  return (
    <div className='chatGroup'>
      <Sidebar />

      <div className='mainChat'>
        <div className='mainChat__header'>
          <h2>Front-end Developers</h2>
        </div>

        <div className='mainChat__messages'>
          <Message />
        </div>

        <div className='mainChat__footer'>
          <form>
            <input type='text' placeholder='Type a message here' />
            <button type='submit'>
              <i className='fas fa-paper-plane'></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatGroup;
