<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        {{ year }} © COVID-19 Tracker Website. Built with ❤️ by Philaphonh
        Inthavongsa
      </p>
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
