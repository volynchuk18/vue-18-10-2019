<template>
  <div class="content">
    <h2 class="content-header">
      Technical support <span class="content-header-green-text">24/7</span>
    </h2>
    <div class="content-info">
      GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.
    </div>
    <div class="content-phone-number">
      <a href="tel:+41415446206">+41 41 544 62 06</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainHeaderContentRight"
  }
</script>

<style scoped lang="scss">
  .content {
    width: 50%;
    font-size: 15px;
    line-height: 30px;

    &-header {
      &-green-text {
        color: green;
      }
    }

    &-info {
      margin-top: 45px;
    }

    &-phone-number {
      a {
        color: green;
        cursor: pointer;
      }

      margin-top: 30px;
      font-size: 26px;
    }
  }
</style>
