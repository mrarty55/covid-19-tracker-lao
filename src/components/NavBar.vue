<template>
  <nav>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-row v-if="!$vuetify.breakpoint.mobile">
        <v-btn text v-for="route of routes" :key="route.id" :to="route.route">{{
          route.name
        }}</v-btn>
        <v-menu>
          <template #activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on"
              >ເວັບໄຊທີ່ກ່ຽວຂ້ອງ<v-icon right>fas fa-sort-down</v-icon></v-btn
            >
          </template>
          <v-list>
            <v-list-item
              v-for="item of links"
              :key="item.id"
              :href="item.url"
              rel="noopener noreferer"
              target="_blank"
              >{{ item.name }}</v-list-item
            >
          </v-list>
        </v-menu>
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
    <v-navigation-drawer app temporary light v-model="drawer">
      <v-list>
        <v-list-item v-for="item of routes" :key="item.id" :to="item.route">{{
          item.name
        }}</v-list-item>
        <v-list-group>
          <template #activator>
            <v-list-item-content>
              <v-list-item-title>ເວັບໄຊທີ່ກ່ຽວຂ້ອງ</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="item of links"
            :key="item.id"
            :href="item.url"
            rel="noopener noreferer"
            target="_blank"
            >{{ item.name }}</v-list-item
          >
        </v-list-group>
        <v-list-item
          href="https://artyboy.dev"
          ref="noopener noreferer"
          target="_blank"
          >ນັກພັດທະນາ</v-list-item
        >
      </v-list>
    </v-navigation-drawer>
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
          name: "ໜ້າຫຼັກ",
          route: "/"
        },
        {
          id: "what-is-covid19",
          name: "COVID-19 ແມ່ນຫຍັງ",
          route: "/what-is-covid-19"
        },
        {
          id: "covid-19-prevention",
          name: "ວິທີປ້ອງກັນ COVID-19",
          route: "/covid-19-prevention"
        }
      ],
      links: [
        {
          id: "moh-lao",
          name: "ກະຊວງສາທາລະນະສຸກ",
          url: "https://moh.gov.la"
        },
        {
          id: "covid19-lao",
          name: "ຄະນະສະເພາະກິດ COVID-19",
          url: "https://covid19.gov.la"
        },
        {
          id: "who-int",
          name: "ອົງການອະນາໄມໂລກ",
          url: "https://who.int"
        }
      ]
    };
  }
};
</script>
