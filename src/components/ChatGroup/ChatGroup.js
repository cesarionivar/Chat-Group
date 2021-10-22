import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';

import './chat.css';
import Message from './Message';
import {
  startCreatingNewMessage,
  startGettingMessages,
} from '../../actions/channels';

const ChatGroup = () => {
  const dispatch = useDispatch();
  const { activeChannel, messages } = useSelector((state) => state.channels);
  const { user } = useSelector((state) => state.auth);

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!activeChannel) return;
    dispatch(startGettingMessages(activeChannel.id));
  }, [activeChannel, dispatch]);

  const createNewMessage = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    const newMessage = {
      message: inputValue,
      user_name: user?.displayName,
      user_photo: user?.photoURL,
      user_uid: user?.uid,
    };

    dispatch(startCreatingNewMessage(activeChannel.id, newMessage));
    setInputValue('');
  };

  return (
    <div className='chatGroup'>
      <Sidebar />

      {activeChannel ? (
        <div className='mainChat'>
          <div className='mainChat__header'>
            <h2>{activeChannel?.title}</h2>
          </div>

          <div className='mainChat__messages'>
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>

          <div className='mainChat__footer'>
            <form onSubmit={createNewMessage}>
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type='text'
                placeholder='Type a message here'
              />
              <button type='submit'>
                <i className='fas fa-paper-plane'></i>
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className='mainChat'>
          <h2 className='mainChat__title'>
            ✨ Create or select a channel to start a conversation!!!
          </h2>
        </div>
      )}
    </div>
  );
};

export default ChatGroup;
