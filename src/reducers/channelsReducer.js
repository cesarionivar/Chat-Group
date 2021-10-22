import { types } from '../types/types';

const initialState = {
  channels: [],
  activeChannel: null,
  messages: [],
};

export const channelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.channelsLoadChannels:
      return {
        ...state,
        channels: [...action.payload],
      };

    case types.channelsSetActive:
      return {
        ...state,
        activeChannel: action.payload,
      };

    case types.channelLoadMessages:
      return {
        ...state,
        messages: action.payload,
      };

    default:
      return state;
  }
};
