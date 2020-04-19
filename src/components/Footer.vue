<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        {{ year }} © COVID-19 Tracker Website. Built by Philaphonh Inthavongsa
      </p>
      <p>{{ year }} © ເວັບໄຊຕິດຕາມ COVID-19. ພັດທະນາໂດຍ ພິລະພົນ ອິນທະວົງສາ</p>
    </div>
  </footer>
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
