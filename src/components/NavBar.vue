<template>
  <nav>
    <v-app-bar app absolute dark flat>
      <v-row>
        <v-btn
          plain
          text
          v-for="route of routes"
          :key="route.id"
          :to="route.route"
          >{{ route.name }}</v-btn
        >
        <v-spacer />
        <v-btn
          text
          href="https://artyboy.dev"
          target="_blank"
          rel="noopener noreferer"
          >ນັກພັດທະນາ</v-btn
        >
      </v-row>
    </v-app-bar>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      routes: [
        {
          id: "home",
          name: "covid19.artyboy.dev",
          route: "/"
        }
      ]
    };
  }
};
</script>
