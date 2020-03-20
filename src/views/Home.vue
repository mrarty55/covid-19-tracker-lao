<template>
  <div class="container content">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            ຂໍ້ມູນການແພ່ລະບາດຂອງໂຣກປອດອັກເສບໄວຣັສໂຄໂຣນາສາຍພັນໃໝ່ COVID-19
          </h1>
        </div>
      </div>
    </section>
    <p>
      ຂໍ້ມູນທາງສະຖິຕິຕໍ່ໄປນີ້ແມ່ນໄດ້ຮັບມາຈາກ API ຂອງທາງ
      <a href="https://github.com/javieraviles/covidAPI"
        >https://github.com/javieraviles/covidAPI</a
      >
    </p>
    <b-table
      :data="covid19"
      :columns="col"
      :default-sort="['country', 'asc']"
      sticky-header
      height="100vh"
    ></b-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => {
    return {
      covid19: [],
      col: [
        {
          field: "country",
          label: "ປະເທດ",
          sortable: true
        },
        {
          field: "cases",
          label: "ກວດພົບ",
          sortable: true
        },
        {
          field: "todayCases",
          label: "ກວດພົບມື້ນີ້",
          sortable: true
        },
        {
          field: "deaths",
          label: "ເສຍຊີວິດ",
          sortable: true
        },
        {
          field: "todayDeaths",
          label: "ເສຍຊີວິດມື້ນີ້",
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
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .get("https://coronavirus-19-api.herokuapp.com/countries")
        .then(res => {
          this.covid19 = res.data;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>
