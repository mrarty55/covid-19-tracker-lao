<template>
  <v-card :color="color" :dark="dark">
    <v-card-title
      ><v-icon left>{{ icon }}</v-icon
      >{{ title }}</v-card-title
    >
    <v-card-text>
      <p>
        ທົ່ວໂລກ: <span class="font-weight-bold">{{ overall | numFormat }}</span>
      </p>
      <p>
        ປະເທດລາວ: <span class="font-weight-bold">{{ laos | numFormat }}</span>
      </p>
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
