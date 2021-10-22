import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';

import './chat.css';
import Message from './Message';
import { startGettingMessages } from '../../actions/channels';

const ChatGroup = () => {
  const dispatch = useDispatch();
  const { activeChannel } = useSelector((state) => state.channels);

  // TODO: Get the messages in an specific channel
  useEffect(() => {
    if (!activeChannel) return;
    dispatch(startGettingMessages(activeChannel.id));
  }, [activeChannel, dispatch]);

  return (
    <div className='chatGroup'>
      <Sidebar />

      {activeChannel ? (
        <div className='mainChat'>
          <div className='mainChat__header'>
            <h2>{activeChannel?.title}</h2>
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
      ) : (
        <h2 className='mainChat'>Load channel</h2>
      )}
    </div>
  );
};

export default ChatGroup;
