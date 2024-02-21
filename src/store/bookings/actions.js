export default {
  loadBookingsList: async ({ commit }) => {
    commit("setLoadingOn");
    try {
      const response = await fetch("/bookings.json");
      const bookingsData = await response.json();
      commit("setBookingsList", bookingsData);
    } catch (err) {
      console.log("Load error: ", err);
      commit("setLoadError", err);
    } finally {
      commit("setLoadingOff");
    }
  },
};
