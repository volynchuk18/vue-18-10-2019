<template>
  <div class="content">
    <h2 class="content-header">
      GMS Headquarters
    </h2>
    <div class="content-info">
      <div class="content-info-left">
        <p>Global Message Services Ukraine LLC</p>
        <p>Bundesstrasse 5 | 3rd Floor</p>
        <p>6300 Zug</p>
        <p>Switzerland</p>
        <div class="content-info-left-phone-number">
          <a href="tel:+41415446200"> +41 41 544 62 00</a>
        </div>
      </div>
      <div class="content-info-right">
        <p>Email</p>
        <a href="mailto:info@gms-worldwide.com">info@gms-worldwide.com</a>
        <p>Send message</p>
        <a href="viber://chat?number=+41415446200">VIBER US</a>
        <p>Send form</p>
        <a href="#">CONTACT US</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainHeaderContentLeft"
  }
</script>

<style scoped lang="scss">
  .content {
    width: 650px / 1280px * 100%;
    font-size: 15px;
    line-height: 30px;

    &-header {

    }

    &-info {
      a {
        color: green;
        cursor: pointer;
      }

      margin-top: 45px;
      display: flex;
      justify-content: space-between;
      height: 180px;

      &-left {
        display: flex;
        flex-direction: column;
        width: 50%;

        &-phone-number {
          margin-top: auto;
          font-size: 26px;
        }
      }

      &-right {
        width: 50%;
        a {
          font-weight: 600;
        }
      }
    }
  }
</style>
