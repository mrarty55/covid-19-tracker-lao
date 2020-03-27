<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">ບໍ່ພົບໜ້າທີ່ຕ້ອງການເຂົ້າເຖິງ!</h1>
          <p class="subtitle">
            ກະລຸນາກວດສອບທີ່ຢູ່ໃຫ້ຖືກຕ້ອງ ແລ້ວລອງໃໝ່ອີກຄັ້ງ...
          </p>
        </div>
      </div>
    </section>
    <figure class="box has-text-centered">
      <img src="/error-image.webp" alt="Error" />
    </figure>
  </div>
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
          "ບໍ່ພົບໜ້າທີ່ຕ້ອງການເຂົ້າເຖິງ - ເວັບໄຊຕິດຕາມການແຜ່ລະບາດຂອງ COVID-19"
      },
      {
        name: "og:description",
        content: "ບໍ່ພົບໜ້າທີ່ຕ້ອງການເຂົ້າເຖິງ"
      },
      {
        name: "org:image",
        content: "https://covid19tracker.artyboy.dev/covid19.webp"
      },
      {
        name: "twitter:card",
        content: "summary"
      },
      {
        name: "twitter:title",
        content:
          "ບໍ່ພົບໜ້າທີ່ຕ້ອງການເຂົ້າເຖິງ - ເວັບໄຊຕິດຕາມການແຜ່ລະບາດຂອງ COVID-19"
      },
      {
        name: "twitter:description",
        content: "ບໍ່ພົບໜ້າທີ່ຕ້ອງການເຂົ້າເຖິງ"
      },
      {
        name: "twitter:image",
        content: "https://covid19tracker.artyboy.dev/covid19.webp"
      }
    ]
  }
};
</script>
