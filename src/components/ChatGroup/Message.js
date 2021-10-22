import moment from 'moment';
import './message.css';

const Message = ({ message: { time, message, user_photo, user_name } }) => {
  const timeStamp = moment(time?.toDate()).calendar();

  return (
    <div className='message'>
      <div className='message__userPhoto'>
        <img src={user_photo} alt='user' />
      </div>
      <div className='message__data'>
        <div className='message__dataUser'>
          <p>{user_name}</p>
          <span>{timeStamp}</span>
        </div>

        <div className='message__message'>{message}</div>
      </div>
    </div>
  );
};

export default Message;
