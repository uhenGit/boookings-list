export default {
  /**
   * Using the shiftDirection param (could be positive or negative), set a date to build filtration week
   * @param {*} param0
   * @param {number} shiftDirection - direction, that looks like +1/-1 to jump to the next/prev week
   */
  setSelectedDay: ({ state, commit, dispatch }, shiftDirection = null) => {
    if (!shiftDirection) {
      const today = new Date();
      commit("shiftSelectedDay", Date.parse(today));
      dispatch("setSelectedPeriod");

      return;
    }

    const shiftedDay =
      state.selectedDay + 60 * 60 * 24 * 7 * 1000 * shiftDirection; // day shift by one week
    commit("shiftSelectedDay", shiftedDay);
    dispatch("setSelectedPeriod");
  },

  /**
   * Build an array of weekdays (dates that looks like '2024-02-20') using the day,
   * set when the user click next/prev button
   * @param {*} param0
   */
  setSelectedPeriod: ({ commit, state }) => {
    const weekLength = 7;
    const selectedWeekDays = [];

    while (selectedWeekDays.length < weekLength) {
      // should do it on every iteration to avoid month shift
      const selectedDay = new Date(state.selectedDay);
      const weekDayIdx = selectedDay.getDay();
      const dayOfMonth = selectedDay.getDate();
      selectedWeekDays.push(
        new Date(
          selectedDay.setDate(dayOfMonth - weekDayIdx + selectedWeekDays.length)
        )
          .toISOString()
          .split("T")[0]
      );
    }

    commit("shiftPeriod", selectedWeekDays);
  },
};
