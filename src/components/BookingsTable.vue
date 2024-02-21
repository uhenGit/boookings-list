<script>
import { mapGetters, mapState } from "vuex";
import ModalInfo from "./ModalInfo.vue";

export default {
  name: "BookingsTable",

  components: {
    ModalInfo,
  },

  data() {
    return {
      isShowModal: false,
      modalPosition: {},
      selectedBooking: null,
    };
  },

  computed: {
    ...mapState("period", ["selectedPeriod"]),
    ...mapGetters("bookings", ["bookingsByPeriod"]),
  },

  methods: {
    isOcupated(item, day) {
      return (
        new Date(item.start) <= new Date(day) &&
        new Date(item.end) >= new Date(day)
      );
    },

    ocupatedStyle(item, day) {
      if (item.start === day) {
        return "rounded-start-pill width-40 right-2";
      }

      if (item.end === day) {
        return "rounded-end-pill width-40 start-0";
      }

      return "width-102";
    },

    isCurrentDay(day) {
      return new Date().toDateString() === new Date(day).toDateString();
    },

    showPopup(evt, booking) {
      this.selectedBooking = booking;
      this.modalPosition = this.setPosition(evt);
      this.isShowModal = true;
    },

    hidePopup() {
      this.selectedBooking = null;
      this.modalPosition = {};
      this.isShowModal = false;
    },

    setPosition(event) {
      const modalWidth = 250;
      const modalHeight = 260;
      const coords = {
        left: `${event.x}px`,
        top: `${event.y}px`,
      };
      const documentWidth = document.documentElement.clientWidth;
      const documentHeight = document.documentElement.clientHeight;

      if (event.x + modalWidth > documentWidth) {
        coords.left = `${event.x - (modalWidth - (documentWidth - event.x))}px`;
      }

      if (event.y + modalHeight > documentHeight) {
        coords.maxHeight = "260px";
      }

      return coords;
    },
  },
};
</script>
<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Appartments name</th>
          <th
            v-for="(day, idx) in selectedPeriod"
            :key="idx"
            class="ps-3"
            :class="{ 'bg-warning bg-opacity-25': isCurrentDay(day) }"
            :title="[isCurrentDay(day) ? 'Current day' : '']"
          >
            {{ day }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in bookingsByPeriod" :key="booking.id">
          <td>{{ booking.roomDetails.name }}</td>
          <td
            v-for="(day, idx) in selectedPeriod"
            :key="idx"
            class="p-0 my-auto position-relative"
          >
            <p
              v-if="isOcupated(booking, day)"
              class="bg-primary h-100 m-0 position-absolute"
              :class="ocupatedStyle(booking, day)"
              :title="booking.name"
              @click="showPopup($event, booking)"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <modal-info
      v-if="isShowModal"
      :booking-data="selectedBooking"
      :modal-position="modalPosition"
      @hide-modal="hidePopup"
      @click="showPopup"
    />
  </div>
</template>
<style>
.width-40 {
  width: 40%;
}
.width-102 {
  width: 102%;
}
.right-2 {
  right: -2px;
}
</style>
