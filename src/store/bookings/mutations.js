export default {
  setBookingsList(state, payload) {
    state.bookingsList = payload;
  },
  setLoadingOn(state) {
    state.isLoading = true;
  },
  setLoadingOff(state) {
    state.isLoading = false;
  },
  setLoadError(state, payload) {
    state.loadError = payload;
  },
};
