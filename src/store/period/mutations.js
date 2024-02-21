export default {
  shiftSelectedDay: (state, payload) => {
    state.selectedDay = payload;
  },
  shiftPeriod: (state, payload) => {
    state.selectedPeriod = payload;
  },
};
