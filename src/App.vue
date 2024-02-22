<script>
import DateNavigation from "./components/DateNavigation.vue";
import BookingsTable from "./components/BookingsTable.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",

  components: {
    DateNavigation,
    BookingsTable,
  },

  computed: {
    ...mapState("bookings", ["isLoading", "loadError"]),
    ...mapState("period", ["selectedDay"]),
  },

  async created() {
    await this.loadBookingsList();

    if (!this.selectedDay) {
      this.setSelectedDay();
    }
  },

  methods: {
    ...mapActions("bookings", ["loadBookingsList"]),
    ...mapActions("period", ["setSelectedDay"]),
  },
};
</script>

<template>
  <div id="app">
    <div v-if="loadError">Error loading data</div>
    <div v-else>
      <header>
        <date-navigation />
      </header>

      <div v-if="isLoading">Loading...</div>
      <main v-else>
        <bookings-table />
      </main>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
