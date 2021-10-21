import './message.css';

const Message = () => {
  return (
    <div className='message'>
      <div className='message__userPhoto'>
        <img
          src='https://avatars.dicebear.com/api/adventurer/x.svg'
          alt='user'
        />
      </div>
      <div className='message__data'>
        <div className='message__dataUser'>
          <p>Cesario Nivar</p>
          <span>yesterday at 2:29 AM</span>
        </div>

        <div className='message__message'>Ok</div>
      </div>
    </div>
  );
};

export default Message;
