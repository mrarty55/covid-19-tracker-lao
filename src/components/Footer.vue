<template>
  <v-footer app absolute>
    <v-col class="text-center" cols="12">
      <p>
        {{ year }} © COVID-19 Tracking Website. Built by Philaphonh Inthavongsa
      </p>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  name: "Foot",
  data: () => {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
