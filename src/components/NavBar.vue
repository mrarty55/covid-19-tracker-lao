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
      <b-navbar-dropdown label="ເວັບໄຊທີ່ກ່ຽວຂ້ອງ">
        <b-navbar-item
          href="https://www.moh.gov.la/"
          target="_blank"
          rel="noopener noreferer"
          >ກະຊວງສາທາລະນະສຸກ</b-navbar-item
        >
        <b-navbar-item
          href="https://covid19.gov.la/"
          target="_blank"
          rel="noopener noreferer"
          >ຄະນະສະເພາະກິດ COVID-19</b-navbar-item
        >
        <b-navbar-item
          href="https://who.int"
          target="_blank"
          rel="noopener noreferer"
          >ອົງການອະນາໄມໂລກ</b-navbar-item
        >
      </b-navbar-dropdown>
    </template>
    <template slot="end">
      <b-navbar-item
        href="https://artyboy.dev"
        target="_blank"
        rel="noopener noreferer"
        >ເວັບໄຊນັກພັດທະນາ</b-navbar-item
      >
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
