<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  },
  metaInfo: {
    titleTemplate: "%s - COVID-19 Tracker for Laotian"
  }
};
</script>
