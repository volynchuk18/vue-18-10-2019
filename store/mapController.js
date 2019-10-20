export const CHANGE_MAP_POSITION = 'CHANGE_MAP_POSITION';
export const CHANGE_MARKER_POSITION = 'CHANGE_MARKER_POSITION';
export const CHANGE_ACTIVE_ADDRESS = 'CHANGE_ACTIVE_ADDRESS';

export const state = () => ({
  mapPosition: null,
  markerPosition: null,
  activeAddress: null
});

export const mutations = {
  [CHANGE_MAP_POSITION](state, payload) {
    state.mapPosition = payload
  },
  [CHANGE_MARKER_POSITION](state, payload) {
    state.markerPosition = payload
  },
  [CHANGE_ACTIVE_ADDRESS](state, payload) {
    state.activeAddress = payload
  },
};

export const getters = {
  mapPosition(state) {
    return state.mapPosition
  },
  markerPosition(state) {
    return state.markerPosition
  },
  activeAddress(state) {
    return state.activeAddress
  },
};
