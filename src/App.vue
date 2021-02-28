<template>
  <v-app>
    <header>
      <NavBar />
    </header>
    <v-main>
      <router-view />
    </v-main>
    <footer>
      <Foot />
    </footer>
  </v-app>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Foot from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Foot
  },
  metaInfo: {
    titleTemplate: "%s - ເວັບໄຊຕິດຕາມການແພ່ລະບາດຂອງ COVID-19",
    meta: [
      {
        name: "author",
        content: "Philaphonh Inthavongsa"
      },
      {
        name: "keywords",
        content: "COVID-19, Coronavirus, ໂຄວິດ-19, ໄວຣັສໂຄໂຣນາ"
      }
    ]
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: "Noto Sans Lao";
  src: url("assets/fonts/NotoSansLao-Light.woff2");
  font-weight: 300;
}
@font-face {
  font-family: "Noto Sans Lao";
  src: url("assets/fonts/NotoSansLao-Regular.woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Noto Sans Lao";
  src: url("assets/fonts/NotoSansLao-Medium.woff2");
  font-weight: 500;
}
@font-face {
  font-family: "Noto Sans Lao";
  src: url("assets/fonts/NotoSansLao-SemiBold.woff2");
  font-weight: 600;
}
@font-face {
  font-family: "Noto Sans Lao";
  src: url("assets/fonts/NotoSansLao-Bold.woff2");
  font-weight: 700;
}
</style>
