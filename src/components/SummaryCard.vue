<template>
  <div class="notification" :class="type">
    <h3 class="title"><b-icon :icon="icon"></b-icon> {{ title }}</h3>
    <p>ທົ່ວໂລກ: {{ overall }} ຄົນ</p>
    <p>ປະເທດລາວ: {{ laos }} ຄົນ</p>
  </div>
</template>
<script>
export default {
  name: "SummaryCard",
  props: {
    title: String,
    type: String,
    icon: String,
    overall: Number,
    laos: Number
  }
};
</script>
