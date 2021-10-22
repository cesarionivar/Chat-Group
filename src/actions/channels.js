import Swal from 'sweetalert2';
import { types } from '../types/types';

import { addDoc, collection, getDocs } from '@firebase/firestore';
import { db } from '../firebase/config';

export const startLoadingChannels = () => {
  return async (dispatch) => {
    const channelsCol = collection(db, 'channels');
    const channelSnapshot = await getDocs(channelsCol);
    const channelList = channelSnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
    }));

    dispatch(loadChannels(channelList));
  };
};

export const startCreatingChannel = () => {
  return (dispatch) => {
    Swal.fire({
      icon: 'question',
      title: 'Name of the new channel?',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!';
        }
      },
      showCancelButton: true,
      confirmButtonText: 'Create channel',
      showLoaderOnConfirm: true,
      preConfirm: async (value) => {
        await addDoc(collection(db, 'channels'), {
          name: value,
        });
      },
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
};

export const startGettingMessages = (channelId) => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, 'channels'));
    querySnapshot.docs.forEach(async (doc) => {
      if (doc.id === channelId) {
        console.log(doc.id);
        // TODO: Get messages from the document
      }
    });

    // .doc(channelId)
    // .collection('messages')
    // .orderBy('time', 'asc')
    // .onSnapshot((snapshot) =>
    //   dispatch(loadMessages(snapshot.docs.map((doc) => doc.data())))
    // );
  };
};

export const setActiveChannel = (channel) => ({
  type: types.channelsSetActive,
  payload: channel,
});

const loadChannels = (channels) => ({
  type: types.channelsLoadChannels,
  payload: channels,
});

const loadMessages = (messages) => ({
  type: types.channelLoadMessages,
  payload: messages,
});
