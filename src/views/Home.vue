<template>
  <div class="container content">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            ຂໍ້ມູນການແພ່ລະບາດຂອງໂຣກຕິດເຊື້ອໄວຣັສໂຄໂຣນາສາຍພັນໃໝ່ 2019
          </h1>
          <p class="subtitle">
            ຂໍ້ມູນທາງສະຖິຕິຕໍ່ໄປນີ້ແມ່ນໄດ້ຮັບມາຈາກ API ຂອງທາງ
            <a
              href="https://github.com/NovelCOVID/API"
              target="_blank"
              rel="noopener noreferer"
              >github.com/NovelCOVID/API</a
            >
          </p>
        </div>
      </div>
    </section>
    <section class="columns">
      <div class="column">
        <div class="notification is-warning">
          <h3 class="title"><b-icon icon="virus"></b-icon> ກວດພົບ</h3>
          <p>ທົ່ວໂລກ: {{ overall.cases }} ຄົນ</p>
          <p>ປະເທດລາວ: {{ laos.cases }} ຄົນ</p>
        </div>
      </div>
      <div class="column">
        <div class="notification is-danger">
          <h3 class="title">
            <b-icon icon="skull-crossbones"></b-icon> ເສຍຊີວິດ
          </h3>
          <p>ທົ່ວໂລກ: {{ overall.deaths }} ຄົນ</p>
          <p>ປະເທດລາວ: {{ laos.deaths }} ຄົນ</p>
        </div>
      </div>
      <div class="column">
        <div class="notification is-success">
          <h3 class="title"><b-icon icon="smile"></b-icon> ຮັກສາແລ້ວ</h3>
          <p>ທົ່ວໂລກ: {{ overall.recovered }} ຄົນ</p>
          <p>ປະເທດລາວ: {{ laos.recovered }} ຄົນ</p>
        </div>
      </div>
    </section>
    <hr />
    <b-table
      :data="allCountries"
      :columns="tableColumn"
      :default-sort="['cases', 'desc']"
      sticky-header
      height="100vh"
    ></b-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  metaInfo: {
    title: "ໜ້າຫຼັກ",
    meta: [
      {
        vmid: "title",
        name: "title",
        content: "ໜ້າຫຼັກ - ເວັບໄຊຕິດຕາມການແຜ່ລະບາດຂອງ COVID-19"
      },
      {
        vmid: "description",
        name: "description",
        content: "ເວັບໄຊຕິດຕາມການແຜ່ລະບາດຂອງ COVID-19 ພາສາລາວແບບບໍ່ເປັນທາງການ"
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
        content: "ໜ້າຫຼັກ - ເວັບໄຊຕິດຕາມການແຜ່ລະບາດຂອງ COVID-19"
      },
      {
        vmid: "og:description",
        name: "og:description",
        property: "og:description",
        content: "ເວັບໄຊຕິດຕາມການແຜ່ລະບາດຂອງ COVID-19 ພາສາລາວແບບບໍ່ເປັນທາງການ"
      },
      {
        vmid: "og:url",
        name: "og:url",
        property: "og:url",
        content: "https://covid19tracker.artyboy.dev"
      },
      {
        vmid: "org:image",
        name: "org:image",
        property: "org:image",
        content: "https://covid19tracker.artyboy.dev/covid19.webp"
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
        content: "ໜ້າຫຼັກ - ເວັບໄຊຕິດຕາມການແຜ່ລະບາດຂອງ COVID-19"
      },
      {
        vmid: "twitter:description",
        name: "twitter:description",
        property: "twitter:description",
        content: "ເວັບໄຊຕິດຕາມການແຜ່ລະບາດຂອງ COVID-19 ພາສາລາວແບບບໍ່ເປັນທາງການ"
      },
      {
        vmid: "twitter:url",
        name: "twitter:url",
        property: "twitter:url",
        content: "https://covid19tracker.artyboy.dev"
      },
      {
        vmid: "twitter:image",
        name: "twitter:image",
        property: "twitter:image",
        content: "https://covid19tracker.artyboy.dev/covid19.webp"
      }
    ]
  },
  data: () => {
    return {
      allCountries: [],
      laos: [],
      overall: [],
      tableColumn: [
        {
          field: "country",
          label: "ປະເທດ",
          sortable: true,
          width: 250
        },
        {
          field: "cases",
          label: "ກວດພົບ",
          sortable: true
        },
        {
          field: "todayCases",
          label: "ກວດພົບຫຼ້າສຸດ",
          sortable: true
        },
        {
          field: "deaths",
          label: "ເສຍຊີວິດ",
          sortable: true
        },
        {
          field: "todayDeaths",
          label: "ເສຍຊີວິດຫຼ້າສຸດ",
          sortable: true
        },
        {
          field: "recovered",
          label: "ຮັກສາແລ້ວ",
          sortable: true
        },
        {
          field: "active",
          label: "ກໍາລັງຮັກສາ",
          sortable: true
        },
        {
          field: "critical",
          label: "ອາການໜັກ",
          sortable: true
        }
      ]
    };
  },
  created: function() {
    this.getAllCountriesData();
    this.getLaosData();
    this.getOverallData();
  },
  methods: {
    getAllCountriesData() {
      this.$http
        .get("https://corona.lmao.ninja/countries")
        .then(res => {
          this.allCountries = res.data;
        })
        .catch(err => console.error(err));
    },
    getLaosData() {
      this.$http
        .get("https://corona.lmao.ninja/countries/lao")
        .then(res => {
          this.laos = res.data;
        })
        .catch(err => console.error(err));
    },
    getOverallData() {
      this.$http
        .get("https://corona.lmao.ninja/all")
        .then(res => {
          this.overall = res.data;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>
