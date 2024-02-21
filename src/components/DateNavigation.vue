<script>
import { mapActions } from "vuex";

export default {
  name: "DateNavigation",

  methods: {
    ...mapActions("period", ["setSelectedDay"]),
  },
};
</script>
<template>
  <div class="flex my-2">
    <button
      class="text-bg-primary rounded px-4 me-2"
      @click="setSelectedDay(-1)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="white"
        class="bi bi-chevron-left"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
        />
      </svg>
    </button>
    <button
      class="text-bg-primary rounded px-4 me-2"
      @click="setSelectedDay(1)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="white"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
        />
      </svg>
    </button>
    <button class="text-bg-primary rounded px-2" @click="setSelectedDay()">
      Today
    </button>
  </div>
</template>
