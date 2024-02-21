<script>
export default {
  name: "ModalInfo",
  props: {
    modalPosition: {
      type: Object,
      default: () => ({}),
    },

    bookingData: {
      type: Object,
      required: true,
    },
  },

  emits: ["hide-modal"],

  mounted() {
    document.addEventListener("mousedown", this.handleClickOutside);
  },

  beforeUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  },

  methods: {
    handleClickOutside(evt) {
      // prevent hide-menu event and handle it in the parent
      if (["modal", "modalitem"].includes(evt.target.role)) {
        return;
      }

      this.$emit("hide-modal");
    },
  },
};
</script>
<template>
  <div
    class="position-absolute bg-warning rounded p-3 flex flex-col"
    :style="modalPosition"
    role="modal"
  >
    <h4 role="modalitem">
      {{ bookingData.name }}
    </h4>
    <p role="modalitem">{{ bookingData.phone }}</p>
    <p role="modalitem">{{ bookingData.email }}</p>
    <p role="modalitem">{{ bookingData.typeOfApartments }}</p>
    <h5 role="modalitem">Number of guests:</h5>
    <p role="modalitem">
      Adults: <span>{{ bookingData.guestInfo.adults }}</span>
    </p>
    <p v-if="bookingData.guestInfo.children" role="modalitem">
      Children: <span>{{ bookingData.guestInfo.children }}</span>
    </p>
    <button
      class="bg-primary px-3 rounded mt-2"
      role="modalitem"
      @click="$emit('hide-modal')"
    >
      Close
    </button>
  </div>
</template>
