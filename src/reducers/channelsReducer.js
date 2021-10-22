import { types } from '../types/types';

const initialState = {
  channels: [],
  activeChannel: null,
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

    default:
      return state;
  }
};
