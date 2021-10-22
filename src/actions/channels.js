import Swal from 'sweetalert2';
import { types } from '../types/types';

import {
  onSnapshot,
  orderBy,
  addDoc,
  collection,
  doc,
  serverTimestamp,
} from '@firebase/firestore';
import { db } from '../firebase/config';

export const startLoadingChannels = () => {
  return async (dispatch) => {
    onSnapshot(
      collection(db, 'channels'),
      orderBy('time', 'asc'),
      (snapshot) => {
        const channelList = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }));
        dispatch(loadChannels(channelList));
      }
    );
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
        const channelRef = await addDoc(collection(db, 'channels'), {
          name: value,
          time: serverTimestamp(),
        });
        dispatch(setActiveChannel({ id: channelRef.id, title: value }));
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
    const docRef = doc(db, 'channels', channelId);
    onSnapshot(
      collection(docRef, 'messages'),
      orderBy('time', 'asc'),
      (snapshot) => {
        const messagesList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(loadMessages(messagesList));
      }
    );
  };
};

export const startCreatingNewMessage = (channelId, message) => {
  return async () => {
    try {
      const docRef = doc(db, 'channels', channelId);
      const messagesCol = collection(docRef, 'messages');
      await addDoc(messagesCol, {
        ...message,
        time: serverTimestamp(),
      });
    } catch (e) {
      Swal.fire('Error', 'Error sending the message', 'error');
    }
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
