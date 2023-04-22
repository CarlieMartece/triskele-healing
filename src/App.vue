<template>
  <div id="app">
    <NavBar v-if="windowWidth > 650" />
    <NavSlider v-else />
    <div id="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import NavSlider from "./components/NavSlider.vue";

export default {
  components: {
    NavBar,
    NavSlider,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
