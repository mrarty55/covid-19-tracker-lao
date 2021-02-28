<template>
  <v-container>
    <v-col class="text-center">
      <h2>ບໍ່ພົບໜ້າທີ່ຕ້ອງການເຂົ້າເຖິງ</h2>
      <p>ກະລຸນາລອງໃໝ່ອີກຄັ້ງ</p>
      <v-img src="/error-image.webp" alt="Error" width="50vw" class="mx-auto" />
    </v-col>
  </v-container>
</template>
<script>
export default {
  name: "NotFound",
  metaInfo: {
    title: "ບໍ່ໍພົບເຫັນ",
    meta: [
      {
        name: "title",
        content: "ບໍ່ພົບໜ້າທີ່ຕ້ອງການເຂົ້າເຖິງ"
      },
      {
        name: "description",
        content: "ບໍ່ພົບໜ້າທີ່ຕ້ອງການເຂົ້າເຖິງ"
      },
      {
        name: "og:type",
        content: "website"
      },
      {
        name: "og:title",
        content:
          "ບໍ່ພົບໜ້າທີ່ຕ້ອງການເຂົ້າເຖິງ - ເວັບໄຊຕິດຕາມການແພ່ລະບາດຂອງ COVID-19"
      },
      {
        name: "og:description",
        content: "ບໍ່ພົບໜ້າທີ່ຕ້ອງການເຂົ້າເຖິງ"
      },
      {
        name: "org:image",
        content: "https://covid19.artyboy.dev/covid19.webp"
      },
      {
        name: "twitter:card",
        content: "summary"
      },
      {
        name: "twitter:title",
        content:
          "ບໍ່ພົບໜ້າທີ່ຕ້ອງການເຂົ້າເຖິງ - ເວັບໄຊຕິດຕາມການແພ່ລະບາດຂອງ COVID-19"
      },
      {
        name: "twitter:description",
        content: "ບໍ່ພົບໜ້າທີ່ຕ້ອງການເຂົ້າເຖິງ"
      },
      {
        name: "twitter:image",
        content: "https://covid19.artyboy.dev/covid19.webp"
      }
    ]
  }
};
</script>
