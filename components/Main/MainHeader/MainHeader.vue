<template>
  <header class="main-header">
    <div class="main-header__title">
      <h1>Contacts</h1>
    </div>
    <div class="main-header__content">
      <main-header-content-left />
      <main-header-content-right />
    </div>
  </header>
</template>

<script>
  import MainHeaderContentLeft from "./MainHeaderContentLeft";
  import MainHeaderContentRight from "./MainHeaderContentRight";

  export default {
    name: "MainHeader",
    components: {MainHeaderContentRight, MainHeaderContentLeft}
  }
</script>

<style scoped lang="scss">
  .main-header {
    padding: 60px 60px 0;
    height: 475px;

    &__title {
      font-size: 10px;
    }

    &__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 45px;
    }
  }
</style>
