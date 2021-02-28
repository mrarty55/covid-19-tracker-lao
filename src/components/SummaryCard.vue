<template>
  <v-card :color="color" :dark="dark">
    <v-card-title
      ><v-icon left>{{ icon }}</v-icon
      >{{ title }}</v-card-title
    >
    <v-card-text>
      <p>ທົ່ວໂລກ: {{ overall | numFormat }}</p>
      <p>ປະເທດລາວ: {{ laos | numFormat }}</p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "SummaryCard",
  props: {
    title: String,
    color: String,
    icon: String,
    overall: Number,
    laos: Number,
    dark: {
      type: Boolean,
      default: false
    }
  }
};
</script>
