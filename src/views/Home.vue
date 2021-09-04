<template>
  <v-container>
    <v-col cols="12" class="text-center"
      ><h2>ຂໍ້ມູນການແພ່ລະບາດຂອງໂຣກຕິດເຊື້ອໄວຣັສໂຄໂຣນາສາຍພັນໃໝ່ 2019</h2>
      <p>
        ອ້າງອີງຂໍ້ມູນຈາກ
        <a href="https://disease.sh" rel="noopener noreferer" target="_blank"
          >disease.sh</a
        >
      </p>
      <p>
        ອັບເດດຂໍ້ມູນຫຼ້າສຸດເມື່ອ
        {{ laos.updated | moment("DD MMM YYYY") }}
        ເວລາ {{ laos.updated | moment("HH:mm:ss") }}
      </p></v-col
    >
    <v-divider />
    <v-row class="my-4">
      <v-col :cols="cols">
        <summary-card
          title="ກວດພົບ"
          color="orange"
          icon="fas fa-virus"
          :dark="true"
          :overall="overall.cases"
          :laos="laos.cases"
        />
      </v-col>
      <v-col :cols="cols">
        <summary-card
          title="ເສຍຊີວິດ"
          color="red"
          icon="fas fa-skull-crossbones"
          :dark="true"
          :overall="overall.deaths"
          :laos="laos.deaths"
        />
      </v-col>
      <v-col :cols="cols">
        <summary-card
          title="ປິ່ນປົວແລ້ວ"
          color="green"
          icon="fas fa-smile"
          :dark="true"
          :overall="overall.recovered"
          :laos="laos.recovered"
        />
      </v-col>
    </v-row>
    <v-divider />
    <v-data-table
      :headers="tableHeaders"
      :items="allCountries"
      :items-per-page="25"
      :search="searchText"
      sort-by="cases"
      :sort-desc="true"
      :footer-props="footerProps"
      class="my-4"
    >
      <template #top>
        <h3>ຕາຕະລາງຂໍ້ມູນການແພ່ລະບາດຂອງພະຍາດໂຄວິດ-19</h3>
        <v-text-field
          v-model="searchText"
          label="ຄົ້ນຫາປະເທດ (ພາສາອັງກິດເທົ່ານັ້ນ)"
        />
      </template>
      <template #[`item.cases`]="{ value }"
        ><span>{{ value | numFormat }}</span></template
      >
      <template #[`item.todayCases`]="{ value }"
        ><span>{{ value | numFormat }}</span></template
      >
      <template #[`item.deaths`]="{ value }"
        ><span>{{ value | numFormat }}</span></template
      >
      <template #[`item.todayDeaths`]="{ value }"
        ><span>{{ value | numFormat }}</span></template
      >
      <template #[`item.active`]="{ value }"
        ><span>{{ value | numFormat }}</span></template
      >
      <template #[`item.recovered`]="{ value }"
        ><span>{{ value | numFormat }}</span></template
      >
      <template #[`footer.page-text`]="props">
        <span>{{
          `ລາຍການທີ ${props.pageStart}-${props.pageStop} ຈາກທັງໝົດ ${props.itemsLength} ລາຍການ`
        }}</span>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SummaryCard from "@/components/SummaryCard";

export default {
  name: "Home",
  components: {
    SummaryCard
  },
  metaInfo: {
    titleTemplate: "ເວັບໄຊຕິດຕາມການແພ່ລະບາດຂອງ COVID-19",
    meta: [
      {
        vmid: "title",
        name: "title",
        content: "ເວັບໄຊຕິດຕາມການແພ່ລະບາດຂອງ COVID-19"
      },
      {
        vmid: "description",
        name: "description",
        content: "ເວັບໄຊຕິດຕາມການແພ່ລະບາດຂອງ COVID-19 ພາສາລາວແບບບໍ່ເປັນທາງການ"
      },
      {
        vmid: "og:type",
        name: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        vmid: "og:title",
        name: "og:title",
        property: "og:title",
        content: "ເວັບໄຊຕິດຕາມການແພ່ລະບາດຂອງ COVID-19"
      },
      {
        vmid: "og:description",
        name: "og:description",
        property: "og:description",
        content: "ເວັບໄຊຕິດຕາມການແພ່ລະບາດຂອງ COVID-19 ພາສາລາວແບບບໍ່ເປັນທາງການ"
      },
      {
        vmid: "og:url",
        name: "og:url",
        property: "og:url",
        content: "https://covid19.artyboy.dev"
      },
      {
        vmid: "org:image",
        name: "org:image",
        property: "org:image",
        content: "https://covid19.artyboy.dev/covid19.webp"
      },
      {
        vmid: "twitter:card",
        name: "twitter:card",
        property: "twitter:card",
        content: "summary"
      },
      {
        vmid: "twitter:title",
        name: "twitter:title",
        property: "twitter:title",
        content: "ເວັບໄຊຕິດຕາມການແພ່ລະບາດຂອງ COVID-19"
      },
      {
        vmid: "twitter:description",
        name: "twitter:description",
        property: "twitter:description",
        content: "ເວັບໄຊຕິດຕາມການແພ່ລະບາດຂອງ COVID-19 ພາສາລາວແບບບໍ່ເປັນທາງການ"
      },
      {
        vmid: "twitter:url",
        name: "twitter:url",
        property: "twitter:url",
        content: "https://covid19.artyboy.dev"
      },
      {
        vmid: "twitter:image",
        name: "twitter:image",
        property: "twitter:image",
        content: "https://covid19.artyboy.dev/covid19.webp"
      }
    ]
  },
  data: () => {
    return {
      allCountries: [],
      laos: {},
      overall: {},
      searchText: "",
      footerProps: {
        "items-per-page-text": "ຈໍານວນລາຍການ",
        "items-per-page-all-text": "ທັງໝົດ",
        "items-per-page-options": [25, 50, 75, 100, -1]
      },
      tableHeaders: [
        {
          text: "ປະເທດ",
          sortable: true,
          value: "country"
        },
        {
          text: "ກວດພົບ",
          sortable: true,
          value: "cases"
        },
        {
          text: "ກວດພົບມື້ນີ້",
          sortable: true,
          value: "todayCases"
        },
        {
          text: "ເສຍຊີວິດ",
          sortable: true,
          value: "deaths"
        },
        {
          text: "ເສຍຊີວິດມື້ນີ້",
          sortable: true,
          value: "todayDeaths"
        },
        {
          text: "ປີ່ນປົວແລ້ວ",
          sortable: true,
          value: "recovered"
        },
        {
          text: "ກໍາລັງປິ່ນປົວ",
          sortable: true,
          value: "active"
        }
      ]
    };
  },
  computed: {
    cols() {
      return this.$vuetify.breakpoint.mobile ? 12 : 4;
    }
  },
  created: function() {
    this.getAllCountriesData();
    this.getLaosData();
    // this.getLaosAltData();
    this.getOverallData();
  },
  methods: {
    getLaosData() {
      fetch(`${this.$apiUrl}/covid-19/countries/laos`)
        .then(res => res.json())
        .then(data => (this.laos = data));
    },
    getOverallData() {
      fetch(`${this.$apiUrl}/covid-19/all`)
        .then(res => res.json())
        .then(data => (this.overall = data));
    },
    getAllCountriesData() {
      fetch(`${this.$apiUrl}/covid-19/countries`)
        .then(res => res.json())
        .then(data => (this.allCountries = data));
    }
  }
};
</script>
