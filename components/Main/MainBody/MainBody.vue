<template>
  <main class="main-body">
    <main-body-info class="main-body__info" />
    <main-body-map class="main-body__map" />
  </main>
</template>

<script>
  import MainBodyMap from "./MainBodyMap";
  import MainBodyInfo from "./MainBodyInfo";
  export default {
    name: "MainBody",
    components: {MainBodyInfo, MainBodyMap}
  }
</script>

<style scoped lang="scss">
  .main-body {
    display: flex;
    height: 500px;

    &__info {
      width: 50%;
      background: #232323;
    }

    &__map {
      width: 50%;
    }
  }
</style>
