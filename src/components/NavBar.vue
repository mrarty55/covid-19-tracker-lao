<template>
  <b-navbar type="is-dark">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <span>ໜ້າຫຼັກ</span>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/what-is-covid-19' }">
        <span>COVID-19 ແມ່ນຫຍັງ?</span>
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/covid-19-prevention' }">
        <span>ວິທີປ້ອງກັນ COVID-19</span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
