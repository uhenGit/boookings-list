export default {
  /**
   * Select the bookings that have the start day greater than the first day of the current week
   * and the end day less than the last day of the current week
   * @param {*} param0 - initial array of bookings (bookingsList) from state, period from rootState
   * @returns {Array} list of bookings that matches
   */
  bookingsByPeriod: ({ bookingsList }, _, { period }) => {
    const { selectedPeriod } = period;

    return bookingsList.filter(({ end, start }) => {
      return (
        new Date(start) >= new Date(selectedPeriod[0]) &&
        new Date(end) <= new Date(selectedPeriod[selectedPeriod.length - 1])
      );
    });
  },
};
