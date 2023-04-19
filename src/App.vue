<template>
  <div id="container">
    <NavigationBar v-if="windowWidth > 650" />
    <NavSlider v-else />
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import NavSlider from "./components/NavSlider.vue";

export default {
  components: {
    NavigationBar,
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
