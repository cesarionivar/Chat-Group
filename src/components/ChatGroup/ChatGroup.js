import { useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { useSelector } from 'react-redux';
import { db } from '../../firebase/config';
import Sidebar from '../Sidebar/Sidebar';

import './chat.css';
import Message from './Message';

const ChatGroup = () => {
  const { activeChannel } = useSelector((state) => state.channels);

  // TODO: Get the messages in an specific channel
  useEffect(() => {
    const getMessages = async () => {
      const querySnapshot = await getDocs(collection(db, 'messages'));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };
    getMessages();
  }, []);

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
